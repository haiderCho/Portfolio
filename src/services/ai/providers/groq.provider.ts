import OpenAI from "openai";
import { AIProvider } from "../types";
import { SYSTEM_PROMPT } from "@/constants";

const API_KEY = process.env.GROQ_API_KEY || '';

export class GroqProvider implements AIProvider {
  name = "Groq";
  private client: OpenAI | null = null;
  private conversationHistory: Array<{ role: 'system' | 'user' | 'assistant', content: string }> = [];

  initialize(): boolean {
    if (API_KEY) {
      this.client = new OpenAI({
        apiKey: API_KEY,
        baseURL: "https://api.groq.com/openai/v1",
        dangerouslyAllowBrowser: true // Required for client-side usage
      });
      this.conversationHistory = [{ role: 'system', content: SYSTEM_PROMPT }];
      return true;
    }
    return false;
  }

  createChatSession(): OpenAI | null {
    return this.client;
  }

  async sendMessageStream(
    client: OpenAI,
    message: string,
    onChunk: (text: string) => void
  ): Promise<string> {
    try {
      this.conversationHistory.push({ role: 'user', content: message });

      const stream = await client.chat.completions.create({
        model: 'llama-3.3-70b-versatile',
        messages: this.conversationHistory,
        temperature: 0.7,
        max_tokens: 500,
        stream: true,
      });

      let fullText = "";
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content || '';
        if (text) {
          fullText += text;
          onChunk(text);
        }
      }

      this.conversationHistory.push({ role: 'assistant', content: fullText });
      return fullText;
    } catch (error) {
      console.error("Groq API Error:", error);
      const errorMessage = " [SYSTEM ERROR: CONNECTION INTERRUPTED]";
      onChunk(errorMessage);
      return errorMessage;
    }
  }
}

import OpenAI from "openai";
import { AIProvider } from "../types";
import { SYSTEM_PROMPT } from "@/constants";

const API_KEY = process.env.DEEPSEEK_API_KEY || '';

export class DeepSeekProvider implements AIProvider {
  name = "DeepSeek";
  private client: OpenAI | null = null;
  private conversationHistory: Array<{ role: 'system' | 'user' | 'assistant', content: string }> = [];

  initialize(): boolean {
    if (API_KEY) {
      this.client = new OpenAI({
        apiKey: API_KEY,
        baseURL: "https://api.deepseek.com/v1",
        dangerouslyAllowBrowser: true
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
        model: 'deepseek-chat',
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
      console.error("DeepSeek API Error:", error);
      const errorMessage = " [SYSTEM ERROR: CONNECTION INTERRUPTED]";
      onChunk(errorMessage);
      return errorMessage;
    }
  }
}

import { GoogleGenAI, Chat } from "@google/genai";
import { AIProvider } from "../types";
import { SYSTEM_PROMPT } from "@/constants";

const API_KEY = process.env.GEMINI_API_KEY || '';

export class GeminiProvider implements AIProvider {
  name = "Gemini";
  private ai: GoogleGenAI | null = null;

  initialize(): boolean {
    if (API_KEY) {
      this.ai = new GoogleGenAI({ apiKey: API_KEY });
      return true;
    }
    return false;
  }

  createChatSession(): Chat | null {
    if (!this.ai) return null;
    
    return this.ai.chats.create({
      model: 'gemini-2.0-flash-exp',
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.7,
        maxOutputTokens: 500,
      },
    });
  }

  async sendMessageStream(
    chat: Chat,
    message: string,
    onChunk: (text: string) => void
  ): Promise<string> {
    try {
      const result = await chat.sendMessageStream({ message });
      
      let fullText = "";
      for await (const chunk of result) {
        const text = chunk.text;
        if (text) {
          fullText += text;
          onChunk(text);
        }
      }
      return fullText;
    } catch (error) {
      console.error("Gemini API Error:", error);
      const errorMessage = " [SYSTEM ERROR: CONNECTION INTERRUPTED]";
      onChunk(errorMessage);
      return errorMessage;
    }
  }
}

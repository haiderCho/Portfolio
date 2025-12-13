import { GoogleGenAI, Chat } from "@google/genai";

import { SYSTEM_PROMPT } from "@/constants";

// Ideally, this is handled via a backend proxy for security in production.
// For this static portfolio demo, we assume the environment variable is available during build/runtime.
const API_KEY = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;

export const initializeGemini = (): boolean => {
  if (API_KEY) {
    ai = new GoogleGenAI({ apiKey: API_KEY });
    return true;
  }
  return false;
};

export const createChatSession = (): Chat | null => {
  if (!ai) return null;
  
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_PROMPT,
      temperature: 0.7,
      maxOutputTokens: 500,
    },
  });
};

export const sendMessageStream = async (
  chat: Chat, 
  message: string, 
  onChunk: (text: string) => void
): Promise<string> => {
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
};
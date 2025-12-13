/* eslint-disable @typescript-eslint/no-explicit-any */
// AI Provider Types
export type AIProviderType = 
  | 'gemini'
  | 'cohere'
  | 'groq'
  | 'mistral'
  | 'huggingface'
  | 'deepseek'
  | 'openrouter';

// Base AI Provider Interface
export interface AIProvider {
  name: string;
  initialize: () => boolean;
  createChatSession: () => any;
  sendMessageStream: (
    session: any,
    message: string,
    onChunk: (text: string) => void
  ) => Promise<string>;
}

// Provider Configuration
export interface ProviderConfig {
  type: AIProviderType;
  name: string;
  description: string;
  model: string;
  enabled: boolean;
  apiKey?: string;
}

// Message type (re-export from main types for AI module)
export interface AIMessage {
  id: string;
  role: 'user' | 'model' | 'system';
  content: string;
  timestamp: Date;
  isStreaming?: boolean;
}

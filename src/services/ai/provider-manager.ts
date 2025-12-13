/* eslint-disable @typescript-eslint/no-explicit-any */
import { AIProvider, AIProviderType, ProviderConfig } from "./types";
import { GeminiProvider } from "./providers/gemini.provider";
import { GroqProvider } from "./providers/groq.provider";
import { DeepSeekProvider } from "./providers/deepseek.provider";
import { OpenRouterProvider } from "./providers/openrouter.provider";

// Provider Registry
const PROVIDERS: Record<AIProviderType, () => AIProvider> = {
  gemini: () => new GeminiProvider(),
  groq: () => new GroqProvider(),
  deepseek: () => new DeepSeekProvider(),
  openrouter: () => new OpenRouterProvider(),
  // Placeholder providers - require additional SDKs not yet installed
  cohere: () => { throw new Error("Cohere provider requires 'cohere-ai' package"); },
  mistral: () => { throw new Error("Mistral provider requires '@mistralai/mistralai' package"); },
  huggingface: () => { throw new Error("Hugging Face provider requires '@huggingface/inference' package"); },
};

// Provider Manager
export class ProviderManager {
  private static instance: ProviderManager;
  private currentProvider: AIProvider | null = null;
  private currentSession: any = null;
  private activeProviderType: AIProviderType = 'gemini';

  private constructor() {}

  static getInstance(): ProviderManager {
    if (!ProviderManager.instance) {
      ProviderManager.instance = new ProviderManager();
    }
    return ProviderManager.instance;
  }

  // Get available providers
  getAvailableProviders(): ProviderConfig[] {
    const configs: ProviderConfig[] = [
      {
        type: 'gemini',
        name: 'Gemini 2.0 Flash',
        description: 'Google AI - 1M tokens/min free',
        model: 'gemini-2.0-flash-exp',
        enabled: !!process.env.API_KEY,
        apiKey: process.env.API_KEY
      },
      {
        type: 'groq',
        name: 'Groq (Llama 3.3)',
        description: 'Ultra-fast inference - 30 req/min free',
        model: 'llama-3.3-70b-versatile',
        enabled: !!process.env.GROQ_API_KEY,
        apiKey: process.env.GROQ_API_KEY
      },
      {
        type: 'deepseek',
        name: 'DeepSeek Chat',
        description: 'Advanced reasoning - Free tier',
        model: 'deepseek-chat',
        enabled: !!process.env.DEEPSEEK_API_KEY,
        apiKey: process.env.DEEPSEEK_API_KEY
      },
      {
        type: 'openrouter',
        name: 'OpenRouter (Llama 3.2)',
        description: 'Multi-model access - Free tier',
        model: 'meta-llama/llama-3.2-3b-instruct:free',
        enabled: !!process.env.OPENROUTER_API_KEY,
        apiKey: process.env.OPENROUTER_API_KEY
      }
    ];

    return configs.filter(config => config.enabled);
  }

  // Initialize and switch provider
  setProvider(providerType: AIProviderType): boolean {
    try {
      const provider = PROVIDERS[providerType]();
      const initialized = provider.initialize();
      
      if (initialized) {
        this.currentProvider = provider;
        this.activeProviderType = providerType;
        this.currentSession = provider.createChatSession();
        
        // Store preference
        localStorage.setItem('preferred_ai_provider', providerType);
        return true;
      }
      return false;
    } catch (error) {
      console.error(`Failed to initialize ${providerType} provider:`, error);
      return false;
    }
  }

  // Get current provider
  getCurrentProvider(): AIProvider | null {
    return this.currentProvider;
  }

  // Get current session
  getCurrentSession(): any {
    return this.currentSession;
  }

  // Get active provider type
  getActiveProviderType(): AIProviderType {
    return this.activeProviderType;
  }

  // Get stored preference
  getStoredPreference(): AIProviderType | null {
    return localStorage.getItem('preferred_ai_provider') as AIProviderType | null;
  }

  // Send message using current provider
  async sendMessage(
    message: string,
    onChunk: (text: string) => void
  ): Promise<string> {
    if (!this.currentProvider || !this.currentSession) {
      throw new Error("No active provider or session");
    }

    return this.currentProvider.sendMessageStream(
      this.currentSession,
      message,
      onChunk
    );
  }
}

// Export singleton instance
export const providerManager = ProviderManager.getInstance();

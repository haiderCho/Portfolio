# Multi-Provider AI Integration - README

## Feature Status: **DISABLED** by default

Included a multi-provider AI chat system supporting 7 AI providers with ongoing free tiers. The feature is fully implemented but **DISABLED**.

## How to Enable Multi-Provider AI

**To enable the multi-provider AI system, change ONE line of code:**

### File: `src/config/features.ts`

```typescript
// Change this from false to true:
export const ENABLE_MULTI_PROVIDER_AI = true;
```

That's it! Once you change this, the system will:

- ✅ Show a provider selector in the chat UI
- ✅ Allow switching between available AI providers
- ✅ Remember user's provider preference
- ✅ Only show providers with valid API keys

## Supported Providers

The system supports 4 providers (with 3 more available if you install their SDKs):

### Ready to Use (No additional dependencies)

1. **Gemini** - Google AI (1M tokens/min free)
2. **Groq** - Ultra-fast inference (30 req/min free)
3. **DeepSeek** - Advanced reasoning (free tier)
4. **OpenRouter** - Multi-model access (free tier)

### Requires Additional SDKs

5. **Cohere** - Requires `npm install cohere-ai`
6. **Mistral AI** - Requires `npm install @mistralai/mistralai`  
7. **Hugging Face** - Requires `npm install @huggingface/inference`

## Environment Variables

Create a `.env` file in the project root with your API keys:

```env
# At minimum, provide one API key:
GEMINI_API_KEY=your_gemini_api_key_here

# Optional - add more providers:
GROQ_API_KEY=your_groq_api_key_here
DEEPSEEK_API_KEY=your_deepseek_api_key_here
OPENROUTER_API_KEY=your_openrouter_api_key_here

# If you install additional SDKs:
COHERE_API_KEY=your_cohere_api_key_here
MISTRAL_API_KEY=your_mistral_api_key_here
HUGGINGFACE_API_KEY=your_hf_token_here
```

## Getting Free API Keys

- **Gemini**: <https://aistudio.google.com/app/apikey>
- **Groq**: <https://console.groq.com/keys>
- **DeepSeek**: <https://platform.deepseek.com/api_keys>
- **OpenRouter**: <https://openrouter.ai/settings/keys>
- **Cohere**: <https://dashboard.cohere.com/api-keys>
- **Mistral**: <https://console.mistral.ai/api-keys>
- **Hugging Face**: <https://huggingface.co/settings/tokens>

## Implementation Details

### Folder Structure

```
src/
├── config/
│   └── features.ts          # Feature flags (ENABLE_MULTI_PROVIDER_AI)
└── services/
    ├── gemini.ts             # Original Gemini service (used when disabled)
    └── ai/                   # Multi-provider system
        ├── index.ts          # Exports
        ├── types.ts          # AI provider interfaces
        ├── provider-manager.ts  # Provider switching logic
        └── providers/        # Individual provider adapters
            ├── gemini.provider.ts
            ├── groq.provider.ts
            ├── deepseek.provider.ts
            └── openrouter.provider.ts
```

### How It Works

When `ENABLE_MULTI_PROVIDER_AI = false` (default):

- Uses the original `src/services/gemini.ts`
- Only Gemini is available
- No provider switching UI
- Backward compatible with existing code

When `ENABLE_MULTI_PROVIDER_AI = true`:

- Uses the new `src/services/ai/` system
- Shows provider selector in chat header
- Saves user's provider preference to localStorage
- Only displays providers with valid API keys

### Key Components

1. **Feature Flag** (`src/config/features.ts`)
   - Single source of truth for enabling/disabling the feature

2. **Provider Manager** (`src/services/ai/provider-manager.ts`)
   - Singleton that manages all AI providers
   - Handles provider initialization and switching
   - Routes messages to the active provider

3. **Provider Adapters** (`src/services/ai/providers/*.provider.ts`)
   - Implement the common `AIProvider` interface
   - Wrap provider-specific SDKs
   - Handle streaming responses uniformly

4. **TerminalChat Component** (`src/components/TerminalChat.tsx`)
   - Conditionally uses multi-provider or original implementation
   - Shows provider selector when multi-provider is enabled
   - Maintains backward compatibility

## Development Notes

- The `openai` package is used for multiple providers (Groq, DeepSeek, OpenRouter) since they all support OpenAI-compatible APIs
- Provider state is managed in the TerminalChat component
- Provider preference is persisted to localStorage
- Each provider maintains its own conversation history for context

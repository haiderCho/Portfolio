import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Send, Minimize2, Maximize2, Sparkles } from 'lucide-react';
import { createChatSession, sendMessageStream, initializeGemini } from '@/services/gemini';
import { Message } from '@/types';
import { Chat } from "@google/genai";
import { ENABLE_MULTI_PROVIDER_AI } from '@/config/features';
import { providerManager, type AIProviderType, type ProviderConfig } from '@/services/ai';

// Avatar Component
const AiAvatar = ({ state, mood }: { state: 'idle' | 'thinking' | 'speaking', mood: 'neutral' | 'happy' | 'alert' }) => {
  const baseColors = {
    neutral: 'text-cyber-primary border-cyber-primary',
    happy: 'text-cyber-secondary border-cyber-secondary',
    alert: 'text-red-500 border-red-500'
  };

  const coreColors = {
    neutral: 'bg-cyber-primary',
    happy: 'bg-cyber-secondary',
    alert: 'bg-red-500'
  };

  const currentColor = baseColors[mood];
  const currentCore = coreColors[mood];

  return (
    <div className={`relative w-8 h-8 flex items-center justify-center transition-all duration-500 ${currentColor}`}>
      {/* Outer Ring */}
      <div className={`absolute inset-0 border-2 rounded-full border-t-transparent border-b-transparent opacity-80 transition-all duration-500 ${state === 'thinking' ? 'animate-spin duration-150' : 'animate-[spin_4s_linear_infinite]'
        } ${currentColor}`} />

      {/* Inner Ring */}
      <div className={`absolute inset-1.5 border rounded-full border-r-transparent border-l-transparent opacity-60 transition-all duration-500 ${state === 'thinking' ? 'animate-[spin_0.5s_linear_infinite_reverse]' : 'animate-[spin_2s_linear_infinite_reverse]'
        } ${currentColor}`} />

      {/* Core */}
      <div className={`w-1.5 h-1.5 rounded-full shadow-[0_0_15px_currentColor] transition-all duration-300 ${currentCore} ${state === 'speaking' ? 'animate-speaking scale-125' :
        state === 'thinking' ? 'animate-pulse scale-90' : 'animate-pulse'
        }`} />
    </div>
  );
};

const TerminalChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      role: 'system',
      content: 'Digital Twin System v2.5 initialized. Ask me anything about Nafiz\'s work.',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasKey, setHasKey] = useState(false);

  // Multi-Provider State (only used when ENABLE_MULTI_PROVIDER_AI === true)
  const [availableProviders, setAvailableProviders] = useState<ProviderConfig[]>([]);
  const [activeProvider, setActiveProvider] = useState<AIProviderType>('gemini');
  const [showProviderMenu, setShowProviderMenu] = useState(false);

  // Avatar State
  const [avatarState, setAvatarState] = useState<'idle' | 'thinking' | 'speaking'>('idle');
  const [mood, setMood] = useState<'neutral' | 'happy' | 'alert'>('neutral');

  const chatSessionRef = useRef<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ENABLE_MULTI_PROVIDER_AI) {
      // Multi-provider initialization
      const providers = providerManager.getAvailableProviders();
      setAvailableProviders(providers);

      if (providers.length > 0) {
        // Try to use stored preference or default to first available
        const stored = providerManager.getStoredPreference();
        const defaultProvider = (stored && providers.find(p => p.type === stored)) 
          ? stored 
          : providers[0].type;
        
        const initialized = providerManager.setProvider(defaultProvider);
        setHasKey(initialized);
        setActiveProvider(defaultProvider);
        chatSessionRef.current = providerManager.getCurrentSession();
      } else {
        setHasKey(false);
      }
    } else {
      // Original Gemini-only initialization
      const initialized = initializeGemini();
      setHasKey(initialized);
      if (initialized) {
        chatSessionRef.current = createChatSession();
      }
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  // Derive Avatar State from Messaging Status
  useEffect(() => {
    const lastMsg = messages[messages.length - 1];

    // Determine Activity State
    if (lastMsg?.role === 'model' && lastMsg?.isStreaming) {
      if (lastMsg.content.length > 0) {
        setAvatarState('speaking');
      } else {
        setAvatarState('thinking');
      }
    } else if (isTyping) {
      setAvatarState('thinking');
    } else {
      setAvatarState('idle');
    }

    // Determine Mood based on user input sentiment (simple keyword match)
    const lastUserMsg = messages.slice().reverse().find(m => m.role === 'user');
    if (lastUserMsg) {
      const text = lastUserMsg.content.toLowerCase();
      if (text.includes('error') || text.includes('bug') || text.includes('fail') || text.includes('warning') || text.includes('bad')) {
        setMood('alert');
      } else if (text.includes('good') || text.includes('cool') || text.includes('thanks') || text.includes('yes') || text.includes('great')) {
        setMood('happy');
      } else {
        setMood('neutral');
      }
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || !chatSessionRef.current) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const botMsgId = (Date.now() + 1).toString();
    const botMsg: Message = {
      id: botMsgId,
      role: 'model',
      content: '',
      timestamp: new Date(),
      isStreaming: true
    };

    setMessages(prev => [...prev, botMsg]);

    if (ENABLE_MULTI_PROVIDER_AI) {
      // Use provider manager
      await providerManager.sendMessage(userMsg.content, (chunk) => {
        setMessages(prev => prev.map(msg =>
          msg.id === botMsgId
            ? { ...msg, content: msg.content + chunk }
            : msg
        ));
      });
    } else {
      // Original Gemini implementation
      await sendMessageStream(chatSessionRef.current, userMsg.content, (chunk) => {
        setMessages(prev => prev.map(msg =>
          msg.id === botMsgId
            ? { ...msg, content: msg.content + chunk }
            : msg
        ));
      });
    }

    setMessages(prev => prev.map(msg =>
      msg.id === botMsgId ? { ...msg, isStreaming: false } : msg
    ));
    setIsTyping(false);
  };

  const handleProviderChange = (providerType: AIProviderType) => {
    const success = providerManager.setProvider(providerType);
    if (success) {
      setActiveProvider(providerType);
      chatSessionRef.current = providerManager.getCurrentSession();
      setShowProviderMenu(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 bg-cyber-black border border-cyber-primary text-cyber-primary rounded-full shadow-[0_0_15px_rgba(0,240,255,0.3)] hover:shadow-[0_0_25px_rgba(0,240,255,0.6)] transition-all z-50 group"
      >
        <Terminal className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <span className="absolute -top-12 right-0 bg-cyber-panel border border-cyber-dim text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-cyber-text">
          Access Digital Twin
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[90vw] md:w-[450px] h-[600px] bg-cyber-black/95 backdrop-blur-md border border-cyber-primary rounded-lg flex flex-col shadow-[0_0_30px_rgba(0,0,0,0.8)] z-50 overflow-hidden font-mono text-sm">

      {/* Scanline Overlay */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent via-cyber-primary/10 to-transparent animate-scanline pointer-events-none z-20" />

      {/* Header */}
      <div className="flex items-center justify-between p-3 bg-cyber-panel border-b border-cyber-dim select-none cursor-move relative z-30">
        <div className="flex items-center gap-3">
          <AiAvatar state={avatarState} mood={mood} />
          <div className="flex flex-col">
            <span className={`font-bold tracking-wider text-xs ${mood === 'alert' ? 'text-red-500' : mood === 'happy' ? 'text-cyber-secondary' : 'text-cyber-primary'}`}>
              FOYTRIX_AI_V2.5
            </span>
            <span className="text-[10px] text-cyber-muted uppercase tracking-widest">
              {ENABLE_MULTI_PROVIDER_AI ? (
                `PROVIDER: ${availableProviders.find(p => p.type === activeProvider)?.name || 'UNKNOWN'}`
              ) : (
                `STATUS: ${avatarState === 'idle' ? 'STANDBY' : avatarState === 'thinking' ? 'PROCESSING' : 'TRANSMITTING'}`
              )}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {ENABLE_MULTI_PROVIDER_AI && availableProviders.length > 1 && (
            <div className="relative">
              <button
                onClick={() => setShowProviderMenu(!showProviderMenu)}
                className="text-cyber-primary hover:text-cyber-secondary transition-colors p-1"
                title="Switch AI Provider"
              >
                <Sparkles className="w-4 h-4" />
              </button>
              {showProviderMenu && (
                <div className="absolute top-full right-0 mt-2 bg-cyber-panel border border-cyber-dim rounded shadow-lg min-w-[200px] z-50">
                  {availableProviders.map((provider) => (
                    <button
                      key={provider.type}
                      onClick={() => handleProviderChange(provider.type)}
                      className={`w-full text-left px-3 py-2 text-xs hover:bg-cyber-black transition-colors ${
                        provider.type === activeProvider ? 'text-cyber-secondary' : 'text-cyber-text'
                      }`}
                    >
                      <div className="font-bold">{provider.name}</div>
                      <div className="text-[10px] text-cyber-muted">{provider.description}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
          <button
            onClick={() => setIsOpen(false)}
            className="text-cyber-muted hover:text-cyber-primary transition-colors"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Terminal Output */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono crt relative z-10">
        {!hasKey && (
          <div className="p-3 border border-red-500 bg-red-900/20 text-red-400 rounded">
            Warning: API_KEY not detected. Neural link offline. Please configure environment.
          </div>
        )}

        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[85%] p-3 rounded-lg ${msg.role === 'user'
                ? 'bg-cyber-primary/10 border border-cyber-primary/30 text-cyber-primary'
                : 'bg-cyber-panel border border-cyber-dim text-cyber-text'
                }`}
            >
              <div className="text-[10px] uppercase opacity-50 mb-1 flex justify-between">
                <span>{msg.role === 'model' ? 'Foytrix' : 'User'}</span>
                <span>{msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              </div>
              <div className="whitespace-pre-wrap leading-relaxed break-words">
                {msg.content}
                {msg.isStreaming && !msg.content && (
                  <span className="text-cyber-primary animate-pulse flex items-center gap-1">
                    <span className="inline-block w-2 h-4 bg-cyber-primary" />
                    PROCESSING_QUERY...
                  </span>
                )}
                {msg.isStreaming && msg.content && (
                  <span className="inline-block w-2.5 h-5 bg-cyber-primary ml-1 animate-pulse align-middle shadow-[0_0_8px_rgba(0,240,255,0.8)]" />
                )}
              </div>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-3 bg-cyber-panel border-t border-cyber-dim relative z-30">
        <div className="flex items-center gap-2 bg-cyber-black border border-cyber-dim rounded px-3 py-2 focus-within:border-cyber-primary transition-colors">
          <span className="text-cyber-primary animate-pulse">{'>'}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={hasKey ? "Query the system..." : "System Offline"}
            disabled={!hasKey || isTyping}
            className="flex-1 bg-transparent border-none outline-none text-cyber-text placeholder-cyber-muted"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || !hasKey || isTyping}
            className="text-cyber-primary hover:text-white disabled:opacity-30 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TerminalChat;
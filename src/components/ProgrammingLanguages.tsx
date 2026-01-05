import React from 'react';
import { Code2, Layers, Wrench, Monitor } from 'lucide-react';
import { ProgrammingLanguage } from '@/types/schemas';
import { getTechIcon } from '@/lib/techIconMap';

interface ProgrammingLanguagesProps {
    category?: 'Languages' | 'Frameworks & Libraries' | 'Tools & Platforms' | 'Operating Systems';
    title?: string;
    items?: ProgrammingLanguage[];
}

const ProgrammingLanguages: React.FC<ProgrammingLanguagesProps> = ({ category, title, items = [] }) => {
    const filteredLanguages = category
        ? items.filter(lang => lang.category === category)
        : items;

    const displayTitle = title || category || "Programming_Languages";

    const getIcon = () => {
        if (category === 'Languages') return <Code2 className="w-5 h-5 text-[var(--color-cyber-primary)]" />;
        if (category === 'Frameworks & Libraries') return <Layers className="w-5 h-5 text-[var(--color-cyber-primary)]" />;
        if (category === 'Tools & Platforms') return <Wrench className="w-5 h-5 text-[var(--color-cyber-primary)]" />;
        if (category === 'Operating Systems') return <Monitor className="w-5 h-5 text-[var(--color-cyber-primary)]" />;
        return <Code2 className="w-5 h-5 text-[var(--color-cyber-primary)]" />;
    };

    /**
     * Resolve icon class: prioritize shared techIconMap, fallback to lang.icon
     */
    const resolveIconClass = (lang: ProgrammingLanguage): string => {
        return getTechIcon(lang.name) || lang.icon || 'devicon-devicon-plain';
    };

    return (
        <div>
            <div className="flex items-center gap-3 mb-4">
                {getIcon()}
                <h3 className="text-xl font-bold text-[var(--color-cyber-text)]">{displayTitle}</h3>
            </div>
            <div className="bg-[var(--color-cyber-panel)] border border-[var(--color-cyber-dim)] rounded-lg p-4">
                <div className="flex flex-wrap gap-3 justify-center">
                    {filteredLanguages.map((lang) => (
                        <div
                            key={lang.name}
                            className="language-badge relative flex flex-col items-center justify-center w-[64px] h-[64px] bg-[var(--color-cyber-dark)] border border-[var(--color-cyber-dim)] rounded-lg hover:border-[var(--color-cyber-primary)] active:border-[var(--color-cyber-primary)] transition-all cursor-pointer group"
                            style={{
                                '--lang-color': 'var(--color-cyber-primary)',
                                '--lang-glow': 'var(--color-cyber-dim)',
                            } as React.CSSProperties}
                        >
                            {/* Icon */}
                            <i
                                className={`${resolveIconClass(lang)} text-2xl mb-1 transition-all duration-300 group-hover:scale-110 group-active:scale-110`}
                                style={{ color: 'var(--color-cyber-text)' }}
                            />

                            {/* Language name */}
                            <span className="text-[8px] font-mono text-[var(--color-cyber-muted)] group-hover:text-[var(--color-cyber-primary)] group-active:text-[var(--color-cyber-primary)] transition-colors text-center px-1 truncate w-full leading-tight">
                                {lang.name}
                            </span>

                            {/* Glow effect on hover */}
                            <div
                                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"
                                style={{
                                    background: `radial-gradient(circle at center, var(--color-cyber-dim), transparent 70%)`,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .language-badge:hover i,
                .language-badge:active i {
                    filter: drop-shadow(0 0 8px var(--color-cyber-primary));
                    color: var(--color-cyber-primary) !important;
                    animation: glow-pulse 1.5s ease-in-out infinite;
                }

                @keyframes glow-pulse {
                    0%, 100% {
                        filter: drop-shadow(0 0 8px var(--color-cyber-primary));
                    }
                    50% {
                        filter: drop-shadow(0 0 16px var(--color-cyber-primary)) drop-shadow(0 0 24px var(--color-cyber-primary));
                    }
                }
            `}</style>
        </div>
    );
};

export default ProgrammingLanguages;

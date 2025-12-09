import React from 'react';
import { Code2, Layers, Wrench, Monitor } from 'lucide-react';
import { PROGRAMMING_LANGUAGES } from '../constants';

interface ProgrammingLanguagesProps {
    category?: 'Languages' | 'Frameworks & Libraries' | 'Tools & Platforms' | 'Operating Systems';
    title?: string;
}

const ProgrammingLanguages: React.FC<ProgrammingLanguagesProps> = ({ category, title }) => {
    const filteredLanguages = category
        ? PROGRAMMING_LANGUAGES.filter(lang => lang.category === category)
        : PROGRAMMING_LANGUAGES;

    const displayTitle = title || category || "Programming_Languages";

    const getIcon = () => {
        if (category === 'Languages') return <Code2 className="w-5 h-5 text-cyber-primary" />;
        if (category === 'Frameworks & Libraries') return <Layers className="w-5 h-5 text-cyber-primary" />;
        if (category === 'Tools & Platforms') return <Wrench className="w-5 h-5 text-cyber-primary" />;
        if (category === 'Operating Systems') return <Monitor className="w-5 h-5 text-cyber-primary" />;
        return <Code2 className="w-5 h-5 text-cyber-primary" />;
    };

    return (
        <div>
            <div className="flex items-center gap-3 mb-4">
                {getIcon()}
                <h3 className="text-xl font-bold text-white">{displayTitle}</h3>
            </div>
            <div className="bg-cyber-panel border border-cyber-dim rounded-lg p-4">
                <div className="flex flex-wrap gap-3 justify-center">
                    {filteredLanguages.map((lang) => (
                        <div
                            key={lang.name}
                            className="language-badge relative flex flex-col items-center justify-center w-[64px] h-[64px] bg-cyber-dark border border-cyber-dim rounded-lg hover:border-cyber-primary active:border-cyber-primary transition-all cursor-pointer group"
                            style={{
                                '--lang-color': lang.color,
                                '--lang-glow': lang.glowColor,
                            } as React.CSSProperties}
                        >
                            {/* Icon */}
                            <i
                                className={`${lang.icon} text-2xl mb-1 transition-all duration-300 group-hover:scale-110 group-active:scale-110`}
                                style={{ color: lang.color }}
                            />

                            {/* Language name */}
                            <span className="text-[8px] font-mono text-cyber-muted group-hover:text-cyber-primary group-active:text-cyber-primary transition-colors text-center px-1 truncate w-full leading-tight">
                                {lang.name}
                            </span>

                            {/* Glow effect on hover */}
                            <div
                                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 pointer-events-none blur-xl"
                                style={{
                                    background: `radial-gradient(circle at center, ${lang.glowColor}, transparent 70%)`,
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                .language-badge:hover i,
                .language-badge:active i {
                    filter: drop-shadow(0 0 8px var(--lang-glow));
                    animation: glow-pulse 1.5s ease-in-out infinite;
                }

                @keyframes glow-pulse {
                    0%, 100% {
                        filter: drop-shadow(0 0 8px var(--lang-glow));
                    }
                    50% {
                        filter: drop-shadow(0 0 16px var(--lang-glow)) drop-shadow(0 0 24px var(--lang-glow));
                    }
                }
            `}</style>
        </div>
    );
};

export default ProgrammingLanguages;

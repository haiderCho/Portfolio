import React, { useState } from 'react';
import { Monitor, Sun, Moon, Terminal, Cpu, Gamepad2, Palette, TreePine, Coffee, Compass, Gem, Mountain, Flower2, Code, Waves, Square } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { ThemeId, themes } from '@/config/themes';

const ThemeSwitcher: React.FC = () => {
    const { currentTheme, setTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    const icons: Record<ThemeId, React.ReactNode> = {
        cyber: <Cpu size={18} />,
        minimal: <Sun size={18} />,
        synthwave: <Palette size={18} />,
        terminal: <Terminal size={18} />,
        midnight: <Moon size={18} />,
        gamer: <Gamepad2 size={18} />,
        forest: <TreePine size={18} />,
        coffee: <Coffee size={18} />,
        blueprint: <Compass size={18} />,
        noir: <Gem size={18} />,
        nordic: <Mountain size={18} />,
        sakura: <Flower2 size={18} />,
        dracula: <Code size={18} />,
        ocean: <Waves size={18} />,
        brutal: <Square size={18} />,
    };

    return (
        <div className="relative z-50">
            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full bg-[var(--color-cyber-panel)] text-[var(--color-cyber-primary)] 
                           border border-[rgba(255,255,255,0.1)] hover:border-[var(--color-cyber-primary)] 
                           transition-all duration-300 hover:shadow-[0_0_15px_var(--color-cyber-dim)]
                           flex items-center gap-2 group"
                aria-label="Change Theme"
            >
                <span className="group-hover:rotate-90 transition-transform duration-300">
                    {icons[currentTheme]}
                </span>
                <span className="hidden md:inline text-sm font-mono tracking-wider opacity-80">
                    {themes[currentTheme].label}
                </span>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <>
                    <div 
                        className="fixed inset-0 bg-transparent" 
                        onClick={() => setIsOpen(false)} 
                    />
                    <div className="absolute right-0 mt-2 w-48 py-2 rounded-xl backdrop-blur-md 
                                    bg-[var(--color-cyber-panel)]/90 border border-[rgba(255,255,255,0.1)]
                                    shadow-[0_0_30px_rgba(0,0,0,0.5)] animate-in fade-in slide-in-from-top-2">
                        <div className="px-3 py-1 mb-2 border-b border-[rgba(255,255,255,0.05)]">
                            <span className="text-xs text-[var(--color-cyber-muted)] font-mono">SELECT THEME</span>
                        </div>
                        
                        {(Object.values(themes) as any[]).map((theme) => (
                            <button
                                key={theme.id}
                                onClick={() => {
                                    setTheme(theme.id);
                                    setIsOpen(false);
                                }}
                                className={`w-full px-4 py-2 text-left flex items-center gap-3 transition-colors
                                            ${currentTheme === theme.id 
                                                ? 'bg-[var(--color-cyber-primary)]/10 text-[var(--color-cyber-primary)]' 
                                                : 'text-[var(--color-cyber-text)] hover:bg-[rgba(255,255,255,0.05)]'}
                                `}
                            >
                                <span className={`${currentTheme === theme.id ? 'animate-pulse' : ''}`}>
                                    {icons[theme.id as ThemeId]}
                                </span>
                                <div className="flex flex-col">
                                    <span className="text-sm font-bold tracking-wide">{theme.label}</span>
                                    {currentTheme === theme.id && (
                                        <span className="text-[10px] text-[var(--color-cyber-muted)] leading-none mt-0.5">Active</span>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default ThemeSwitcher;

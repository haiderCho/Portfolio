import React, { createContext, useContext, useEffect, useState } from 'react';
import { defaultTheme, ThemeId, themes } from '../config/themes';

interface ThemeContextType {
    currentTheme: ThemeId;
    setTheme: (theme: ThemeId) => void;
    themeConfig: typeof themes[ThemeId];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState<ThemeId>(() => {
        const saved = localStorage.getItem('theme') as ThemeId;
        return (saved && themes[saved]) ? saved : defaultTheme;
    });

    useEffect(() => {
        // Update DOM
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        // Persist
        localStorage.setItem('theme', currentTheme);

        // Dynamic Title (Optional Polish)
        const titles: Record<ThemeId, string> = {
            cyber: 'SYSTEM: ONLINE',
            minimal: 'Portfolio',
            synthwave: 'R E T R O // WAVE',
            terminal: 'usr@portfolio:~$',
            midnight: 'Night Mode',
            gamer: 'Lvl. 99 Boss',
            forest: 'Nature System',
            coffee: 'Coffee Shop',
            blueprint: 'Schematics',
            noir: 'Noir Luxury',
            nordic: 'Nordic Design',
            sakura: 'Sakura Season',
            dracula: 'Dracula Theme',
            ocean: 'Deep Ocean',
            brutal: 'BRUTALISM',
        };
        document.title = titles[currentTheme] || 'Portfolio';

        // Favicon Logic (This would require actual refined favicon files to work well, 
        // sticking to title for now to be safe from 404s).

    }, [currentTheme]);

    return (
        <ThemeContext.Provider 
            value={{ 
                currentTheme, 
                setTheme: setCurrentTheme,
                themeConfig: themes[currentTheme]
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

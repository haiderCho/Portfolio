import { ThemeConfig } from './types';
import { PALETTE } from '../colors';


export const minimal: ThemeConfig = {
    id: 'minimal',
    label: 'Minimal',
    greetingText: 'Welcome',
    description: 'Polished, Sharp, Luxury',
    colors: {
        primary: PALETTE.obsidian, // Stark Black
        secondary: PALETTE.silver400, // Chrome Silver
        background: PALETTE.white, // Pure White
        panel: PALETTE.silver100, // Very faint silver/white
        text: PALETTE.obsidian, // Absolute black
        muted: PALETTE.silver500,
        dim: 'rgba(9, 9, 11, 0.03)'
    },
    fonts: {
        mono: '"Roboto Mono", monospace',
        sans: '"Inter", sans-serif'
    },
    sectionTitles: {
        hero: 'View Work',
        experience: 'My Experience',
        education: 'Education',
        projects: 'Selected Projects',
        skills: 'Skills & Tools',
        about: 'About Me',
        contact: 'Get in Touch'
    },
    navLabels: {
        home: 'Home',
        experience: 'Work',
        education: 'Edu',
        skills: 'Skills',
        projects: 'Works',
        about: 'About',
        contact: 'Contact'
    },
    heroAscii: `
    ◦  ·  ◦  ·  ◦
    
    ·    ━━━    ·
    
    ◦   ╱   ╲   ◦
    
    ·  ╱     ╲  ·
    
    ◦  ·  ◦  ·  ◦
    `
};

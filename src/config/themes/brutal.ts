import { ThemeConfig } from './types';
import { PALETTE } from '../colors';


export const brutal: ThemeConfig = {
    id: 'brutal',
    label: 'Brutal',
    description: 'Raw Concrete Architecture',
    colors: {
        primary: PALETTE.concrete800, // Dark concrete
        secondary: PALETTE.concrete600,
        background: PALETTE.concrete100, // Light raw concrete
        panel: PALETTE.concrete200, // Slightly darker panel
        text: PALETTE.concrete900, // Almost black
        muted: PALETTE.concrete500,
        dim: 'rgba(28, 25, 23, 0.05)' // Subtle shadow
    },
    fonts: {
        mono: '"Courier New", monospace',
        sans: '"Arial Black", sans-serif'
    },
    navLabels: {
        home: 'HOME',
        about: 'INFO',
        experience: 'WORK',
        education: 'LEARN',
        skills: 'TOOLS',
        projects: 'CODE',
        contact: 'SEND'
    },
    sectionTitles: {
        hero: 'HELLO_WORLD.',
        experience: 'CAREER_PATH.',
        education: 'LEARNING.',
        projects: 'PROJECTS.',
        skills: 'HARDWARE.',
        about: 'IDENTITY.',
        contact: 'EMAIL_ME.'
    },
    greetingText: "NO_QS.",
    heroAscii: `
████████████████████████████████████
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█  ╔══════════════════════════╗  █
█  ║  ██████╗ ██████╗ ██╗   ██║  █
█  ║  ██╔══██╗██╔══██╗██║   ██║  █
█  ║  ██████╔╝██████╔╝██║   ██║  █
█  ║  ██╔══██╗██╔══██╗██║   ██║  █
█  ║  ██████╔╝██║  ██║╚██████║  █
█  ║  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝  █
█  ╚══════════════════════════╝  █
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
████████████████████████████████████
`
};

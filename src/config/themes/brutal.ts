import { ThemeConfig } from './types';

export const brutal: ThemeConfig = {
    id: 'brutal',
    label: 'Brutal',
    description: 'Neo-Brutalism',
    colors: {
        primary: '#0000ff', // Pure Blue
        secondary: '#ffff00', // Pure Yellow
        background: '#ffffff', // White
        panel: '#e5e5e5', // Light Grey
        text: '#000000', // Black
        muted: '#525252', // Dark Grey
        dim: 'rgba(0, 0, 255, 0.1)'
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
  [RW]
  [RW]
  [RW]
`
};

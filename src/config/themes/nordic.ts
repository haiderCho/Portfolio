import { ThemeConfig } from './types';

export const nordic: ThemeConfig = {
    id: 'nordic',
    label: 'Nordic',
    description: 'Clean & Minimal',
    colors: {
        primary: '#38bdf8', // Sky 400
        secondary: '#94a3b8', // Slate 400
        background: '#f8fafc', // Slate 50
        panel: '#ffffff', // White
        text: '#0f172a', // Slate 900
        muted: '#64748b', // Slate 500
        dim: 'rgba(56, 189, 248, 0.1)'
    },
    fonts: {
        mono: '"IBM Plex Mono", monospace',
        sans: '"Inter", sans-serif'
    },
    navLabels: {
        home: 'Base',
        about: 'Info',
        experience: 'Path',
        education: 'Study',
        skills: 'Gear',
        projects: 'Work',
        contact: 'Mail'
    },
    sectionTitles: {
        hero: 'North_Face',
        experience: 'Expedition',
        education: 'Training',
        projects: 'Routes',
        skills: 'Survival Gear',
        about: 'Explorer',
        contact: 'Radio'
    },
    greetingText: "Temp: -12°C",
    heroAscii: `
      /\\
     /  \\
    /    \\  /\\
   /      \\/  \\
  /        \\   \\
 /__________\\___\\
`
};

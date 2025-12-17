import { ThemeConfig } from './types';

export const ocean: ThemeConfig = {
    id: 'ocean',
    label: 'Ocean',
    description: 'Deep & Quiet',
    colors: {
        primary: '#22d3ee', // Cyan 400
        secondary: '#38bdf8', // Sky 400
        background: '#0f172a', // Slate 900 (Deep Blue)
        panel: '#1e293b', // Slate 800
        text: '#f1f5f9', // Slate 100
        muted: '#94a3b8', // Slate 400
        dim: 'rgba(34, 211, 238, 0.1)'
    },
    fonts: {
        mono: '"JetBrains Mono", monospace',
        sans: '"Inter", sans-serif'
    },
    navLabels: {
        home: 'Surface',
        about: 'Sonar',
        experience: 'Dive',
        education: 'Charts',
        skills: 'Gear',
        projects: 'Wrecks',
        contact: 'Signal'
    },
    sectionTitles: {
        hero: 'Below Surface',
        experience: 'Depths',
        education: 'Navigation',
        projects: 'Discoveries',
        skills: 'Equipment',
        about: 'Logbook',
        contact: 'SOS'
    },
    greetingText: "Pressure: High",
    heroAscii: `
      _
   _ (>
  ( >/
   \\/
`
};

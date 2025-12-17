import { ThemeConfig } from './types';
import { PALETTE } from '../colors';

export const ocean: ThemeConfig = {
    id: 'ocean',
    label: 'Ocean',
    description: 'Deep & Quiet',
    colors: {
        primary: PALETTE.cyan400,
        secondary: PALETTE.sky400,
        background: PALETTE.slate900,
        panel: PALETTE.slate800,
        text: PALETTE.slate100,
        muted: PALETTE.slate400,
        dim: PALETTE.dim.sky
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

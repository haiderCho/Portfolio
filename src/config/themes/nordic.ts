import { ThemeConfig } from './types';
import { PALETTE } from '../colors';

export const nordic: ThemeConfig = {
    id: 'nordic',
    label: 'Nordic',
    description: 'Clean & Minimal',
    colors: {
        primary: PALETTE.brightCyan,
        secondary: PALETTE.slate600,
        background: PALETTE.iceWhite,
        panel: PALETTE.white,
        text: PALETTE.slate900,
        muted: PALETTE.slate500,
        dim: PALETTE.dim.sky
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

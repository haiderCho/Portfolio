import { ThemeConfig } from './types';
import { PALETTE } from '../colors';

export const sakura: ThemeConfig = {
    id: 'sakura',
    label: 'Sakura',
    description: 'Soft & Floral',
    colors: {
        primary: PALETTE.sakuraText, // Darker pink for readability/primary elements
        secondary: PALETTE.sakuraPink, // Soft pink for accents (borders/cards)
        background: PALETTE.creamWhite,
        panel: PALETTE.white,
        text: PALETTE.sakuraText, // Consistent soft dark pink
        muted: PALETTE.sakuraDark,
        dim: 'rgba(255, 183, 197, 0.15)' // Soft pink dim
    },
    fonts: {
        mono: '"Space Mono", monospace',
        sans: '"Quicksand", sans-serif'
    },
    navLabels: {
        home: 'Home',
        about: 'Story',
        experience: 'Path',
        education: 'Learn',
        skills: 'Talent',
        projects: 'Art',
        contact: 'Write'
    },
    sectionTitles: {
        hero: 'Blossom',
        experience: 'Seasons',
        education: 'Learning',
        projects: 'Creations',
        skills: 'Talents',
        about: 'Origami',
        contact: 'Letter'
    },
    greetingText: "Konbanwa",
    heroAscii: `
      @
     / \\
    (   )
     ^-^
    / | \\
   /  |  \\
`
};

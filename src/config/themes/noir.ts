import { ThemeConfig } from './types';
import { PALETTE } from '../colors';

export const noir: ThemeConfig = {
    id: 'noir',
    label: 'Noir',
    description: 'Luxury & Gold',
    colors: {
        primary: PALETTE.gold,
        secondary: PALETTE.grey300,
        background: PALETTE.black,
        panel: PALETTE.grey900,
        text: PALETTE.grey200,
        muted: PALETTE.grey700,
        dim: PALETTE.dim.gold
    },
    fonts: {
        mono: '"Cormorant Garamond", serif',
        sans: '"Playfair Display", serif'
    },
    navLabels: {
        home: 'Lobby',
        about: 'Bio',
        experience: 'Career',
        education: 'Study',
        skills: 'Craft',
        projects: 'Portfolio',
        contact: 'RSVP'
    },
    sectionTitles: {
        hero: 'The Collection',
        experience: 'Legacy',
        education: 'Pedigree',
        projects: 'Exhibits',
        skills: 'Expertise',
        about: 'Biography',
        contact: 'Inquire'
    },
    greetingText: "Welcome, Guest",
    heroAscii: `
      .
     / \\
    /___.
   (_____)
   |     |
   |     |
   |_____|
`
};

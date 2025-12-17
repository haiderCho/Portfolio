import { ThemeConfig } from './types';

export const noir: ThemeConfig = {
    id: 'noir',
    label: 'Noir',
    description: 'Luxury & Gold',
    colors: {
        primary: '#d4af37', // Gold
        secondary: '#a3a3a3', // Neutral 400
        background: '#000000', // Black
        panel: '#111111', // Almost Black
        text: '#e5e5e5', // Neutral 200
        muted: '#525252', // Neutral 600
        dim: 'rgba(212, 175, 55, 0.1)'
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

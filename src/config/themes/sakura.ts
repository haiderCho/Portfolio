import { ThemeConfig } from './types';

export const sakura: ThemeConfig = {
    id: 'sakura',
    label: 'Sakura',
    description: 'Soft & Floral',
    colors: {
        primary: '#ec4899', // Pink 500
        secondary: '#be185d', // Pink 700
        background: '#fff1f2', // Rose 50
        panel: '#ffffff', // White
        text: '#881337', // Rose 900
        muted: '#fb7185', // Rose 400
        dim: 'rgba(236, 72, 153, 0.1)'
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

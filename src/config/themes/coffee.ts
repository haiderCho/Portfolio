import { ThemeConfig } from './types';

export const coffee: ThemeConfig = {
    id: 'coffee',
    label: 'Coffee',
    description: 'Warm & Caffeinated',
    colors: {
        primary: '#d4c5b0', // Latte
        secondary: '#ca8a04', // Caramel
        background: '#271c19', // Espresso
        panel: '#43302b', // Dark Roast
        text: '#e8e0d5', // Cream
        muted: '#a89f91', // Foam
        dim: 'rgba(212, 197, 176, 0.1)'
    },
    fonts: {
        mono: '"Fira Code", monospace',
        sans: '"Lora", serif'
    },
    navLabels: {
        home: 'Menu',
        about: 'Roast',
        experience: 'Brew',
        education: 'Training',
        skills: 'Method',
        projects: 'Serve',
        contact: 'Order'
    },
    sectionTitles: {
        hero: 'Now Brewing',
        experience: 'Daily Grind',
        education: 'Barista Training',
        projects: 'Signature Blends',
        skills: 'Ingredients',
        about: 'Our Roast',
        contact: 'Takeout'
    },
    greetingText: "Order: Ready",
    heroAscii: `
         ( (
          ) )
        ........
        |      |]
        \\      /
         \`----\
`
};

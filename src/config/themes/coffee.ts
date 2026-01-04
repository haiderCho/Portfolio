import { ThemeConfig } from './types';
import { PALETTE } from '../colors';

export const coffee: ThemeConfig = {
    id: 'coffee',
    label: 'Coffee',
    description: 'Warm & Caffeinated',
    colors: {
        primary: PALETTE.brown200,
        secondary: PALETTE.yellow600,
        background: PALETTE.brown950,
        panel: PALETTE.brown800,
        text: PALETTE.brown100,
        muted: PALETTE.brown300,
        dim: PALETTE.dim.brown
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
      )  (
     (   ) )
      ) ( (
    _______)_
 .-'---------|  
( C|/\\/\\/\\/\\/|
 '-./\\/\\/\\/\\/|
   '_________'
    '-------'

`
};

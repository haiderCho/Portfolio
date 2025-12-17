import { ThemeConfig } from './types';
import { PALETTE } from '../colors';

export const midnight: ThemeConfig = {
    id: 'midnight',
    label: 'Midnight',
    greetingText: 'Good Evening',
    description: 'Starlight, Cool, Calm',
    colors: {
        primary: PALETTE.sky400,
        secondary: PALETTE.indigo400,
        background: PALETTE.sky900,
        panel: PALETTE.slate800,
        text: PALETTE.slate100,
        muted: PALETTE.slate400,
        dim: PALETTE.dim.sky
    },
    fonts: {
        mono: '"Fira Code", monospace',
        sans: '"Montserrat", sans-serif'
    },
    sectionTitles: {
        hero: 'Explore',
        experience: 'Journey',
        education: 'Knowledge Base',
        projects: 'Constellations',
        skills: 'Tools',
        about: 'Story',
        contact: 'Signal'
    },
    navLabels: {
        home: 'Origin',
        experience: 'Path',
        education: 'Study',
        skills: 'Craft',
        projects: 'Create',
        about: 'Essence',
        contact: 'Signal'
    },
    heroAscii: `
        .     .       .  .   . .   .   . .    
     .      .      *       .     .     *   .  
  .   *     .   .     .     *     .    .      
       .   .      .  *  .        .          
   *       .     .     .       *      .      
         .      *    .     .     .    *     
      .       .     .   🌙      .       .   
  .     *       .       .     .    *     .  
       .    .     *   .       .       .     
       .   .      .  *  .        .          
   *       .     .     .       *      .      
         .      *    .     .     .    *  
    `
};

import { ThemeConfig } from './types';

export const midnight: ThemeConfig = {
    id: 'midnight',
    label: 'Midnight',
    greetingText: 'Good Evening',
    description: 'Starlight, Cool, Calm',
    colors: {
        primary: '#38bdf8',
        secondary: '#818cf8',
        background: '#020617',
        panel: '#1e293b',
        text: '#f1f5f9',
        muted: '#94a3b8',
        dim: 'rgba(56, 189, 248, 0.1)'
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

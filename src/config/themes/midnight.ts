import { ThemeConfig } from './types';

export const midnight: ThemeConfig = {
    id: 'midnight',
    label: 'Midnight',
    greetingText: 'Good Evening',
    description: 'Deep Blue, Starlight, Calm',
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

import { ThemeConfig } from './types';

export const forest: ThemeConfig = {
    id: 'forest',
    label: 'Forest',
    description: 'Organic & Peaceful',
    colors: {
        primary: '#10b981', // Emerald 500
        secondary: '#d97706', // Amber 600
        background: '#022c22', // Emerald 950
        panel: '#064e3b', // Emerald 900
        text: '#ecfdf5', // Emerald 50
        muted: '#6ee7b7', // Emerald 300
        dim: 'rgba(16, 185, 129, 0.1)'
    },
    fonts: {
        mono: '"JetBrains Mono", monospace',
        sans: '"Inter", sans-serif'
    },
    navLabels: {
        home: 'Roots',
        about: 'Flora',
        experience: 'Growth',
        education: 'Nurturing',
        skills: 'Roots',
        projects: 'Canopy',
        contact: 'Signal'
    },
    sectionTitles: {
        hero: 'Cultivation',
        experience: 'Growth Rings',
        education: 'Nurturing',
        projects: 'Canopy Layer',
        skills: 'Root System',
        about: 'Ecosystem',
        contact: 'Spores'
    },
    greetingText: "System: Vibrant",
    heroAscii: `
      ^  ^  ^   ^      
     /|\\/|\\/|\\ /|\\     
    /|||||||||\\|||\\    
   //|||||||||||||\\\\   
  ///|||||||||||||\\\\\\  
 /////|||||||||||||\\\\\\ 
      |||||||||        
      |||||||||        
      |||||||||   
`
};

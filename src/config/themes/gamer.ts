import { ThemeConfig } from './types';

export const gamer: ThemeConfig = {
    id: 'gamer',
    label: 'Gamer',
    greetingText: 'READY PLAYER ONE',
    description: 'RGB, Bold, Aggressive',
    colors: {
        primary: '#00ff9f',
        secondary: '#ff005e',
        background: '#0a0a0a',
        panel: '#181818',
        text: '#f0f0f0',
        muted: '#888888',
        dim: 'rgba(0, 255, 159, 0.15)'
    },
    fonts: {
        mono: '"Inconsolata", monospace',
        sans: '"Orbitron", sans-serif'
    },
    sectionTitles: {
        hero: 'Respawn',
        experience: 'Quest Log',
        education: 'Training Arc',
        projects: 'Accomplishments',
        skills: 'Inventory',
        about: 'Character Bio',
        contact: 'Lobby'
    },
    navLabels: {
        home: 'BASE',
        experience: 'QUESTS',
        education: 'TUTORIAL',
        skills: 'INV',
        projects: 'ACHIEVES',
        about: 'CHAR',
        contact: 'LOBBY'
    },
    heroAscii: `

     GAME  ON      
-----------------------------------
  ▷ START              
 LOAD GAME          
 MULTIPLAYER        
 SETTINGS           
 CONTROLS           
 ACHIEVEMENTS       
 CREDITS            
 HELP               
 EXIT  
`
};

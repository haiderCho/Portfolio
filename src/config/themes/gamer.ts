import { ThemeConfig } from './types';
import { PALETTE } from '../colors';

export const gamer: ThemeConfig = {
    id: 'gamer',
    label: 'Gamer',
    greetingText: 'READY PLAYER ONE',
    description: 'RGB, Bold, Aggressive',
    colors: {
        primary: PALETTE.neonGreen,
        secondary: PALETTE.neonPink,
        background: PALETTE.grey950,
        panel: PALETTE.grey850,
        text: PALETTE.grey100,
        muted: PALETTE.grey400,
        dim: PALETTE.dim.neonGreen
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

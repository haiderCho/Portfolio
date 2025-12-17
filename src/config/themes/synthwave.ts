import { ThemeConfig } from './types';

export const synthwave: ThemeConfig = {
    id: 'synthwave',
    label: 'Synthwave',
    greetingText: 'RETRO MODE ENGAGED',
    description: 'Retro, Vibrant, 80s',
    colors: {
        primary: '#ff00ff',
        secondary: '#facc15',
        background: '#2b213a',
        panel: '#332745',
        text: '#f3e8ff',
        muted: '#d8b4fe',
        dim: 'rgba(255, 0, 255, 0.6)'
    },
    fonts: {
        mono: '"VT323", monospace',
        sans: '"Righteous", cursive'
    },
    sectionTitles: {
        hero: 'START GAME',
        experience: 'Career Mode',
        education: 'Tutorial Complete',
        projects: 'Select Stage',
        skills: 'Power Ups',
        about: 'Player Stats',
        contact: 'Insert Coin'
    },
    navLabels: {
        home: 'START',
        experience: 'LEVELS',
        education: 'LORE',
        skills: 'GEAR',
        projects: 'QUESTS',
        about: 'STATS',
        contact: 'JOIN'
    },
    heroAscii: `
      _  _
     ( \\/ )
      \\  /
      /  \\
     / /\\ \\
     \\ \\/ /
      \\__/   SUNSET
    ================
    ||||||||||||||||
    `
};

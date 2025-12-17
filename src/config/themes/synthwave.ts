import { ThemeConfig } from './types';
import { PALETTE } from '../colors';

export const synthwave: ThemeConfig = {
    id: 'synthwave',
    label: 'Synthwave',
    greetingText: 'RETRO MODE ENGAGED',
    description: 'Retro, Vibrant, 80s',
    colors: {
        primary: PALETTE.magenta,
        secondary: PALETTE.yellow400,
        background: PALETTE.purpleDark,
        panel: PALETTE.purpleDark3,
        text: PALETTE.violet50,
        muted: PALETTE.purple300,
        dim: PALETTE.dim.magenta
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

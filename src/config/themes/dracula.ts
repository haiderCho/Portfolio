import { ThemeConfig } from './types';
import { PALETTE } from '../colors';

export const dracula: ThemeConfig = {
    id: 'dracula',
    label: 'Dracula',
    description: 'Dark & Coding',
    colors: {
        primary: PALETTE.magentaDark,
        secondary: PALETTE.purple600,
        background: PALETTE.draculaBg,
        panel: PALETTE.draculaSelection,
        text: PALETTE.draculaFg,
        muted: PALETTE.draculaComment,
        dim: PALETTE.dim.draculaPink
    },
    fonts: {
        mono: '"Fira Code", monospace',
        sans: '"Fira Sans", sans-serif'
    },
    navLabels: {
        home: '~',
        about: 'man',
        experience: 'logs',
        education: 'libs',
        skills: 'deps',
        projects: 'bin',
        contact: 'ssh'
    },
    sectionTitles: {
        hero: 'master@dracula:~',
        experience: '/var/log/syslog',
        education: '/usr/lib',
        projects: '/src/repos',
        skills: 'Dependencies',
        about: 'README.md',
        contact: 'ping'
    },
    greetingText: "Wake up...",
    heroAscii: `
      /\\
     (  )
     (  )
    /|/\\|\\
   /_||||_\\
`
};

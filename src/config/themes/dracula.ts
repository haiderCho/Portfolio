import { ThemeConfig } from './types';

export const dracula: ThemeConfig = {
    id: 'dracula',
    label: 'Dracula',
    description: 'Dark & Coding',
    colors: {
        primary: '#ff79c6', // Pink
        secondary: '#bd93f9', // Purple
        background: '#282a36', // Dark Blue/Grey
        panel: '#44475a', // Selection
        text: '#f8f8f2', // White
        muted: '#6272a4', // Comment
        dim: 'rgba(255, 121, 198, 0.1)'
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

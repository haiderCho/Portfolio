import { ThemeConfig } from './types';

export const minimal: ThemeConfig = {
    id: 'minimal',
    label: 'Minimal',
    greetingText: 'Welcome',
    description: 'Clean, Simple, Focus',
    colors: {
        primary: '#2563eb',
        secondary: '#475569',
        background: '#ffffff',
        panel: '#ffffff',
        text: '#0f172a',
        muted: '#475569',
        dim: 'rgba(37, 99, 235, 0.1)'
    },
    fonts: {
        mono: '"Roboto Mono", monospace',
        sans: '"Inter", sans-serif'
    },
    sectionTitles: {
        hero: 'View Work',
        experience: 'My Experience',
        education: 'Education',
        projects: 'Selected Projects',
        skills: 'Skills & Tools',
        about: 'About Me',
        contact: 'Get in Touch'
    },
    navLabels: {
        home: 'Home',
        experience: 'Work',
        education: 'Edu',
        skills: 'Skills',
        projects: 'Works',
        about: 'About',
        contact: 'Contact'
    },
    heroAscii: `
._____. ._____.
| ._. | | ._. |
| !_| |_|_|_! |
!___| |_______!
.___|_|_| |___.
| ._____| |_. |
| !_! | | !_! |
!_____! !_____!
    `
};

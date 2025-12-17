import { ThemeConfig } from './types';

export const blueprint: ThemeConfig = {
    id: 'blueprint',
    label: 'Blueprint',
    description: 'Technical & Precise',
    colors: {
        primary: '#ffffff', // White
        secondary: '#93c5fd', // Blue 300
        background: '#1e3a8a', // Blue 900
        panel: '#172554', // Blue 950
        text: '#ffffff', // White
        muted: '#bfdbfe', // Blue 200
        dim: 'rgba(255, 255, 255, 0.1)'
    },
    fonts: {
        mono: '"Courier Prime", monospace',
        sans: '"Courier New", monospace'
    },
    navLabels: {
        home: 'Index',
        about: 'Specs',
        experience: 'Log',
        education: 'Certs',
        skills: 'Tools',
        projects: 'Builds',
        contact: 'Fax'
    },
    sectionTitles: {
        hero: 'Schematic View',
        experience: 'Construction Log',
        education: 'Certifications',
        projects: 'Prototypes',
        skills: 'Tools & Equipment',
        about: 'Specifications',
        contact: 'Submit RFQ'
    },
    greetingText: "Status: Drafting",
    heroAscii: `
+-----------------------+
| PART NO. 00-2491-A    |
| [X] APPROVED          |
| [ ] PENDING           |
|                       |
|   +-------+           |
|   |  BOX  |           |
|   +-------+           |
+-----------------------+
`
};

import { ThemeConfig } from './types';
import { PALETTE } from '../colors';

export const blueprint: ThemeConfig = {
    id: 'blueprint',
    label: 'Blueprint',
    description: 'Technical & Precise',
    colors: {
        primary: PALETTE.white,
        secondary: PALETTE.blue300,
        background: PALETTE.blue900,
        panel: PALETTE.blue950,
        text: PALETTE.white,
        muted: PALETTE.blue200,
        dim: PALETTE.dim.white
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

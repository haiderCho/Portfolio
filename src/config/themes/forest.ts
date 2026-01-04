import { ThemeConfig } from './types';
import { PALETTE } from '../colors';

export const forest: ThemeConfig = {
    id: 'forest',
    label: 'Forest',
    description: 'Organic & Peaceful',
    colors: {
        primary: PALETTE.emerald500,
        secondary: PALETTE.amber600,
        background: PALETTE.emerald950,
        panel: PALETTE.emerald900,
        text: PALETTE.emerald50,
        muted: PALETTE.emerald300,
        dim: PALETTE.dim.emerald
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
                  \\_/
                --(_)--
            .'.   / \\
           / . \\
          |  |. | ,-'-.
     ,-'-.\\ \\|  /(  .  )
    /  .  \\  |, (  \\|   )
   |  .|/  |_|_(    |/   )
    \\._|,_/  |  '--.|..-'
 ______|_____|______|______ ldb
 One quiet day in the forest...
nothing extraordinary happened.
`
};

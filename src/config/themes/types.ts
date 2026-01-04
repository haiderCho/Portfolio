export type ThemeId = 'cyber' | 'minimal' | 'synthwave' | 'terminal' | 'midnight' | 'gamer' | 'forest' | 'coffee' | 'blueprint' | 'noir' | 'nordic' | 'sakura' | 'dracula' | 'ocean' | 'brutal';

export interface SectionTitles {
    hero: string;
    experience: string;
    education: string;
    projects: string;
    skills: string;
    about: string;
    contact: string;
}

export interface NavLabels {
    home: string;
    experience: string;
    education: string;
    skills: string;
    projects: string;
    about: string;
    contact: string;
}

export interface ThemeColors {
    primary: string;
    secondary: string;
    background: string;
    panel: string;
    text: string;
    muted: string;
    dim: string;
}

export interface CursorConfig {
    style: 'default' | 'none'; // 'none' hides the system cursor
    custom?: 'dot' | 'block' | 'glitch' | 'petal' | 'underscore' | 'ring' | 'crosshair' | 'leaf' | 'bubble' | 'focus' | 'steam' | 'fang' | 'guide';
    color?: string;
}

export interface ThemeFonts {
    mono: string;
    sans: string;
}

export interface ThemeConfig {
    id: ThemeId;
    label: string;
    greetingText: string;
    description: string;
    colors: ThemeColors;
    fonts: ThemeFonts;
    cursor?: CursorConfig;
    sectionTitles: SectionTitles;
    navLabels: NavLabels;
    heroAscii: string;
    extraClassNames?: string;
}

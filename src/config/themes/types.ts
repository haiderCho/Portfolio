export type ThemeId = 'cyber' | 'minimal' | 'synthwave' | 'terminal' | 'midnight' | 'gamer';

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

export interface ThemeConfig {
    id: ThemeId;
    label: string;
    greetingText: string;
    description: string;
    sectionTitles: SectionTitles;
    navLabels: NavLabels;
    heroAscii: string;
    extraClassNames?: string;
}

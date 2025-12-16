import { ThemeConfig } from './types';

export const cyber: ThemeConfig = {
    id: 'cyber',
    label: 'Cyber',
    greetingText: 'SYSTEM STATUS: ONLINE',
    description: 'Neon, Glitch, High Contrast',
    sectionTitles: {
        hero: 'INITIATE_VIEW',
        experience: 'Experience_Log',
        education: 'Education_History',
        projects: 'Project_Database',
        skills: 'Tech_Stack_Matrix',
        about: 'System_Architecture',
        contact: 'Uplink_Connection'
    },
    navLabels: {
        home: '// ROOT',
        experience: '// EXP',
        education: '// EDU',
        skills: '// STACK',
        projects: '// PROJ',
        about: '// SYS',
        contact: '// LINK'
    },
    heroAscii: `
           1010101010101
        1010101010101010101
    101010101010101010101010101
  101                         101
  101      SYSTEM STATUS      101
  101     ---------------     101
  101   CORE:       FOYTRIX   101
  101   SYSTEM:     ONLINE    101
  101   STATUS:     READY     101
  101   UPLINK:     ACTIVE    101
  101   UPGRADE:    NONE      101
  101                         101
    101010101010101010101010101
        1010101010101010101
           1010101010101
    `
};

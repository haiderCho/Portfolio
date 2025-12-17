import { ThemeConfig } from './types';
import { PALETTE } from '../colors';

export const terminal: ThemeConfig = {
    id: 'terminal',
    label: 'Terminal',
    greetingText: 'root@nafiz:~$ init',
    description: 'Hacker, CLI, Matrix',
    colors: {
        primary: PALETTE.green400,
        secondary: PALETTE.green600,
        background: PALETTE.black,
        panel: PALETTE.black,
        text: PALETTE.green400,
        muted: PALETTE.green900,
        dim: PALETTE.dim.green
    },
    fonts: {
        mono: '"Courier New", monospace',
        sans: '"VT323", monospace'
    },
    sectionTitles: {
        hero: './view_projects.sh',
        experience: 'cat /var/log/experience',
        education: 'cat /etc/education',
        projects: 'ls -la ./projects',
        skills: 'top -b -n 1',
        about: 'whoami',
        contact: 'ssh connect'
    },
    navLabels: {
        home: '/root',
        experience: '/var/log',
        education: '/etc',
        skills: '/bin',
        projects: '/home',
        about: '/usr',
        contact: '/dev/net'
    },



    /*
    heroAscii: `
[ 0.000 ] Foytrix Core booting
[ 0.012 ] Initializing CPU subsystems
[ 0.024 ] Initializing memory management
[ 0.037 ] Detected CPU: x86_64 (8 cores)
[ 0.042 ] Mounting root filesystem
[ 0.034 ] Starting init system (foytrixd)
[ 0.041 ] foytrixd: reached target Basic System
[ 0.112 ] foytrixd: started Network Manager
[ 0.130 ] foytrixd: started User Login Services
--------------------------------------------------
>> FOYTRIX OS READY — LOGIN ENABLED
--------------------------------------------------
`
*/


    heroAscii: `
[ OK ] KERNEL INIT.....................
[ OK ] CPU CHECK.......................
[ OK ] MEMORY CHECK....................
[ OK ] FILE SYSTEM MOUNT...............
[ OK ] NETWORK ONLINE..................
[ OK ] DEVICE MANAGER STARTED..........
[ OK ] NETWORK SERVICE STARTED.........
[ OK ] AUDIO SERVICE STARTED...........
[ OK ] GRAPHICAL INTERFACE STARTED.....
---------------------------------------
 > FOYTRIX Linux 1.0 tty1
 > foytrix login: NafizHC_
---------------------------------------
`

};

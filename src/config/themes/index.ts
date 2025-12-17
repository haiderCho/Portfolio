import { ThemeConfig, ThemeId } from './types';
import { cyber } from './cyber';
import { minimal } from './minimal';
import { synthwave } from './synthwave';
import { terminal } from './terminal';
import { midnight } from './midnight';
import { gamer } from './gamer';
import { forest } from './forest';
import { coffee } from './coffee';
import { blueprint } from './blueprint';
import { noir } from './noir';
import { nordic } from './nordic';
import { sakura } from './sakura';
import { dracula } from './dracula';
import { ocean } from './ocean';
import { brutal } from './brutal';

export * from './types';

export const themes: Record<ThemeId, ThemeConfig> = {
    cyber,
    minimal,
    synthwave,
    terminal,
    midnight,
    gamer,
    forest,
    coffee,
    blueprint,
    noir,
    nordic,
    sakura,
    dracula,
    ocean,
    brutal
};

export const defaultTheme: ThemeId = 'cyber';

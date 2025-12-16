import { ThemeConfig, ThemeId } from './types';
import { cyber } from './cyber';
import { minimal } from './minimal';
import { synthwave } from './synthwave';
import { terminal } from './terminal';
import { midnight } from './midnight';
import { gamer } from './gamer';

export * from './types';

export const themes: Record<ThemeId, ThemeConfig> = {
    cyber,
    minimal,
    synthwave,
    terminal,
    midnight,
    gamer
};

export const defaultTheme: ThemeId = 'cyber';

import { ThemeId, CursorConfig } from './types';

export const cursorDefaults: Record<ThemeId, CursorConfig> = {
    cyber: { style: 'none', custom: 'glitch' },       // Glitch effect
    terminal: { style: 'none', custom: 'underscore' }, // Blinking underscore
    minimal: { style: 'none', custom: 'ring' },       // Elegant ring
    sakura: { style: 'none', custom: 'petal' },       // Falling petal
    midnight: { style: 'none', custom: 'dot' },       // Minimal dot
    synthwave: { style: 'none', custom: 'glitch' },   // Retro glitch
    gamer: { style: 'none', custom: 'crosshair' },    // FPS crosshair
    forest: { style: 'none', custom: 'leaf' },        // Sprout/Leaf
    coffee: { style: 'none', custom: 'steam' },       // Steam trails
    blueprint: { style: 'none', custom: 'guide' },    // T-square lines
    noir: { style: 'none', custom: 'focus' },         // High contrast ring
    nordic: { style: 'none', custom: 'ring' },        // Clean ring
    dracula: { style: 'none', custom: 'fang' },       // Gothic fang
    ocean: { style: 'none', custom: 'bubble' },       // Wobble bubble
    brutal: { style: 'none', custom: 'block' },       // Heavy block
};

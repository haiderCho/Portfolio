/**
 * Application-wide constants
 * Centralized configuration values to avoid magic numbers
 */

export const ANIMATION = {
  BOOT_SEQUENCE_DURATION: 1500,
  SCROLL_BEHAVIOR_SMOOTH_DURATION: 300,
  LOADING_BAR_DURATION: 1500,
} as const;

export const TERMINAL = {
  WIDTH_MOBILE: '90vw',
  WIDTH_DESKTOP: '450px',
  HEIGHT: '600px',
  SCAN_LINE_HEIGHT: '24',
} as const;

export const THEME = {
  COLORS: {
    CYBER_BLACK: '#0a0a0a',
    CYBER_DARK: '#111111',
    CYBER_PANEL: '#1a1a1a',
    CYBER_PRIMARY: '#00f0ff',
    CYBER_SECONDARY: '#7000ff',
    CYBER_DIM: 'rgba(0, 240, 255, 0.1)',
    CYBER_TEXT: '#e0e0e0',
    CYBER_MUTED: '#858585',
  },
} as const;

export const API = {
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
} as const;

export const SYSTEM_INFO = {
  NAME: 'Foytrix_Core',
  VERSION: 'V1.17.0',
  AI_VERSION: 'V2.5',
} as const;

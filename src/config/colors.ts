/**
 * Unified Color Palette
 * Centralized color definitions to reduce total unique color values
 * All themes reference these shared colors
 */

export const PALETTE = {
  // Pure Neutrals
  black: '#000000',
  white: '#ffffff',
  
  // Obsidian (Deepest Neutrals)
  obsidian: '#09090b',

  // Silver Scale (Chrome/Metallic Neutrals)
  silver100: '#f4f4f5',
  silver400: '#a1a1aa',
  silver500: '#71717a',
  
  // Dark Neutrals (for dark theme backgrounds)
  grey950: '#0a0a0a',
  grey900: '#111111',
  grey850: '#1a1a1a',
  grey800: '#202020',
  
  // Medium Neutrals
  grey700: '#525252',
  grey600: '#666666',
  grey500: '#858585',
  grey400: '#888888',
  
  // Light Neutrals
  grey300: '#a3a3a3',
  grey200: '#e5e5e5',
  grey100: '#f0f0f0',
  
  // Blues
  blue950: '#172554',
  blue900: '#1e3a8a',
  blue800: '#1e40af',
  blue400: '#38bdf8',
  blue300: '#93c5fd',
  blue200: '#bfdbfe',
  
  // Slate (Blue-Grey)
  slate900: '#0f172a',
  slate800: '#1e293b',
  slate700: '#334155',
  slate600: '#475569',
  slate500: '#64748b',
  slate400: '#94a3b8',
  slate100: '#f1f5f9',
  slate50: '#f8fafc',
  
  // Sky (Light Blue)
  sky900: '#020617',
  sky400: '#38bdf8',
  
  // Indigo
  indigo400: '#818cf8',
  
  // Cyan
  cyan400: '#22d3ee',
  
  // Greens
  green900: '#15803d',
  green600: '#22c55e',
  green400: '#4ade80',
  
  // Emerald
  emerald950: '#022c22',
  emerald900: '#064e3b',
  emerald500: '#10b981',
  emerald300: '#6ee7b7',
  emerald50: '#ecfdf5',
  
  // Yellows
  yellow: '#ffff00',
  yellow600: '#ca8a04',
  yellow400: '#facc15',
  
  // Amber
  amber600: '#d97706',
  
  // Reds
  red500: '#ef4444',
  
  // Pinks
  pink700: '#be185d',
  pink500: '#ec4899',
  hotPink: '#ff0080', // Vibrant saturated pink for Sakura
  
  // Rose
  rose900: '#881337',
  rose400: '#fb7185',
  rose50: '#fff1f2',
  rose40: '#ffe4e6',

  // Authentic Sakura Scale (Soft/Natural)
  sakuraPink: '#ffb7c5', // Classic Cherry Blossom
  sakuraDark: '#ff99ac', // Deeper petal color
  sakuraLight: '#ffd1dc', // Very light pink
  sakuraText: '#9e2a4b', // Muted brownish-pink for text readability
  
  // Purples
  purple900: '#581c87',
  purple700: '#7000ff',
  purple600: '#bd93f9',
  purple300: '#d8b4fe',
  
  // Magenta
  magenta: '#ff00ff',
  magentaDark: '#ff79c6',
  
  // Purple-Dark (Synthwave)
  purpleDark: '#2b213a',
  purpleDark2: '#241b31',
  purpleDark3: '#332745',
  
  // Violet
  violet50: '#f3e8ff',
  
  // Browns (Coffee theme)
  brown950: '#271c19',
  brown800: '#43302b',
  brown700: '#5c4033',
  brown300: '#a89f91',
  brown200: '#d4c5b0',
  brown100: '#e8e0d5',
  
  // Dracula specific
  draculaBg: '#282a36',
  draculaSelection: '#44475a',
  draculaComment: '#6272a4',
  draculaFg: '#f8f8f2',
  
  // Special Colors
  gold: '#d4af37',
  neonGreen: '#00ff9f',
  neonPink: '#ff005e',
  electricBlue: '#0066ff', // Vibrant blue for Minimal
  brightCyan: '#06b6d4', // Ice blue for Nordic
  navy: '#0a1f44', // Deep blue text for Minimal
  
  // Off-whites and tinted backgrounds
  offWhite: '#fafafa',
  creamWhite: '#fffbf5', // Warm white for Sakura
  iceWhite: '#f0f9ff', // Cool white for Nordic
  
  // Transparent/Dim variants (using rgba)
  dim: {
    cyan: 'rgba(0, 240, 255, 0.1)',
    blue: 'rgba(37, 99, 235, 0.08)',
    magenta: 'rgba(255, 0, 255, 0.6)',
    green: 'rgba(74, 222, 128, 0.1)',
    sky: 'rgba(56, 189, 248, 0.1)',
    red: 'rgba(239, 68, 68, 0.2)',
    emerald: 'rgba(16, 185, 129, 0.1)',
    brown: 'rgba(212, 197, 176, 0.1)',
    white: 'rgba(255, 255, 255, 0.1)',
    gold: 'rgba(212, 175, 55, 0.1)',
    pink: 'rgba(236, 72, 153, 0.1)',
    draculaPink: 'rgba(255, 121, 198, 0.1)',
    neonGreen: 'rgba(0, 255, 159, 0.15)',
    black: 'rgba(0, 0, 0, 0.1)',
  },
  
  // Cyan (Cyber)
  cyan: '#00f0ff',

  // Concrete (Stone-based for Brutalism)
  concrete100: '#f5f5f4',
  concrete200: '#e7e5e4',
  concrete500: '#78716c',
  concrete600: '#57534e',
  concrete800: '#292524',
  concrete900: '#1c1917',
} as const;

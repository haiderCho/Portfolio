# Theming System

Hey! This is the theming system I built for my portfolio. It's probably way more complex than it needs to be, but I wanted to create something flexible that I could keep tweaking without touching a bunch of different files.

## Overview

I've built **15 unique themes** for this portfolio. Yeah, 15. I might have a problem. But each one has its own vibe, colors, fonts, and even custom ASCII art in the hero section.

## Quick Start

Want to switch themes? Just click that little icon in the top right. All your theme preferences are saved to localStorage, so it'll remember your choice even after you close the tab.

## Theme List

Here's what I've got so far:

1. **Cyber** - My default theme. Neon cyan, dark backgrounds, very Matrix-y
2. **Minimal** - Clean and professional. When I need to look like a grown-up
3. **Synthwave** - Retro 80s vibes with hot pink and purple
4. **Terminal** - Green-on-black hacker aesthetic
5. **Midnight** - Cool blues for those late-night coding sessions
6. **Gamer** - RGB everything. Because why not?
7. **Forest** - Earth tones and nature vibes
8. **Coffee** - Warm browns inspired by my caffeine addiction
9. **Blueprint** - Technical drawing aesthetic with grid backgrounds
10. **Noir** - Classy black and gold luxury feel
11. **Nordic** - Scandinavian minimalism with ice blues
12. **Sakura** - Soft pinks inspired by cherry blossoms
13. **Dracula** - The classic coding theme
14. **Ocean** - Deep sea blues with bioluminescent accents
15. **Brutal** - Neo-brutalist design with hard edges

## Architecture

### TypeScript-First Configuration

I keep all theme config in TypeScript because it gives me:

- Type safety (catches dumb mistakes at compile time)
- Auto-complete in my editor
- Single source of truth for colors, fonts, titles, everything
- Easy to add new themes without touching CSS

### File Structure

```
src/config/themes/
├── types.ts          # TypeScript interfaces
├── index.ts          # Exports all themes
├── cyber.ts          # Theme configs
├── minimal.ts
├── forest.ts
└── ... (15 total)
```

### Theme Config Interface

Each theme defines:

```typescript
interface ThemeConfig {
  id: ThemeId;                    // Unique identifier
  label: string;                  // Display name
  description: string;            // Short tagline
  greetingText: string;          // Hero section greeting
  colors: ThemeColors;           // Color palette
  fonts: ThemeFonts;             // Font families
  sectionTitles: SectionTitles;  // Custom section headings
  navLabels: NavLabels;          // Navigation text
  heroAscii: string;             // ASCII art for hero
  extraClassNames?: string;      // Optional extra styling
}
```

## Adding a New Theme

Here's how I add a new theme (it's actually pretty straightforward):

### 1. Create the Theme File

Create `src/config/themes/yourtheme.ts`:

```typescript
import { ThemeConfig } from './types';

export const yourtheme: ThemeConfig = {
  id: 'yourtheme',
  label: 'Your Theme',
  description: 'Cool tagline',
  greetingText: 'Hello World',
  colors: {
    primary: '#ff0000',
    secondary: '#00ff00',
    background: '#000000',
    panel: '#111111',
    text: '#ffffff',
    muted: '#888888',
    dim: 'rgba(255, 0, 0, 0.1)'
  },
  fonts: {
    mono: '"Fira Code", monospace',
    sans: '"Inter", sans-serif'
  },
  navLabels: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact'
  },
  sectionTitles: {
    hero: 'Welcome',
    about: 'About Me',
    experience: 'Work History',
    education: 'Education',
    projects: 'My Projects',
    skills: 'Tech Stack',
    contact: 'Get In Touch'
  },
  heroAscii: `
    Your ASCII art here
    Can be multiple lines
  `
};
```

### 2. Update Theme Exports

In `src/config/themes/index.ts`:

```typescript
export { yourtheme } from './yourtheme';

export const themes: Record<ThemeId, ThemeConfig> = {
  // ... existing themes
  yourtheme,
};
```

### 3. Update Type Definition

In `src/config/themes/types.ts`:

```typescript
export type ThemeId = 'cyber' | 'minimal' | ... | 'yourtheme';
```

### 4. Add CSS Variables

In `src/index.css`:

```css
[data-theme='yourtheme'] {
  --color-cyber-primary: #ff0000;
  --color-cyber-secondary: #00ff00;
  --color-cyber-black: #000000;
  --color-cyber-dark: #0a0a0a;
  --color-cyber-panel: #111111;
  --color-cyber-text: #ffffff;
  --color-cyber-muted: #888888;
  --color-cyber-dim: rgba(255, 0, 0, 0.1);
  --font-mono: "Fira Code", monospace;
  --font-sans: "Inter", sans-serif;
}
```

### 5. Add Theme Icon (Optional)

In `src/components/ThemeSwitcher.tsx`:

```typescript
import { YourIcon } from 'lucide-react';

const icons: Record<ThemeId, React.ReactNode> = {
  // ... existing icons
  yourtheme: <YourIcon size={18} />,
};
```

### 6. Add Logo Variant (Optional)

In `src/components/common/Logo.tsx`, add conditional rendering for your theme's logo.

### 7. Update ThemeContext

In `src/context/ThemeContext.tsx`:

```typescript
const titles: Record<ThemeId, string> = {
  // ... existing titles
  yourtheme: 'Your Browser Title',
};
```

That's it! Your theme should now be live.

## Customization Tips

### Dynamic Section Titles

I wanted each theme to have its own personality, so I made the section titles change based on the theme. For example:

- **Cyber** theme: "INITIATE_VIEW", "Project_Database"
- **Terminal** theme: "./view_projects.sh", "cat /var/log/experience"
- **Coffee** theme: "Now Brewing", "Daily Grind"

It's a small touch but it makes each theme feel completely different.

### ASCII Art

The `heroAscii` field lets you add custom ASCII art in the hero section. I use template literals to preserve spacing:

```typescript
heroAscii: `
     ______
    /     /\\
   /     /  \\
  /_____/
`
```

Pro tip: Use a monospace font preview to make sure your ASCII art looks right.

### Color Strategy

I try to follow these guidelines for colors:

- **Primary**: Main accent color, used for links and highlights
- **Secondary**: Complementary color for variety
- **Background**: Main page background
- **Panel**: Elevated surfaces (cards, modals)
- **Text**: Main text color
- **Muted**: Secondary text, less important info
- **Dim**: Transparent version of primary for subtle effects

## How It Works Under the Hood

### Theme Context

I use React Context to manage the current theme globally:

```typescript
const { currentTheme, setTheme, themeConfig } = useTheme();
```

### CSS Variables

All the colors get mapped to CSS custom properties:

```css
:root {
  --color-cyber-primary: /* theme color */;
  --color-cyber-text: /* theme text */;
}
```

This means I can style everything with `var(--color-cyber-primary)` and it automatically updates when the theme changes.

### LocalStorage Persistence

Your theme choice is saved to localStorage so it persists across sessions:

```typescript
localStorage.setItem('theme', currentTheme);
```

## Performance Notes

- Theme switching is instant (no page reload needed)
- CSS variables make theme changes super efficient
- All theme data is code-split and lazy-loaded
- TypeScript tree-shaking removes unused theme code in production

## Future Ideas

Things I might add later:

- [ ] Theme customization UI (let users tweak colors)
- [ ] Import/export theme configs
- [ ] Time-based theme auto-switching
- [ ] More theme variants (Sunset, Monochrome, etc.)
- [ ] Theme preview in the switcher

## Why I Built This

I wanted a portfolio that felt like *me* - someone who can't decide on just one aesthetic. Plus, it's a good showcase of React patterns, TypeScript, and CSS architecture. If a potential employer sees I built 15 themes just because I could, hopefully they'll think I'm detail-oriented rather than insane.

---

**Last Updated**: December 2024  
Feel free to steal this. I certainly borrowed ideas from like 50 different portfolios.

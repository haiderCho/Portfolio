# Development Guide

Welcome to my development setup. This is how I work on this project, and maybe it'll help you too.

## Getting Started

### Prerequisites

You'll need:

- Node.js 18+ (I use 20.x)
- npm or pnpm (I prefer pnpm but npm works fine)
- A code editor (VS Code recommended)
- Git (obviously)

### Initial Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env and add your API keys

# Start dev server
npm run dev
```

The dev server runs at `http://localhost:5173` by default.

## Development Workflow

### Running the Dev Server

```bash
npm run dev
```

Hot module replacement (HMR) is enabled, so changes appear immediately without refresh. Usually.

### Building for Production

```bash
npm run build
```

Outputs to `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

Serves the production build locally to test before deploying.

### Type Checking

```bash
npm run type-check
# or
npx tsc --noEmit
```

I run this constantly because TypeScript saves me from myself.

## Recommended VS Code Extensions

Extensions I actually use:

- **ESLint** - Catches dumb mistakes
- **Prettier** - Formats code (stop the tabs vs spaces war)
- **Tailwind CSS IntelliSense** - Auto-complete for Tailwind classes
- **TypeScript Vue Plugin** - Better TS support
- **Error Lens** - Inline error messages
- **Git Lens** - Blame others for bad code
- **Auto Rename Tag** - Renames HTML tags in pairs

## Code Style

I try to follow these conventions:

### File Naming

- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Config: `kebab-case.ts` or `camelCase.ts`
- Types: `types.ts` or inline in the file

### Component Structure

```typescript
// Imports
import React from 'react';
import { useTheme } from '@/context/ThemeContext';

// Types/Interfaces
interface ComponentProps {
  title: string;
}

// Component
export const Component: React.FC<ComponentProps> = ({ title }) => {
  // Hooks
  const { currentTheme } = useTheme();
  
  // State
  const [isOpen, setIsOpen] = useState(false);
  
  // Effects
  useEffect(() => {
    // ...
  }, []);
  
  // Event handlers
  const handleClick = () => {
    // ...
  };
  
  // Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};
```

### Tailwind Usage

I use Tailwind for most styling, but fall back to CSS when needed:

```tsx
// Good - Tailwind classes
<div className="flex items-center gap-4 p-6">

// Also good - Mix with CSS variables
<div className="bg-[var(--color-cyber-primary)]">

// Avoid - Inline styles (unless necessary)
<div style={{ color: 'red' }}>
```

## Common Tasks

### Adding a New Theme

See [theming-system.md](./docs/theming-system.md) for detailed instructions.

TL;DR:

1. Create theme config in `src/config/themes/yourtheme.ts`
2. Export it in `src/config/themes/index.ts`
3. Add to ThemeId type in `src/config/themes/types.ts`
4. Add CSS variables in `src/index.css`
5. Add icon in `src/components/ThemeSwitcher.tsx`
6. Test it

### Adding a New Section

1. Create component in `src/components/sections/YourSection.tsx`
2. Import and use in `src/App.tsx`
3. Update theme configs if you want custom section titles

### Updating Content

Most content lives in `src/App.tsx` and the section components. No CMS, just good old TypeScript objects.

## Debugging

### Theme Not Applied?

Check these in order:

1. Is the theme exported in `src/config/themes/index.ts`?
2. Are CSS variables defined in `src/index.css`?
3. Is ThemeId type updated in `src/config/themes/types.ts`?
4. Clear localStorage: `localStorage.clear()` in console
5. Hard refresh: `Ctrl+Shift+R` (or `Cmd+Shift+R` on Mac)

### Build Errors?

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npx tsc --noEmit

# Build again
npm run build
```

### HMR Not Working?

1. Restart dev server
2. Check if you have multiple instances running
3. Clear browser cache
4. Make sure you're not editing inside `node_modules` (... I've done this)

## Performance Optimization

Things I do to keep it fast:

### Code Splitting

```typescript
// Lazy load heavy components
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

### Image Optimization

- Use WebP format when possible
- Lazy load images below the fold
- Set explicit width/height to prevent layout shift

### Lighthouse Checks

Run regularly:

```bash
npm run build
npm run preview
# Open DevTools > Lighthouse > Run audit
```

## Testing Strategy

Currently I don't have automated tests because:

1. It's a portfolio (low complexity)
2. I manually test every change
3. TypeScript catches most issues
4. I'm the only developer

If this grows, I'd add:

- Jest for unit tests
- React Testing Library for components
- Playwright for E2E tests

## Git Workflow

I keep it simple:

```bash
# Create feature branch
git checkout -b feature/new-theme

# Make changes, test locally
npm run dev

# Commit with descriptive message
git add .
git commit -m "feat: add ocean theme with bioluminescent colors"

# Push and create PR
git push origin feature/new-theme
```

### Commit Message Convention

I try to follow conventional commits:

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only
- `style:` - Code style changes
- `refactor:` - Code refactoring
- `perf:` - Performance improvement
- `test:` - Adding tests
- `chore:` - Build/config changes

## Environment Setup

### Required Environment Variables

```env
# AI Chat
VITE_GEMINI_API_KEY=your_key_here

# Optional: Analytics
VITE_GA_ID=G-XXXXXXXXXX

# Optional: Other AI providers
VITE_OPENAI_API_KEY=
VITE_ANTHROPIC_API_KEY=
```

### Local Development

For local development, environment variables are loaded from `.env`. Make sure to:

1. Never commit `.env` to git
2. Keep `.env.example` updated with required variables
3. Use `VITE_` prefix for variables accessible in frontend

## Troubleshooting

### Port Already in Use?

```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9

# Or use different port
npm run dev -- --port 3000
```

### TypeScript Errors After Update?

```bash
# Rebuild types
rm -rf node_modules/.vite
npm run dev
```

### Weird Cache Issues?

```bash
# Nuclear option
rm -rf node_modules .vite dist
npm install
npm run dev
```

## Production Deployment

### Pre-deployment Checklist

- [ ] Run `npm run build` successfully
- [ ] Test production build with `npm run preview`
- [ ] Check Lighthouse scores
- [ ] Update environment variables in hosting platform
- [ ] Test all themes
- [ ] Verify AI chat works
- [ ] Check mobile responsiveness

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### Manual Deployment

```bash
npm run build
# Upload dist/ folder to your hosting
```

## Useful Resources

Developer tools I reference constantly:

- [React Docs](https://react.dev/) - Official React documentation
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - TS reference
- [Tailwind Docs](https://tailwindcss.com/docs) - Utility class lookup
- [Lucide Icons](https://lucide.dev/) - Icon search
- [Can I Use](https://caniuse.com/) - Browser compatibility
- [CSS Tricks](https://css-tricks.com/) - CSS solutions

## Getting Help

If you're stuck:

1. Check the docs in `/docs`
2. Search existing issues
3. Ask the AI chat (it's actually helpful)
4. Open a new issue with reproduction steps

---

**Note**: This guide assumes you have basic React/TypeScript knowledge. If you're new to these, I recommend:

- [React Tutorial](https://react.dev/learn)
- [TypeScript for JavaScript Programmers](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)

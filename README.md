# Portfolio Project

My personal portfolio website. I probably spent more time building the theming system than actually adding my work, but here we are.

## What's This?

A single-page portfolio with:

- **15 unique themes** (because I have a problem with making decisions)
- Smooth animations and transitions
- Fully responsive design
- Dark mode everything (your eyes will thank me)
- Custom ASCII art that changes with each theme
- TypeScript because I like knowing when I messed up

## Tech Stack

### Core

- **React** - Component framework
- **TypeScript** - Type safety and better DX
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first styling (with heavy customization)

### Notable Features

- **15 Theme System** - See [theming-system.md](./docs/theming-system.md)
- **Context API** - Theme management and global state
- **CSS Custom Properties** - Dynamic theming without JS chaos
- **LocalStorage** - Theme preferences persist across sessions
- **Lucide Icons** - Beautiful icon library

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── common/          # Reusable components (Logo, etc)
│   ├── layout/          # Layout components
│   └── sections/        # Page sections (Hero, About, etc)
├── config/
│   └── themes/          # 15 theme configurations
│       ├── types.ts     # TypeScript interfaces
│       ├── index.ts     # Theme exports
│       └── *.ts         # Individual theme configs
├── context/
│   └── ThemeContext.tsx # Global theme state
├── services/
│   └── gemini.ts        # AI chat integration
├── App.tsx              # Main app component
└── index.css            # Global styles & CSS variables
```

## Features

### Dynamic Theming

I built a whole theming system from scratch. Each of the 15 themes has:

- Unique color schemes
- Custom fonts
- Different section titles
- Unique ASCII art
- Theme-specific logos

Check out the [theme gallery](./docs/theme-gallery.md) to see all of them.

### AI Chat Integration

There's a floating chat button powered by Google's Gemini AI. It can answer questions about my work, provide recommendations, and generally be helpful. Or at least try to be.

### Responsive Design

Looks good on:

- Desktop (obviously)
- Tablets (tested on iPad)
- Mobile (tested on iPhone, but probably works on Android too)
- Ultra-wide monitors (for the gamers)
- Probably your smart fridge

### Performance

- Lazy loading for images
- Code splitting for themes
- Optimized bundle size
- Fast initial load
- Smooth 60fps animations (when my code cooperates)

## Customization

Want to use this for your own portfolio? Cool. Here's what to change:

1. **Personal Info**: Update `src/App.tsx` with your details
2. **Content**: Modify the components in `src/components/sections/`
3. **Themes**: Add/remove themes in `src/config/themes/`
4. **Colors**: Check [color-palette.md](./docs/color-palette.md)
5. **AI Chat**: Update API keys in `.env`

## Environment Variables

Create a `.env` file:

```env
VITE_GEMINI_API_KEY=your_api_key_here
```

Get a free Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

## Documentation

- [Theming System](./docs/theming-system.md) - Deep dive into how themes work
- [Theme Gallery](./docs/theme-gallery.md) - Visual reference for all 15 themes
- [Color Palette](./docs/color-palette.md) - Color system and usage
- [Multi-Provider AI](./docs/MULTI_PROVIDER_AI_README.md) - AI chat setup

## Deployment

I don't have this deployed yet because I'm still tweaking things. But when I do, it'll probably be on:

- Vercel (easiest option)
- Netlify (also good)
- GitHub Pages (why not)

To deploy yourself:

```bash
npm run build
# Upload the dist/ folder to your host
```

## Performance Metrics (Goals)

What I'm aiming for:

- Lighthouse Performance: 95+
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Bundle Size: < 200KB (gzipped)

Actual results may vary depending on my discipline and caffeine levels.

## Known Issues

Things I'm still working on:

- [ ] Mobile menu can be finicky on some devices
- [ ] Some theme transitions aren't as smooth as I'd like
- [ ] The ASCII art breaks on really small screens
- [ ] I keep adding more themes instead of finishing the content

## Future Plans

Things I might add if I stop adding themes:

- [ ] Blog section (probably won't use it)
- [ ] More AI providers (OpenAI, Claude, etc)
- [ ] Theme customization UI
- [ ] Dark/light mode toggle per theme
- [ ] Export theme as CSS
- [ ] Actually finish writing about my projects

## Credits & Inspiration

I borrowed ideas and code snippets from:

- Every portfolio site I've ever seen on Dribbble
- That one CodePen that had sick animations
- Random YouTube tutorials at 2x speed
- Stack Overflow (obviously)
- My past self who wrote better code than current me

## License

MIT or something. Use it however you want. Just don't blame me if it breaks.

## Contact

If you actually want to reach me:

- Check the Contact section on the site
- Or just use the AI chat, it knows stuff

---

**Last Updated**: December 2024  
**Status**: Perpetually "almost done"  
**Caffeine Level**: Yes

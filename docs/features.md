# Feature Documentation

This document covers the key custom features implemented in this portfolio.

## Custom Cursor System

A theme-aware custom cursor that changes style based on the active theme.

### Location

- `src/components/ui/Cursor.tsx` - Main component
- `src/config/themes/cursorDefaults.ts` - Theme-to-cursor mapping
- `src/config/themes/types.ts` - CursorConfig type definition

### How It Works

1. **Physics-based tracking**: Uses Framer Motion's `useMotionValue` and `useSpring` for lag-free, smooth cursor movement.
2. **Global cursor hiding**: Injects a `<style>` tag with `* { cursor: none !important; }` for performance.
3. **Theme integration**: Each theme has a `cursor` config that specifies the variant.

### Cursor Variants

| Variant | Themes | Description |
|:--------|:-------|:------------|
| `glitch` | Cyber, Synthwave | Rotating square with ping effect |
| `crosshair` | Gamer | FPS-style crosshair, turns red on hover |
| `underscore` | Terminal | Blinking `_` like a terminal prompt |
| `bubble` | Ocean | Wobbly circle with scale effect |
| `petal` | Sakura | 🌸 emoji that rotates |
| `leaf` | Forest | 🌱 emoji |
| `fang` | Dracula | Gothic triangle |
| `guide` | Blueprint | Full-screen crosshair lines |
| `ring` | Minimal, Nordic | Elegant expanding ring |
| `focus` | Noir | High contrast ring |
| `steam` | Coffee | Brown dot |
| `block` | Brutal | Solid rectangle |
| `dot` | Midnight | Simple dot with ring |

### Adding a New Cursor

1. Add the variant name to `CursorConfig.custom` type in `types.ts`
2. Add the theme mapping in `cursorDefaults.ts`
3. Add the rendering logic in `Cursor.tsx`

```typescript
// In Cursor.tsx
if (custom === 'yourvariant') {
    return (
        <motion.div style={{ x: springX, y: springY }}>
            {/* Your cursor JSX */}
        </motion.div>
    );
}
```

---

## Blog System

A markdown-based blog with automatic loading.

### Location

- `src/data/blog-posts/` - Blog post markdown files
- `src/pages/Blog.tsx` - Blog listing page
- `src/pages/BlogPost.tsx` - Individual post page
- `src/components/BlogPostCard.tsx` - Card component for listing
- `src/utils/blogUtils.ts` - Parsing and utility functions

### Blog Post Format

Every blog post must have YAML frontmatter:

```markdown
---
title: "Your Post Title"
date: "2025-01-01"
tags: ["Tag1", "Tag2"]
excerpt: "A brief description of the post."
coverImage: "https://example.com/image.jpg"
---

Your markdown content here...
```

### Required Fields

| Field | Type | Description |
|:------|:-----|:------------|
| `title` | string | Post title (displayed as H1) |
| `date` | string | ISO date format (YYYY-MM-DD) |
| `tags` | string[] | Array of tag strings |
| `excerpt` | string | Short description for cards |
| `coverImage` | string | URL to cover image (optional) |

### Adding a New Post

1. Create a new `.md` file in `src/data/blog-posts/`
2. Name it with a prefix for ordering (e.g., `04_my-post.md`)
3. Add the frontmatter at the top
4. Write your content in markdown
5. The post will auto-load on the blog page

---

## Projects Section

A visual hierarchy system for showcasing projects.

### Location

- `public/data/projects.json` - Project data
- `src/components/ProjectCard.tsx` - Card component with variants
- `src/components/sections/Projects.tsx` - Grid layout

### Project Variants

| Variant | Layout | Description |
|:--------|:-------|:------------|
| `hero` | Full width (col-span-2) | Featured/flagship project |
| `showcase` | Standard | Highlighted secondary project |
| `writing` | Standard | Technical write-up style |
| `standard` | Standard | Regular project card |

### Project Data Format

```json
{
    "id": "unique-id",
    "title": "Project Name",
    "description": "Brief description",
    "techStack": ["React", "Node.js"],
    "repoUrl": "https://github.com/...",
    "stars": 10,
    "forks": 2,
    "category": "Web App",
    "featured": true,
    "variant": "hero"
}
```

---

## Theme System

See [theming-system.md](./theming-system.md) for comprehensive theme documentation.

Quick reference for adding cursor support to a new theme:

1. Create theme config in `src/config/themes/yourtheme.ts`
2. Add cursor mapping in `src/config/themes/cursorDefaults.ts`:

```typescript
yourtheme: { style: 'none', custom: 'dot' },
```

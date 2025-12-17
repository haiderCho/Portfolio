# Portfolio Color Palette 🎨

## Cyberpunk Tech Aesthetic

## Primary Colors

### 1. **Cyber Cyan** (Primary Accent)

```css
#00F0FF
rgb(0, 240, 255)
hsl(182, 100%, 50%)
```

- **Usage**: Primary buttons, links, glows, active states, brand accent
- **Effect**: Electric, futuristic, high-tech vibe
- **Characteristics**: Bright, eye-catching, neon glow effect

---

### 2. **Deep Space Black** (Background)

```css
#0A0A0A
rgb(10, 10, 10)
hsl(0, 0%, 4%)
```

- **Usage**: Main background, dark sections
- **Effect**: Premium dark mode, reduces eye strain
- **Characteristics**: Almost pure black with slight warmth

---

### 3. **Onyx Gray** (Secondary Background)

```css
#1A1A1A
rgb(26, 26, 26)
hsl(0, 0%, 10%)
```

- **Usage**: Panels, cards, elevated surfaces, borders
- **Effect**: Subtle depth and hierarchy
- **Characteristics**: Slightly lighter than main background for layering

---

### 4. **Slate Muted** (Tertiary/Muted Text)

```css
#6B7280
rgb(107, 114, 128)
hsl(220, 9%, 46%)
```

- **Usage**: Secondary text, muted information, subtle borders
- **Effect**: Readable but not distracting
- **Characteristics**: Neutral gray with slight cool tone

---

### 5. **Pure White** (Text)

```css
#F9FAFB
rgb(249, 250, 251)
hsl(210, 20%, 98%)
```

- **Usage**: Primary text, headings, important information
- **Effect**: Maximum contrast and readability
- **Characteristics**: Slightly off-white to reduce harshness

---

## Accent & Effect Colors (Optional)

### 6. **Neon Purple** (Secondary Accent - Optional)

```css
#A855F7
rgb(168, 85, 247)
hsl(271, 91%, 65%)
```

- **Usage**: Alternative highlights, hover states, special effects
- **Effect**: Complementary to cyan, adds variety
- **Characteristics**: Vibrant, modern, cyberpunk aesthetic

---

### 7. **Electric Green** (Success/Positive - Optional)

```css
#10B981
rgb(16, 185, 129)
hsl(160, 84%, 39%)
```

- **Usage**: Success messages, positive indicators, status online
- **Effect**: High visibility, tech-inspired
- **Characteristics**: Matrix-style green

---

## Glow Effects

For that signature cyberpunk glow, box-shadow or text-shadow:

```css
/* Cyan Glow */
box-shadow: 0 0 20px rgba(0, 240, 255, 0.5);

/* Subtle Border Glow */
border: 1px solid #00F0FF;
box-shadow: 0 0 10px rgba(0, 240, 255, 0.3);

/* Text Glow */
text-shadow: 0 0 10px rgba(0, 240, 255, 0.8);
```

---

## Color Combinations

### High Contrast (Primary CTA)

- **Background**: `#00F0FF` (Cyber Cyan)
- **Text**: `#0A0A0A` (Deep Space Black)

### Subtle Elevation

- **Background**: `#1A1A1A` (Onyx Gray)
- **Border**: `#00F0FF` with 30% opacity
- **Text**: `#F9FAFB` (Pure White)

### Muted Information

- **Background**: Transparent or `#0A0A0A`
- **Text**: `#6B7280` (Slate Muted)

---

## 3-Color Minimal Palette

For a minimal 3-color version:

1. **Primary**: `#00F0FF` (Cyber Cyan)
2. **Background**: `#0A0A0A` (Deep Space Black)
3. **Text**: `#F9FAFB` (Pure White)

---

## 5-Color Complete Palette

For full flexibility:

1. **Primary Accent**: `#00F0FF` (Cyber Cyan)
2. **Background**: `#0A0A0A` (Deep Space Black)
3. **Surface/Panel**: `#1A1A1A` (Onyx Gray)
4. **Muted**: `#6B7280` (Slate Muted)
5. **Text**: `#F9FAFB` (Pure White)

---

## Tailwind CSS Configuration

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'cyber-primary': '#00F0FF',
        'cyber-black': '#0A0A0A',
        'cyber-dark': '#1A1A1A',
        'cyber-muted': '#6B7280',
        'cyber-text': '#F9FAFB',
        'cyber-dim': '#2D2D2D',
        'cyber-secondary': '#A855F7', // Optional
        'cyber-green': '#10B981',     // Optional
      },
    },
  },
}
```

---

## Designer Notes

- **Accessibility**: Ensure WCAG AAA contrast ratios (especially white text on dark backgrounds)
- **Glow Effects**: Use sparingly for emphasis - too much glow reduces impact
- **Hover States**: Increase glow opacity or size for interactive elements
- **Animations**: Pulse effects work great with the cyan accent color
- **Gradients**: Subtle gradients from black to dark gray add depth without being distracting

---

**Created**: 2025-11-30  
**Theme**: Cyberpunk Tech / Dark Mode  

# 05 — Motion

The portfolio uses **as little motion as possible**. The goal is the
quiet-confidence of a finished product, not a motion-graphics reel.

## Three primitives

### 1. Reveal-on-scroll (the only entrance animation)

Every meaningful element gets a `<Reveal>` wrapper. Elements fade up 16px on
intersect. Stagger via a `delay` prop in 80ms steps.

```tsx
// components/ui/Reveal.tsx
'use client';
import { motion } from 'framer-motion';

export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.6, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
```

Use it on: section heads, every card, every project case, principle cells, journey entries, service tiles.

### 2. Hover transitions (CSS only)

- 150–250ms duration, `ease-out` or `cubic-bezier(.2,.8,.2,1)` for the slightly springy ones.
- Cards lift with `transform: translateY(-2px)` and a border-color change to accent. Never use a box-shadow on hover (cheapens the design).
- Buttons swap fill or border colors. Arrow icons slide diagonally on hover (`translate(2px, -2px)`).

### 3. Gallery crossfade

The case-study gallery uses CSS-only opacity transitions:

```css
.slide       { position: absolute; inset: 0; opacity: 0; transform: scale(1.015);
               transition: opacity 0.55s cubic-bezier(.2,.8,.2,1),
                           transform 0.9s cubic-bezier(.2,.8,.2,1);
               pointer-events: none; }
.slide.active{ opacity: 1; transform: none; pointer-events: auto; }
```

State managed in React: `useState(0)` for current index, prev/next/thumb buttons mutate it. Keyboard support: ArrowLeft/Right when the gallery has focus.

## Easing

One easing curve everywhere: `cubic-bezier(0.2, 0.8, 0.2, 1)`. It's the slightly-overshooting "ease-out" that feels premium. Map it to a Tailwind utility:

```js
// tailwind.config.ts
extend: {
  transitionTimingFunction: {
    smooth: 'cubic-bezier(0.2, 0.8, 0.2, 1)',
  },
}
```

## prefers-reduced-motion

In `globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Framer Motion respects this automatically.

## Things NOT to animate

- ❌ The hero headline letter-by-letter
- ❌ Any text that moves more than 24px
- ❌ Cursor-follow blobs or magnetic buttons
- ❌ Page-load splash screens
- ❌ Numbers that count up
- ❌ Confetti, bouncing arrows, scroll hints

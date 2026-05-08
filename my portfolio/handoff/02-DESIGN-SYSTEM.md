# 02 — Design System

## Color tokens (CSS variables in `globals.css`)

### Dark (default)

```css
:root {
  --bg:          oklch(0.17 0.008 70);
  --bg-1:        oklch(0.20 0.008 70);
  --bg-2:        oklch(0.225 0.009 70);
  --plate:       oklch(0.215 0.009 70);

  --fg:          oklch(0.96 0.005 80);
  --fg-dim:      oklch(0.72 0.008 75);
  --fg-mute:     oklch(0.50 0.008 75);

  --line:        oklch(0.27 0.01 70);
  --line-strong: oklch(0.34 0.012 70);

  --accent:      oklch(0.84 0.13 80);
  --accent-soft: oklch(0.84 0.13 80 / 0.08);
  --accent-line: oklch(0.84 0.13 80 / 0.35);
  --accent-ink:  oklch(0.18 0.02 70);

  --serif: 'Space Grotesk', ui-sans-serif, system-ui, sans-serif;
  --sans:  'Inter', ui-sans-serif, system-ui, sans-serif;
  --mono:  'JetBrains Mono', ui-monospace, monospace;

  --radius:     12px;
  --radius-lg:  18px;
  --radius-pill: 999px;
}
```

### Light

```css
[data-theme="light"] {
  --bg:          oklch(0.965 0.012 85);
  --bg-1:        oklch(0.945 0.014 85);
  --bg-2:        oklch(0.925 0.016 85);
  --plate:       oklch(0.94 0.014 85);

  --fg:          oklch(0.22 0.012 70);
  --fg-dim:      oklch(0.45 0.012 70);
  --fg-mute:     oklch(0.62 0.01 70);

  --line:        oklch(0.86 0.012 80);
  --line-strong: oklch(0.78 0.014 80);

  --accent:      oklch(0.62 0.13 60);
  --accent-soft: oklch(0.62 0.13 60 / 0.10);
  --accent-line: oklch(0.62 0.13 60 / 0.35);
  --accent-ink:  oklch(0.965 0.012 85);
}
```

## Typography

| Role | Font | Weight | Size |
|---|---|---|---|
| Hero headline | Space Grotesk | 500 | `clamp(56px, 9vw, 88px)` |
| Section H2 | Space Grotesk | 500 | `clamp(40px, 5.6vw, 68px)` |
| Section eyebrow | JetBrains Mono | 500 | 14px, uppercase, `letter-spacing: .12em` |
| Case H3 | Space Grotesk | 500 | `clamp(22px, 2.4vw, 28px)` |
| Body | Inter | 400 | 15px / 1.6 |
| Body dim | Inter | 400 | 14px / 1.6, color `--fg-dim` |
| Mono chip / label | JetBrains Mono | 500 | 11–12px |

Letter-spacing: tight on display (`-.025em` on H2, `-.02em` on H3), open on mono (`.10–.12em`).

## Spacing scale

- Container: max-width `1280px`, `padding-inline: clamp(24px, 5vw, 56px)`
- Section vertical: `padding: 140px 0` (desktop), `90px 0` (≤680px)
- Card paddings: skill cards `22px`, meta-card `16–18px`, principles `36×32px`
- Grid gaps: cards 18–24px, case rows 24/44px (vertical/horizontal)

## Radii

- Buttons / pills: `999px`
- Cards: `12–14px`
- Big surfaces (gallery, principles container): `18px`

## Shadows

Avoid heavy shadows. Used sparingly:
- Sticky nav: `0 1px 0 var(--line) inset, 0 6px 24px rgba(0,0,0,.18)`
- Gallery nav buttons: `0 4px 12px rgba(0,0,0,.4)`

## Iconography

- **lucide-react** only.
- 1.5–1.6 stroke width.
- 16px in chip slots, 14px in buttons, 18px in nav.
- Color: `currentColor`, inherit from parent.

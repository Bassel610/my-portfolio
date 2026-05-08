# 07 — Responsive

Mobile-first. Every component is designed for 360px before being widened.

## Breakpoints

| Name | Min width | Use case |
|---|---|---|
| `sm` | 580px | Phone landscape, small tablet |
| `md` | 760px | Section heads stack→inline |
| `lg` | 1000px | Case studies switch to side-by-side |
| `xl` | 1180px | Meta-card 2-col layout |

## Section-by-section adaptations

### Nav

- Desktop: full pill with all anchor links + theme toggle.
- < 760px: collapse anchor links into a hamburger (slides down a small dropdown). Theme toggle stays visible.

### Hero

- Desktop: 2-col (headline left, status block right).
- < 880px: status block moves above the headline as a small horizontal pill.
- Headline `clamp` already scales — no special handling.

### About

- Desktop: 1.3fr / 1fr columns.
- < 880px: stacks. Spec sheet moves below bio.

### Skills

- Desktop: 3-col grid.
- < 880px: 1-col. Cards stay compact.

### Work — case studies

- ≥ 1000px: side-by-side gallery + content grid.
- < 1000px: stacks. Order: head → gallery → body.
- Gallery aspect-ratio stays 16:10 always.
- Thumbs (pill row) always wrap; on mobile, may wrap to 2 lines — that's fine.
- Show-more pill button is centered at all sizes.
- Nav buttons inside gallery: hover-revealed on desktop, **always visible** below 580px.

### Approach

- Desktop: 3×2 grid.
- 580–880px: 2-col grid (3 rows).
- < 580px: 1-col (6 rows).

### Journey

- Vertical timeline, no responsive change. Year column stays narrow.

### Services

- Desktop: 2×2.
- < 760px: 1-col stack.

### Contact

- Desktop: 1fr / 1fr (channels left, form right).
- < 880px: stacks. Form below channels.

## Type fluidity

All H2 and hero headline use `clamp()` so they scale smoothly between breakpoints. Don't add per-breakpoint font-size overrides.

## Touch targets

- Buttons / pills: min 40px tall.
- Form fields: min 44px tall.
- Theme toggle: 36px square minimum.
- Gallery nav buttons on mobile: 38px circles.

## Spacing

- Section vertical padding: `140px` (desktop) → `90px` (≤680px).
- Container inline padding: `clamp(24px, 5vw, 56px)`.

## Images

- All "images" are CSS-built mocks; nothing to do for responsive image loading.
- If real screenshots are added later: use `next/image` with explicit `sizes` and aspect-ratio, AVIF/WebP, blur placeholder.

## Performance budget

- LCP < 2.0s on 4G
- CLS < 0.05
- JS bundle (initial route) < 120kb gzipped
- Single web-font swap (Inter), display: swap; the other two fonts can be `display: optional`

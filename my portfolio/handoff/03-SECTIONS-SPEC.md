# 03 — Sections Spec

Every section uses a `<SectionHead>` component:

```
[eyebrow row: "0X — LABEL"]
[H2 — Section title.]                            [right-aligned dim copy ↗]
─────────── (top border + 24px padding) ───────
```

Sections alternate plate/deep backgrounds. Mark `plate` ones below.

---

## Hero (no number, full bleed)

- **Layout:** left-aligned column, max-width 920px. Right side has a small vertical "status block".
- **Content:**
  - Tiny eyebrow: `BASEL SHERIF — FRONTEND ENGINEER`
  - Headline (multi-line): "Crafting interfaces that feel inevitable, from React to the runtime."
    The word *inevitable* gets a hand-drawn underline (gold SVG squiggle, behind the text).
  - One paragraph, 2 lines max.
  - Two CTAs: "View work" (solid) → `#work`, "Get in touch" (outline) → `#contact`.
- **Status block (right):** small dot + "Available for senior FE roles · Cairo / Remote · GMT+2".
- **Backdrop:** one radial gradient blob (gold, 0.07 opacity, 80vw wide), plus the global grain.
- **No** scroll-hint chevron, **no** big "100vh" cinematic feel — let it be naturally sized.

---

## 01 — About `(plate background)`

- Two columns, 1.3fr / 1fr, gap 56px. Stacks below 880px.
- **Left:** 3 short paragraphs. First sets the scene (where Basel works, what he loves), second is technical (the React / Next ecosystem, design-system mindset, performance discipline), third is human (collaboration, what he's looking for).
- **Right:** "Spec sheet" — a 2-column micro grid of key/value pairs with hairline dividers between rows:
  - Based in: Cairo, EG (GMT+2)
  - Stack: Next.js, TypeScript, Tailwind
  - Years: 4+ shipping production
  - Currently: Available for senior FE roles
  - Open to: Contract → Hire, embedded gigs
- Spec rows use mono labels, regular values.

---

## 02 — Skills "Toolkit"

- Eyebrow: `02 — Toolkit`. H2: "What I work with."
- Three cards in a 3-col grid (1-col below 880px).
- Each card: `padding: 22px`, border + subtle gradient bg.
- Card structure:
  - Top row: `/ 0X` mono number (left), 30×30 icon chip (right)
  - H3 title (18px Space Grotesk)
  - One-sentence description (12.5px dim)
  - Mono chip list of techs

- **Card 1 — Frontend:** "Where I live day-to-day." Chips: React, Next.js, TypeScript, Tailwind, Material UI, Framer Motion.
- **Card 2 — Backend Fundamentals:** "Comfortable past the API boundary." Chips: Node.js, Express, REST, PostgreSQL, MongoDB, Auth flows.
- **Card 3 — Tools & Workflow:** "How I ship." Chips: Git / GitHub, Vite, ESLint, Storybook, Vercel, Figma.

---

## 03 — Work "Recent projects"

This is the heaviest section. It must **default to 2 visible cases**, with the rest revealed by a "Show all" pill.

### `<CaseStudy>` layout (per case)

- Grid, 1.2fr / 1fr, areas: `"gallery head" "gallery body"`. Gap `24px / 44px`.
- Below 1000px: stacks to single column, order `head, gallery, body`.
- Gap between cases: 56px (48px on small screens).

#### `gallery` cell (left)

- 16:10 aspect ratio.
- Border-rounded `18px`, 1px line, dark bg.
- 3 absolute-positioned slides, only the active one has opacity 1 + scale 1; others are at 0 + scale 1.015. Crossfade 550ms / 900ms easing `cubic-bezier(.2,.8,.2,1)`.
- Hover-revealed circular nav buttons (left/right), 46px, blurred dark background. Hidden until container hover.
- Bottom-left counter pill: `01 / 03` (mono).
- Below the gallery, `<GalleryThumbs>`: a flex-wrap row of small pill buttons. Each: `/ 0X` mono number + screen label. Active state uses the gold accent border + soft accent background.
- Sticky on desktop: `position: sticky; top: 90px;` so the gallery stays visible while content scrolls.

#### `head` cell (top right)

- Meta-row: `0X · CATEGORY · YEAR · <Pill>` — pill is one of: `Live` (gold), `Private dashboard` (muted), `~600★ GitHub` (default).
- H3 title (`clamp(22, 2.4vw, 28)`, Space Grotesk 500).
- Tag — single sentence describing the project at a glance.
- Action buttons: solid primary ("Live demo" / "Case study" / "Visit site" / "View on npm") + optional outline secondary ("GitHub" / "Process note").
- Bottom border hairline + 18px padding.

#### `body` cell (bottom right)

- "Overview" — H5 mono label + 1–2 short paragraphs. `<strong>` for emphasized phrases.
- "Key features" — H5 + 4-bullet list with gold dot bullets (no flex; absolute-positioned dots).
- `<MetaCard>` — 2-col grid micro-card with: Stack (chips), Role, Timeline, Reach. `padding: 16/18px`, radius `12px`.

### Show-more behavior

- Render only first 2 `<CaseStudy>` components. Add `case-hidden` class to indices ≥ 2.
- Below the cases container, render a `.show-more-wrap` with a pill button:
  ```
  [+ 02]   Show all 4 projects   ⌄
  ```
- On click: remove `case-hidden` from all, hide the wrap. No need for animation; CSS reveal happens naturally as they enter the viewport.

### Project mocks (4 projects × 3 slides each)

CSS-only — never use real screenshots. Each slide is wrapped in a `<BrowserFrame>` (mac dots + URL bar + body). Bodies use styled divs to evoke real screens. Variants needed:

1. **Orbital (SaaS analytics)** — dashboard, audience table, insights chart
2. **Northstar (fintech, private)** — overview, transactions stack, account settings
3. **Studio Marais (marketing site)** — homepage, project grid, journal article (with TOC)
4. **Linecraft (open source TS lib)** — code playground, docs page, theme system swatches

See `04-CONTENT.md` for exact text and metadata per project.

---

## 04 — Approach `(plate background)`

- Eyebrow: `04 — Approach`. H2: "How I build software."
- Right copy: small disclaimer that this is "the working defaults that have earned their keep, not a manifesto."
- 6 principles in a 3×2 grid. Achieved via `display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--line); border: 1px solid var(--line); border-radius: 18px; overflow: hidden;` — each cell is `var(--bg-1)`, so the gaps form hairline dividers between principles.
- Each principle cell:
  - Top row: 36×36 icon chip (left), `/ 0X` mono number (right)
  - H4 (Space Grotesk 500, 21px)
  - Short paragraph (14px, dim)
- Hover: cell bg lifts to `var(--bg-2)`, icon chip shifts to soft-accent background.

### Principles (in order)

01. **Clarity over cleverness** — eye icon
02. **Responsive by default** — phone+desktop icon
03. **Performance is a feature** — bolt icon
04. **Built to scale** — stacked-layers icon
05. **Motion with intent** — wave-lines icon
06. **Modern by foundation** — 4-square grid icon

---

## 05 — Journey

- Eyebrow: `05 — Journey`. H2: "How I got here."
- Vertical timeline, 4 entries. Left edge has a 1px line; each entry has a 7px circle marker on the line, gold for the most recent.
- Per entry: year (mono, gold), role + company (Space Grotesk 500), short paragraph, optional tech chip row.
- Stack: 4 entries spanning ~2020 → present, narrative goes from junior → mid → senior → "now".

---

## 06 — Services `(plate background)`

- Eyebrow: `06 — Services`. H2: "What I can ship for you."
- Right copy: "Currently taking 1–2 engagements per quarter."
- 2×2 grid of large tiles (1-col below 760px).
- Each tile: padding 32–36px, border, hover lifts -2px and border becomes accent.
- Tile content:
  - Top: large `/ 0X` mono number
  - H3 (Space Grotesk 500, 24px)
  - Description paragraph (~3 lines)
  - "Deliverables" — 3-bullet list with gold dots

### Services

01. **Frontend Development** — Production-grade React/Next.js apps with the design system, motion language, and a11y baked in.
02. **Responsive Design** — Mobile-first interfaces that hold their shape from 360px to 4K. No magic numbers.
03. **UI Implementation** — Pixel-faithful translation of Figma to code, with the small details design didn't catch.
04. **API Integration** — Strongly-typed data layers, auth flows, and the boring 90% (loading/error/empty) handled well.

---

## 07 — Contact

- Eyebrow: `07 — Contact`. H2: "Looking for a frontend engineer? Let's talk."
- Pivoted at HIRING audiences — not generic "let's chat about your idea".
- Two columns, 1fr / 1fr. Stacks below 880.
- **Left:** Channel list — Email, LinkedIn, GitHub. Each row: icon + label + handle/url. Email row has a copy button (icon ghost).
- **Right:** Form — Name, Company, Email, Message. Validate client-side; submit button "Send message" (solid, with arrow). Form is wired-but-stubbed; user will hook to Formspree / their backend.
- A small sub-line: "Usually reply within 24h. Cairo time."

---

## Footer

- Border-top hairline + `padding: 56px 0 40px`.
- Three rows:
  - Top: monogram on left, "Basel Sherif — Frontend Engineer" tagline on right
  - Middle: 3 social links inline (GitHub · LinkedIn · Email)
  - Bottom: "© 2026 Basel Sherif · Designed and built from scratch."

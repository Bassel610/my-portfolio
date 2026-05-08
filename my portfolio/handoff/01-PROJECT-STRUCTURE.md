# 01 — Project Structure

## File tree

```
basel-portfolio/
├── app/
│   ├── layout.tsx              # Root layout: fonts, theme provider, body
│   ├── page.tsx                # Single-page composition
│   ├── globals.css             # Tailwind base + CSS variables (light/dark)
│   ├── icon.tsx                # Favicon (mono mark)
│   └── opengraph-image.tsx     # OG image generator
│
├── components/
│   ├── layout/
│   │   ├── Nav.tsx             # Sticky pill nav with theme toggle
│   │   ├── Footer.tsx          # Minimal footer
│   │   └── ThemeToggle.tsx     # Sun/moon button, localStorage-backed
│   │
│   ├── sections/
│   │   ├── Hero.tsx            # Headline + CTAs + status block
│   │   ├── About.tsx           # Bio + spec sheet, on plate
│   │   ├── Skills.tsx          # 3 toolkit cards
│   │   ├── Work.tsx            # Case studies + show-more
│   │   ├── Approach.tsx        # 6 principles, 3×2 grid, on plate
│   │   ├── Journey.tsx         # 4-step vertical timeline
│   │   ├── Services.tsx        # 4 service tiles, on plate
│   │   └── Contact.tsx         # Form + channels
│   │
│   ├── work/
│   │   ├── CaseStudy.tsx       # Single case (gallery + content side-by-side)
│   │   ├── Gallery.tsx         # 3-slide crossfade carousel
│   │   ├── GalleryThumbs.tsx   # Pill thumbnails for named navigation
│   │   ├── MetaCard.tsx        # 2×N stack/role/timeline grid
│   │   └── mocks/              # CSS-only project preview components
│   │       ├── DashboardMock.tsx
│   │       ├── TableMock.tsx
│   │       ├── ChartMock.tsx
│   │       ├── SettingsMock.tsx
│   │       ├── ProjectGridMock.tsx
│   │       ├── DocsMock.tsx
│   │       ├── ColorSystemMock.tsx
│   │       ├── TransactionsMock.tsx
│   │       └── CodeBlockMock.tsx
│   │
│   ├── ui/
│   │   ├── Reveal.tsx          # IntersectionObserver wrapper, fade-up 16px
│   │   ├── BrowserFrame.tsx    # Mac-style browser chrome around mocks
│   │   ├── Pill.tsx            # Status pill (live, private, etc.)
│   │   ├── Chip.tsx            # Mono tech chip
│   │   ├── SectionHead.tsx     # Eyebrow + H2 + right text helper
│   │   └── Button.tsx          # Solid + outline + arrow variants
│   │
│   └── ambient/
│       ├── HeroBackdrop.tsx    # Single radial-gradient blob
│       └── GrainOverlay.tsx    # Faint film-grain SVG
│
├── lib/
│   └── data/
│       ├── projects.ts         # Typed project array (4 projects)
│       ├── skills.ts           # Toolkit categories + chips
│       ├── journey.ts          # Timeline entries
│       ├── services.ts         # Service tiles
│       └── principles.ts       # Approach principles
│
├── public/
│   ├── fonts/                  # (optional self-host)
│   └── og-image.png
│
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── next.config.mjs
```

## Notes

- **No `src/` directory** — keep paths short.
- **No barrel files** — direct imports keep tree-shaking honest.
- **Typed data**: every `lib/data/*.ts` exports a typed const array. Components iterate.
- **Mocks as components** so they participate in dark/light theme and stay editable.

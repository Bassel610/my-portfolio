# 04 — Content

All copy uses placeholder content the candidate will swap. It must read as plausible
and specific, not generic.

## Hero

- Eyebrow: `BASEL SHERIF — FRONTEND ENGINEER`
- Headline (with handwritten underline on "inevitable"):
  > Crafting interfaces that feel **inevitable**, from React to the runtime.
- Sub: "I design and build production-grade frontends — the kind that ship, scale, and stay maintainable"
- CTAs: `View work` · `Get in touch`
- Status block:
  - Dot (gold, pulsing) + "Available for senior FE roles"
  - Mono row: "Cairo, EG · GMT+2 · 09:42"

## About — paragraphs

1. "I'm a frontend engineer based in Cairo. I've spent the last four years shipping production interfaces — design systems, dashboards, marketing sites — for teams from two-person startups to mid-stage SaaS."
2. "My home is the React / Next.js ecosystem. TypeScript everywhere, Tailwind for layout, Framer Motion when motion has a job to do. I think in components and design tokens, and I'd rather build a small system that scales than a stack of one-off pages."
3. "I'm comfortable past the API boundary too — Node, Express, Postgres, auth flows. Not a backend engineer, but I write client code that respects what the server can and can't do."
4. "Looking for: senior frontend roles where the team takes craft seriously. Equally happy embedded in a product team or owning a design system."

### Spec sheet

| | |
|---|---|
| Based in | Cairo, EG · GMT+2 |
| Stack | Next.js · TypeScript · Tailwind |
| Years | 4+ shipping production |
| Currently | Available for senior FE roles |
| Open to | Contract → Hire · Embedded |

## Skills (`lib/data/skills.ts`)

```ts
export const skills = [
  {
    title: 'Frontend',
    blurb: 'Where I live day-to-day.',
    chips: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Material UI', 'Framer Motion'],
  },
  {
    title: 'Backend Fundamentals',
    blurb: 'Comfortable past the API boundary.',
    chips: ['Node.js', 'Express', 'REST', 'PostgreSQL', 'MongoDB', 'Auth flows'],
  },
  {
    title: 'Tools & Workflow',
    blurb: 'How I ship.',
    chips: ['Git / GitHub', 'Vite', 'ESLint', 'Storybook', 'Vercel', 'Figma'],
  },
];
```

## Projects (`lib/data/projects.ts`)

Four projects. Each has `slides[]` (3 entries) describing the mock + screen label.

### 01 · Orbital — analytics for indie creators (SaaS · 2026 · Live)

- **Tag:** "A Next.js 15 dashboard with server-streamed charts, a custom design system, and a motion language built on Framer Motion."
- **Overview:**
  - "Took over an existing codebase mid-flight and shipped a full UI rewrite in 9 weeks. The team needed a real design system — not a color palette — so I built one alongside the rebuild and trained the rest of engineering on it."
  - "The result: **~38% faster time-to-paint**, a halved bundle, and a UI the design team actually wants to extend."
- **Features:**
  - **Server-streamed charts** — live data without the JS bundle bloat.
  - **Custom motion language** — Framer Motion variants tied to a single timing system.
  - **Design system from scratch** — 42 components, fully token-driven.
  - **Dark + light themes** — with theme-aware data viz that doesn't melt the eyes.
- **Stack:** Next.js 15 · TypeScript · Tailwind · Framer Motion · tRPC · PostgreSQL
- **Role:** Lead Frontend Engineer · 9 weeks · 2026 · Team: 2 FE, 1 designer, 1 BE
- **Slides:** Dashboard / Audience table / Insights view
- **Actions:** "Live demo" (solid) · "GitHub" (outline)

### 02 · Northstar — personal finance, rethought (Fintech · 2025 · Private dashboard)

- **Tag:** "A budgeting platform for freelancers — design system, dashboard surface, and a real-time transactions feed shipped to ~12k users."
- **Overview:**
  - "Joined as the second frontend hire and helped take Northstar from closed beta to public launch. Built the design system in Storybook, owned the dashboard rewrite, and partnered with backend on a WebSocket-driven transactions feed."
  - "The hardest part was the seam between client and server. **Optimistic updates, reconciliation, retries** — invisible when they work, infuriating when they don't."
- **Features:**
  - **Real-time transactions** — WebSocket stream with optimistic UI and automatic reconciliation.
  - **Storybook-first components** — every UI primitive documented before it shipped.
  - **Multi-currency support** — handled the gnarly edge cases for 6 currencies and 3 locales.
  - **Accessibility audit pass** — WCAG AA across the entire dashboard surface.
- **Stack:** React · TypeScript · Material UI · Node.js · PostgreSQL · WebSockets
- **Role:** Frontend Engineer · ~22 months · 2022–2024 · Reach: ~12,000 users
- **Slides:** Overview / Transactions feed / Account settings
- **Actions:** "Case study" (solid)

### 03 · Studio Marais — boutique architecture site (Marketing · 2025 · Live)

- **Tag:** "Scroll-driven storytelling, Lighthouse 100 across the board, and a small CMS for the studio's three editors. The brief: 'feel like a book.'"
- **Overview:**
  - "A boutique architecture studio wanted a site that felt unmistakably theirs — quiet, generous in its whitespace, and a little stubborn about loading fast. We started from the typography and worked outward."
  - "I built it solo over six weeks: design with the founder in Figma, then Next.js + Sanity, with Lenis for the scroll feel. **Lighthouse 100 across performance, a11y, best-practices, and SEO**."
- **Features:**
  - **Editor-friendly CMS** — Sanity schemas tuned for the studio's writing workflow.
  - **Scroll-driven storytelling** — Lenis + GSAP for content reveals, with prefers-reduced-motion respected.
  - **Image pipeline** — AVIF/WebP, blur placeholders, and per-breakpoint art direction.
  - **Multilingual** — EN / FR with a single source of truth.
- **Stack:** Next.js · Tailwind · Sanity · Lenis · GSAP
- **Role:** Solo design → dev · 6 weeks · 2025 · Result: Lighthouse 100/100/100/100
- **Slides:** Home / Projects index / Journal article
- **Actions:** "Visit site" (solid) · "Process note" (outline)

### 04 · Linecraft — a tiny code-comment toolkit (Open Source · 2024 · ~600★)

- **Tag:** "A library for annotating code blocks in MDX, with a Tailwind-aware theme system. Quietly used by my own writing and a handful of indie dev blogs."
- **Overview:**
  - "A weekend project that turned into a tool I rely on every week. Linecraft handles the unglamorous parts of code annotation — line numbers, focus highlighting, diff markers, and theme inheritance — in a tiny ESM package."
  - "It's a lesson in **shipping the boring 90% really well**. No hot takes, no flashy demos — just the API I wished existed."
- **Features:**
  - **MDX-native** — drop into any MDX setup with one component.
  - **Theme inheritance** — reads Tailwind tokens automatically.
  - **Zero JS at runtime** — all transformation happens at build time.
  - **~3.2 kB gzipped** — audited to stay small.
- **Stack:** TypeScript · Node.js · MDX · Vite · Vitest
- **Role:** Author / Maintainer · v1.4 · ~600 stars · ~9k weekly downloads
- **Slides:** Playground / Documentation / Theme system
- **Actions:** "View on npm" (solid) · "GitHub" (outline)

## Approach principles (`lib/data/principles.ts`)

```ts
export const principles = [
  { title: 'Clarity over cleverness',
    body: "The best UI is the one that disappears. I'd rather ship one well-considered interaction than three flashy ones nobody asked for.",
    icon: 'Eye' },
  { title: 'Responsive by default',
    body: "Mobile-first isn't a checkbox — it's the constraint that forces good layout decisions. Every component I write is designed for 360 px before 1440.",
    icon: 'Smartphone' },
  { title: 'Performance is a feature',
    body: "Bundle budgets, server components, and lazy-loaded routes — not as optimizations, but as part of the spec. Slow pages erode trust faster than bad design.",
    icon: 'Zap' },
  { title: 'Built to scale',
    body: "Component contracts, design tokens, typed boundaries. The code I leave behind should be obvious to the next engineer — because that engineer is usually me, six months later.",
    icon: 'Layers' },
  { title: 'Motion with intent',
    body: "Animation is feedback, not decoration. Every transition I ship has a job: confirm an action, show hierarchy, or guide the eye — and an exit ramp for users who'd rather opt out.",
    icon: 'Activity' },
  { title: 'Modern by foundation',
    body: "Server components, edge runtimes, container queries, view transitions. Picking the right primitive once saves a hundred small decisions later.",
    icon: 'LayoutGrid' },
];
```

## Journey (`lib/data/journey.ts`)

```ts
export const journey = [
  { year: '2026', role: 'Lead Frontend · Orbital',
    body: 'Owning the rewrite. Design system, motion language, performance budget. Mentoring two engineers along the way.' },
  { year: '2024', role: 'Frontend Engineer · Northstar',
    body: 'Took the dashboard from closed beta to ~12k users. Storybook-first design system, real-time transactions, A11y AA pass.' },
  { year: '2022', role: 'Frontend Developer · Freelance',
    body: 'A handful of marketing sites, internal tools, and one e-commerce migration. The years I learned to scope.' },
  { year: '2020', role: 'First production code',
    body: 'Started with vanilla JS and stubborn opinions about CSS. Discovered React, then TypeScript, then everything got better.' },
];
```

## Services (`lib/data/services.ts`)

```ts
export const services = [
  { title: 'Frontend Development',
    body: "Production-grade React / Next.js apps with the design system, motion language, and a11y baked in.",
    deliverables: ['Typed components from day one', 'Storybook-documented primitives', 'Performance budget honored'] },
  { title: 'Responsive Design',
    body: "Mobile-first interfaces that hold their shape from 360 px to 4K. No magic numbers, no per-breakpoint hacks.",
    deliverables: ['Fluid type + spacing scale', 'Container queries where they earn it', 'Tested across real devices'] },
  { title: 'UI Implementation',
    body: "Pixel-faithful translation of Figma to code, with the small details design didn't catch.",
    deliverables: ['Hand-tuned motion + hover states', 'A11y baked in (focus rings, labels)', 'Dark + light theme support'] },
  { title: 'API Integration',
    body: "Strongly-typed data layers, auth flows, and the boring 90% (loading / error / empty) handled well.",
    deliverables: ['Typed clients (tRPC, Zod, OpenAPI)', 'Optimistic UI where it counts', 'Real error UI, not toasts'] },
];
```

## Contact

- Headline: "Looking for a frontend engineer? Let's talk."
- Sub: "Open to senior FE roles, contract-to-hire, and embedded engagements. Tell me a bit about your team, your stack, and the seat you're hiring for."
- Channels: `hello@baselsherif.dev` · `linkedin.com/in/baselsherif` · `github.com/baselsherif`
- Form fields: Name · Company · Email · Message
- Submit: "Send message →"
- Note: "Usually reply within 24h. Cairo time."

## Footer

- Tagline: "Frontend engineering, with care."
- Links: GitHub · LinkedIn · Email
- Bottom: "© 2026 Basel Sherif · Designed and built from scratch."

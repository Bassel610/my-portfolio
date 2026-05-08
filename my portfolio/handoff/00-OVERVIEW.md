# 00 — Overview

## Project

A premium personal portfolio for **Basel Sherif**, a frontend engineer specializing
in React / Next.js with strong backend literacy. The portfolio is for hiring
audiences (companies looking for a senior FE, recruiters, technical leads).

## Tech stack (production target)

- **Next.js 15** (App Router, RSC where possible, TypeScript)
- **Tailwind CSS** — primary styling layer with a custom theme
- **Framer Motion** — used sparingly for reveal-on-scroll only
- **lucide-react** — icon set
- **next/font** — for Space Grotesk + Inter + JetBrains Mono via Google Fonts
- No CMS, content lives in typed `*.ts` data files

## Design intent — one paragraph

Warm-graphite dark mode, with a single gold accent. The page reads as one continuous
document, with sections subtly alternating between a deep base and a slightly lifted
"plate" tone. Typography does the heavy lifting — Space Grotesk for headlines,
Inter for body, JetBrains Mono for eyebrow labels and section numbers. Animation is
restrained: reveal-on-scroll, gentle hovers, smooth gallery crossfades. Nothing
flashy. Nothing cinematic. The portfolio should feel like a quiet, confident artifact
made by someone who has shipped real software.

## Key features that distinguish this portfolio

1. **Theme toggle** (dark default, warm cream light mode) with localStorage persistence
2. **Project case studies** in a side-by-side gallery + content layout, with
   3-screen galleries, named thumb pills, and crossfade transitions
3. **"Show more" projects** — only 2 visible by default, the rest revealed on demand
4. **CSS-only project mocks** — no fake stock screenshots, every project preview is
   built from styled divs that look like a real interface (toolbar, tables, charts,
   transaction stacks, doc layouts, etc.)
5. **Page structure**: Hero → About → Skills → Work → Approach → Journey → Services → Contact
   (seven sections, in that exact order)

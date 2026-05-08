# 06 — Anti-Patterns

Things that would cheapen this portfolio. Each is non-negotiable.

## Visual

- ❌ **Multiple accent colors.** The gold is the only saturated color on the page. Everything else is a shade of warm graphite (dark) or warm cream (light).
- ❌ **Gradient meshes / glassmorphism / neon glow.** This isn't a 2021 SaaS landing page.
- ❌ **Cyberpunk / matrix / hacker aesthetic.** Don't put binary digits in the background.
- ❌ **Floating particles, animated lines, "AI orb" backgrounds.** One ambient gradient blob behind the hero is the entire backdrop budget.
- ❌ **Heavy shadows.** Hairline borders only. The depth comes from background tone, not drop shadows.
- ❌ **Stock photography.** No Unsplash hero images of laptops, no fake screenshots from popular apps. Project visuals are CSS-built mocks.
- ❌ **Emoji.** Anywhere. Not in headings, not in chips, not in the footer.
- ❌ **Hand-drawn SVG illustrations** of people, characters, isometric scenes. The only SVG art is a single hand-drawn underline accent in the hero.

## Interaction

- ❌ **Cursor-follow effects.** No trailing dots, no magnetic buttons, no spotlight reveals.
- ❌ **Scroll-jacking.** Lenis-style smooth scroll is fine; Apple-style locked-section scrubbing is not.
- ❌ **Heavy page-load animations.** The site should be usable from the first paint. No splash screens.
- ❌ **Letter-by-letter text reveals.** A single fade-up is plenty.
- ❌ **Sticky preview cards that follow the cursor on hover.** Not in projects, not anywhere.
- ❌ **"Scroll for more" arrows / chevrons.** If the layout is doing its job, the user knows there's more below.

## Structural

- ❌ **A "Hi, I'm…" intro.** The hero leads with a confident headline, not a salutation.
- ❌ **Testimonials / "Trusted by".** This is a portfolio, not a SaaS landing page. If real testimonials are added later, they go in About — not in their own section.
- ❌ **A blog feed** unless the candidate actually has 5+ posts.
- ❌ **Filler stats** ("100+ projects shipped" — unless verifiable).
- ❌ **A "What I'm reading" or "My setup" section.** Charming but off-brief.
- ❌ **A loading screen with a percent counter.** No.

## Copy

- ❌ **Lorem ipsum.** All placeholder content reads like real, specific writing.
- ❌ **Emoji bullet points** ("🚀 Performance", "✨ Polish"). Use a small accent dot or a number.
- ❌ **"Crafted with passion ❤️" anywhere.**
- ❌ **Vague claims** ("results-driven", "passionate about quality"). Show, don't tell.
- ❌ **Walls of text.** Paragraphs are 2–4 sentences max.

## Code

- ❌ **Single mega-file.** The Next.js codebase is split into the structure in `01-PROJECT-STRUCTURE.md`.
- ❌ **Inline styles.** Tailwind utilities + CSS variables only.
- ❌ **Untyped data.** Every `lib/data/*.ts` has explicit types.
- ❌ **Heavy dependencies** (Three.js, GSAP for the main page, full UI kits). Framer Motion + lucide-react is the entire JS dependency surface.

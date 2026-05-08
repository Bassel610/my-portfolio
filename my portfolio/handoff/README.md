# Basel Sherif — Portfolio · Build Brief

A complete handoff package to recreate this portfolio as a production Next.js project.
Hand the entire `handoff/` folder to Claude (or any frontend engineer) — it contains
everything needed: design tokens, component specs, file tree, content, and
animation/interaction notes.

## How to use

Copy this folder into a fresh Claude conversation along with the prompt:

> "Build me this portfolio exactly as specified across the files in this handoff package.
> Follow the file tree in `01-PROJECT-STRUCTURE.md`. Use the tokens in
> `02-DESIGN-SYSTEM.md`. Implement the sections per `03-SECTIONS-SPEC.md`. Use the
> content in `04-CONTENT.md`. Match the animations in `05-MOTION.md`. Avoid
> everything in `06-ANTI-PATTERNS.md`."

## Files in this package

| File | What it covers |
|---|---|
| `00-OVERVIEW.md` | Project summary, tech stack, design intent in one page |
| `01-PROJECT-STRUCTURE.md` | Full Next.js folder tree, every component file |
| `02-DESIGN-SYSTEM.md` | Tokens — colors, type, spacing, radii, shadows |
| `03-SECTIONS-SPEC.md` | Every section, exact layout + behavior |
| `04-CONTENT.md` | All copy, project data, skills, journey items |
| `05-MOTION.md` | Animation primitives, reveal patterns, easing |
| `06-ANTI-PATTERNS.md` | Things to NOT do |
| `07-RESPONSIVE.md` | Breakpoints, mobile adaptations |

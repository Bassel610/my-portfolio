export const APPROACH_SECTION = {
  eyebrow: 'Approach',
  title: 'How I build software.',
  right:
    "The working defaults that have earned their keep, not a manifesto.",
};

export const PRINCIPLES = [
  {
    title: 'Clarity over cleverness',
    body:
      "The best UI is the one that disappears. I'd rather ship one well-considered interaction than three flashy ones nobody asked for.",
    icon: 'Eye',
  },
  {
    title: 'Responsive by default',
    body:
      "Mobile-first isn't a checkbox — it's the constraint that forces good layout decisions. Every component I write is designed for 360px before 1440.",
    icon: 'Smartphone',
  },
  {
    title: 'Performance is a feature',
    body:
      'Bundle budgets, server components, lazy-loaded routes — not as optimizations, but as part of the spec. Slow pages erode trust faster than bad design.',
    icon: 'Zap',
  },
  {
    title: 'Tested by the person who built it',
    body:
      "I run a manual end-to-end pass on every PR I open: roles isolated, edge cases checked, regressions caught. QA isn't somebody else's job.",
    icon: 'ShieldCheck',
  },
  {
    title: 'Built to scale',
    body:
      'Component contracts, design tokens, predictable boundaries. The code I leave behind should be obvious to the next engineer — because that engineer is usually me, six months later.',
    icon: 'Layers',
  },
  {
    title: 'Motion with intent',
    body:
      'Animation is feedback, not decoration. Every transition I ship has a job: confirm an action, show hierarchy, guide the eye — and an exit ramp for users who opt out.',
    icon: 'Activity',
  },
];

const slidesFor = (slug, indices, labels) =>
  indices.map((i, n) => ({
    src: `/images/projects/${slug}-${i}.png`,
    label: labels[n] ?? `Slide ${n + 1}`,
  }));

export const WORK_SECTION = {
  eyebrow: 'Recent projects',
  title: 'Work I keep going back to.',
  right:
    'A short, deliberate list. Eight live projects, two in view by default — the rest two clicks away.',
};

export const PROJECTS = [
  {
    id: 'twindix',
    title: 'Twindix Executive Platform',
    category: 'Assessment platform',
    year: 2025,
    pill: { tone: 'accent', label: 'Live' },
    tag:
      'A research-backed talent assessment platform — Twindix Executives (8 leadership indicators) and Job Bar (matching candidates to 12,000+ global roles) — distilled from 1,500+ executives and 230+ business models.',
    overview: [
      "The marketing front door for Twindix's flagship products, with the assessment tooling living behind login. Built on Next.js + MUI; the page is the first thing every prospective HR client sees, so it earns its weight in conversion, not just visuals.",
      "Tuned for SEO and first-paint speed, with bilingual-ready content and a clean hand-off into the gated assessment shell.",
    ],
    features: [
      'Next.js marketing site tuned for SEO + first-paint speed.',
      'Eight executive indicators surfaced as scannable copy blocks.',
      'Direct hand-off to the gated assessment shell.',
      'Bilingual-ready content layout.',
    ],
    meta: {
      stack: ['React', 'Next.js', 'MUI', 'REST API'],
      role: 'Frontend',
      timeline: '2025',
      reach: 'Public marketing + client gateway',
    },
    slides: slidesFor(
      'twindix',
      [1, 2, 3, 4, 5, 6],
      ['Hero', 'Indicators', 'Job Bar', 'Models', 'Industries', 'Footer']
    ),
    actions: [{ kind: 'live', href: 'https://twindix.com/', label: 'Visit site' }],
  },
  {
    id: 'twindix-performance-indicator',
    title: 'Twindix Performance Indicator',
    category: 'Multi-role dashboard',
    year: 2025,
    pill: { tone: 'accent', label: 'Live' },
    tag:
      'A multi-role assessment dashboard with three personas — User, HR, Admin — each landing on a different shell, with PDF reports generated entirely on the front end.',
    overview: [
      'Owned the frontend on this one. A single React shell with a role-resolver at boot, three role-specific landings, and PDFs generated in the browser via jsPDF + autotable so reports render the same on every machine.',
      'Reports persist server-side; the binary regenerates from raw scores so the design can change without a backfill. Cut **page load by 40%** and lifted engagement **25%** in the first month after rollout.',
    ],
    features: [
      "Role-resolver routing — admins never see HR's nav, HR never sees admin actions.",
      'Front-end PDF reports — page-break edge cases QA-tested per release.',
      'Re-download from history without re-running the assessment.',
      'Manual end-to-end QA pass per role on every PR.',
    ],
    meta: {
      stack: ['React', 'MUI', 'REST API', 'jsPDF', 'Auth'],
      role: 'Lead frontend',
      timeline: '2025 — 2026',
      reach: 'Internal HR teams + external clients',
    },
    slides: slidesFor(
      'twindix-performance-indicator',
      [4, 3, 5, 6, 7, 8, 9],
      [
        'Tasks (Kanban)',
        'Projects',
        'Blockers',
        'Users',
        'Teams',
        'Red flags',
        'Decisions',
      ]
    ),
    actions: [
      {
        kind: 'live',
        href: 'https://twindix-performance-indicator.netlify.app/login',
        label: 'Live demo',
      },
    ],
  },
  {
    id: 'twindix-benchmark',
    title: 'Twindix Benchmark Creator',
    category: 'HR analytics',
    year: 2025,
    pill: { tone: 'muted', label: 'Login-gated' },
    tag:
      "A benchmark builder used by HR teams to define ideal role profiles and compare them against the company's assessment data — trait distributions, gap analysis, side-by-side role comparisons.",
    overview: [
      'Takes raw output from Performance Indicator and turns it into team-level dashboards: a calibrated yardstick HR can use when interviewing or restructuring. The output is meant to argue with, not just look at.',
    ],
    features: [
      'Role-profile editor with constrained, sane inputs.',
      'Side-by-side comparisons against company data.',
      'Trait distributions surfaced as charts, not tables.',
      'Login-gated for client confidentiality.',
    ],
    meta: {
      stack: ['React', 'MUI', 'REST API', 'Charts'],
      role: 'Frontend',
      timeline: '2025',
      reach: 'HR teams (gated)',
    },
    slides: slidesFor(
      'twindix-benchmark',
      [2, 3, 1],
      ['Admin shell', 'Builder form', 'Login']
    ),
    actions: [
      {
        kind: 'live',
        href: 'https://benchmark.twindix.com/benchmark',
        label: 'See it live',
      },
    ],
  },
  {
    id: 'careerfinder',
    title: 'CareerFinder',
    category: 'Career-fit engine',
    year: 2025,
    pill: { tone: 'muted', label: 'Login-gated' },
    tag:
      'A career-fit application built on top of the Twindix assessment engine: scores a behavioural profile against thousands of role descriptions and surfaces the closest fits with a per-role explanation of why.',
    overview: [
      'One funnel from quiz to ranked result list. The UX is deliberately lightweight — answer the questionnaire, get a list, see why each role made the top.',
    ],
    features: [
      'Single-funnel flow from quiz to ranked results.',
      'Per-role explanations grounded in trait scores.',
      'Job Bar integration for live job-description matches.',
      'Login-gated client demo.',
    ],
    meta: {
      stack: ['React', 'MUI', 'REST API'],
      role: 'Frontend',
      timeline: '2025',
      reach: 'Individual candidates (gated)',
    },
    slides: slidesFor(
      'careerfinder',
      [3, 4, 1],
      ['Admin profile', 'Job Bar code entry', 'Login']
    ),
    actions: [
      {
        kind: 'live',
        href: 'https://careerfinder.twindix.com/login',
        label: 'See it live',
      },
    ],
  },
  {
    id: 'data-nile',
    title: 'Data Nile Research Portal',
    category: 'Full-stack platform',
    year: 2024,
    pill: { tone: 'accent', label: 'Live' },
    tag:
      'A full-stack research portal where the admin owns every pixel — copy, imagery, colour palette, typography, contact-form fields, incoming submissions — all editable from a dashboard.',
    overview: [
      'React 18 + MUI 6 on the frontend, Express 4 + Firebase 11 on the backend, with Firestore for live content updates and Firebase Auth gating the admin. Includes QR generation and drag-and-drop uploads.',
      'Built so the research team can publish without a developer in the loop.',
    ],
    features: [
      'Admin console for hero, about, services, and submissions.',
      'Live Firestore content updates, no rebuild required.',
      'QR-code generation + drag-and-drop image uploads.',
      'Firebase Auth gating the admin surface.',
    ],
    meta: {
      stack: ['React 18', 'MUI 6', 'Express', 'Firebase', 'Firestore'],
      role: 'Full-stack',
      timeline: '2024',
      reach: 'Public site + admin console',
    },
    slides: slidesFor(
      'data-nile',
      [1, 3, 4, 5, 6, 2],
      [
        'Public home',
        'Manage home',
        'Manage images',
        'Manage layout',
        'Invites',
        'Admin gate',
      ]
    ),
    actions: [
      {
        kind: 'live',
        href: 'https://lambent-choux-e63b31.netlify.app/',
        label: 'Visit site',
      },
      {
        kind: 'github',
        href: 'https://github.com/Bassel610/Data_Nile',
        label: 'GitHub',
      },
    ],
  },
  {
    id: 'pico',
    title: 'PICO — Organic Produce Storefront',
    category: 'E-commerce',
    year: 2024,
    pill: { tone: 'accent', label: 'Live' },
    tag:
      'A modern storefront for fresh organic produce delivery. 100+ products, real-time autocomplete, faceted filters, wishlist, persistent cart, full checkout, and order history.',
    overview: [
      'Built on React 19 + Vite 6 with MUI 6. Hits 90+ Lighthouse scores via code splitting, lazy loading and 5-minute API caching. Ships dark mode, WCAG 2.1 AA accessibility, and PWA capabilities.',
    ],
    features: [
      'Real-time autocomplete search across 100+ products.',
      'Faceted filtering — price, rating, category, availability.',
      'Persistent cart + wishlist + four-step checkout.',
      'PWA capable with WCAG 2.1 AA accessibility.',
    ],
    meta: {
      stack: ['React 19', 'Vite 6', 'MUI 6', 'PWA'],
      role: 'Frontend',
      timeline: '2024',
      reach: 'Public storefront',
    },
    slides: slidesFor(
      'pico',
      [1, 2, 3, 4, 5],
      ['Storefront', 'Product detail', 'Cart', 'Checkout', 'Login popup']
    ),
    actions: [
      { kind: 'live', href: 'https://picco.netlify.app/', label: 'Visit site' },
      { kind: 'github', href: 'https://github.com/Bassel610/PICO', label: 'GitHub' },
    ],
  },
  {
    id: 'linas-portfolio',
    title: "Lina's Interior Design Portfolio",
    category: 'Designer portfolio',
    year: 2024,
    pill: { tone: 'accent', label: 'Live' },
    tag:
      "A designer's portfolio with lazy-loaded galleries and Swiper carousels. The chrome quietly recolours as you browse — colours extracted from each hero so the page theme follows the work.",
    overview: [
      'React 18 + Vite 5 + MUI 6 + Swiper. ColorThief and fast-average-color extract dominant colours from each project hero so the chrome theme follows the work, not the other way round. Mobile-first, semantic SEO, contact form with validation.',
    ],
    features: [
      "Theme-from-hero — chrome adapts to each project's colour world.",
      'Lazy-loaded galleries powered by Swiper.',
      'Mobile-first layouts, semantic SEO markup.',
      'Contact form with client-side validation.',
    ],
    meta: {
      stack: ['React 18', 'Vite 5', 'MUI 6', 'Swiper', 'ColorThief'],
      role: 'Frontend',
      timeline: '2024',
      reach: 'Designer portfolio site',
    },
    slides: slidesFor(
      'linas-portfolio',
      [1, 2, 3, 4],
      ['Home', 'My Work', 'About', 'Contact']
    ),
    actions: [
      {
        kind: 'live',
        href: 'https://linas-portfolio.netlify.app/',
        label: 'Visit site',
      },
      {
        kind: 'github',
        href: 'https://github.com/Bassel610/linas-portfolio',
        label: 'GitHub',
      },
    ],
  },
  {
    id: 'dalilk',
    title: 'دليلك — Dalilk Places Guide',
    category: 'Full-stack directory',
    year: 2024,
    pill: { tone: 'accent', label: 'Live' },
    tag:
      'A bilingual local-places guide for Egypt — schools, clinics, mosques, restaurants — with an admin console for adding shops, editing entries, and managing users.',
    overview: [
      'Public-facing Arabic-first directory site with an admin console behind login. Admins add shops with name, rating, categories, geographic location (governorate → district → neighbourhood), and detailed addresses; the site surfaces them on the public side with search and category filters.',
      "Built with React + Vite on the frontend, Express + Firebase on the backend; auth-gated admin and CORS-aware split between web and API.",
    ],
    features: [
      'Arabic-first RTL UI with English fallback labels.',
      'Admin console: add / edit shop, manage users, role-aware navigation.',
      'Geographic hierarchy — governorate, district, neighbourhood.',
      'Login + Google sign-in via Firebase Auth.',
    ],
    meta: {
      stack: ['React 18', 'Vite', 'Express', 'Firebase 12', 'Material UI'],
      role: 'Full-stack',
      timeline: '2024',
      reach: 'Public guide + admin console',
    },
    slides: slidesFor(
      'dalilk',
      [3, 5, 4, 6, 2, 1],
      [
        'Admin shell',
        'Add shop',
        'Edit shop',
        'Manage users',
        'Admin login',
        'Public home',
      ]
    ),
    actions: [
      {
        kind: 'live',
        href: 'https://mellow-pixie-196274.netlify.app/',
        label: 'Visit site',
      },
      {
        kind: 'github',
        href: 'https://github.com/Bassel610/Dalilk',
        label: 'GitHub',
      },
    ],
  },
];

export const VISIBLE_BY_DEFAULT = 2;
export const SHOW_MORE_STEP = 2;

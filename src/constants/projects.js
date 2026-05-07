const numbered = (slug, indices) =>
  indices.map((i) => `/images/projects/${slug}-${i}.png`);

export const PROJECTS = [
  {
    id: 'project-1',
    slug: 'twindix',
    name: 'Twindix Executive Platform',
    type: 'Assessment Platform',
    tech: ['React', 'Next.js', 'MUI', 'REST API'],
    description:
      "A research-backed talent assessment platform for executives and HR teams. Built around two flagship assessments — Twindix Executives (8 leadership indicators) and Job Bar (matching candidates to 12,000+ global roles) — that turn behavioural science into actionable hiring and team-building decisions. The models behind it are distilled from 1,500+ executives, 230+ business models and 1,400+ work environments. The marketing site is the front door; the assessment tooling lives behind login.",
    images: numbered('twindix', [1, 2, 3, 4, 5, 6]),
    liveUrl: 'https://twindix.com/',
    repoUrl: null,
  },
  {
    id: 'project-2',
    slug: 'twindix-performance-indicator',
    name: 'Twindix Performance Indicator',
    type: 'Multi-Role Dashboard',
    tech: ['React', 'MUI', 'Auth', 'PDF Generation', 'REST API'],
    description:
      "A multi-role assessment dashboard with three personas — User, HR and Admin — each landing on a different shell. Users complete assessments and download personalised PDF reports generated entirely on the front end from raw scores. HR manages enrollments, package purchases and team-level views; Admin owns pricing, packages and audit. Every report is persisted per account so it can be re-downloaded later. The live link starts at the auth screen because the dashboards are gated.",
    images: numbered('twindix-performance-indicator', [1, 2, 3, 4, 5, 6, 7, 8, 9]),
    liveUrl: 'https://twindix-performance-indicator.netlify.app/login',
    repoUrl: null,
  },
  {
    id: 'project-3',
    slug: 'twindix-benchmark',
    name: 'Twindix Benchmark Creator',
    type: 'HR Analytics',
    tech: ['React', 'MUI', 'REST API', 'Charts'],
    description:
      "A benchmark builder used by HR teams to define ideal role profiles and compare them against the company's assessment data. It takes the raw results from Performance Indicator and turns them into team-level dashboards: trait distributions, gap analysis and side-by-side role comparisons. The output is a calibrated yardstick HR can use when interviewing or restructuring. Login-gated.",
    images: numbered('twindix-benchmark', [1, 2, 3]),
    liveUrl: 'https://benchmark.twindix.com/benchmark',
    repoUrl: null,
  },
  {
    id: 'project-4',
    slug: 'careerfinder',
    name: 'CareerFinder',
    type: 'Career-Fit Engine',
    tech: ['React', 'MUI', 'REST API'],
    description:
      "A career-fit application built on top of the Twindix assessment engine. Individuals complete the questionnaire and the matcher scores their behavioural profile against thousands of role descriptions, surfacing the closest fits with a per-role explanation of why. The UX is intentionally lightweight — one funnel from quiz to ranked result list. Demo opens on the login screen.",
    images: numbered('careerfinder', [1, 2, 3, 4]),
    liveUrl: 'https://careerfinder.twindix.com/login',
    repoUrl: null,
  },
  {
    id: 'project-5',
    slug: 'data-nile',
    name: 'Data Nile Research Portal',
    type: 'Full-Stack Platform',
    tech: ['React 18', 'MUI 6', 'Express', 'Firebase', 'Firestore'],
    description:
      "A full-stack research portal where the admin owns every pixel: page copy, imagery, colour palette, typography, contact-form fields and incoming submissions are all editable from a dashboard. The frontend is React 18 + MUI 6; the backend is Express 4 with Firebase 11, Firestore powering live content updates and Firebase Auth gating the admin side. Includes QR-code generation (qrcode.react) and drag-and-drop uploads (react-dropzone). Built so the research team can publish without a developer in the loop.",
    images: numbered('data-nile', [1, 2, 3, 4, 5, 6]),
    liveUrl: 'https://lambent-choux-e63b31.netlify.app/',
    repoUrl: 'https://github.com/Bassel610/Data_Nile',
  },
  {
    id: 'project-6',
    slug: 'pico',
    name: 'PICO — Organic Produce Storefront',
    type: 'E-commerce',
    tech: ['React 19', 'Vite 6', 'MUI 6', 'PWA'],
    description:
      "A modern storefront for fresh organic produce delivery. 100+ products across 5 categories with real-time autocomplete search, faceted filtering (price, rating, category, availability), wishlist, persistent cart, full checkout and order history. Hits 90+ Lighthouse scores via code splitting, lazy loading and 5-minute API caching. Ships dark mode, WCAG 2.1 AA accessibility and PWA capabilities. Built on React 19 + Vite 6 with MUI 6.",
    images: numbered('pico', [1, 2, 3, 4, 5]),
    liveUrl: 'https://picco.netlify.app/',
    repoUrl: 'https://github.com/Bassel610/PICO',
  },
  {
    id: 'project-7',
    slug: 'linas-portfolio',
    name: "Lina's Interior Design Portfolio",
    type: 'Designer Portfolio',
    tech: ['React 18', 'Vite 5', 'MUI 6', 'Swiper', 'ColorThief'],
    description:
      "A designer's project portfolio with rich, lazy-loaded galleries and Swiper-powered carousels. The chrome quietly recolours as you browse — ColorThief and fast-average-color extract dominant colours from each project hero so the page theme follows the work, not the other way round. Mobile-first responsive layouts, semantic SEO markup, and a contact form with validation. React 18, Vite 5, React Router 7, MUI 6.",
    images: numbered('linas-portfolio', [1, 2, 3, 4]),
    liveUrl: 'https://linas-portfolio.netlify.app/',
    repoUrl: 'https://github.com/Bassel610/linas-portfolio',
  },
  {
    id: 'project-8',
    slug: 'dalilk',
    name: 'Dalilk — Audio Capture & PDF Reports',
    type: 'Full-Stack Tool',
    tech: ['React 18', 'Vite', 'Express', 'Firebase 12', 'jsPDF'],
    description:
      "A full-stack tool for capturing audio in the browser and turning sessions into structured PDF reports. The React/Vite frontend records via react-mic and audio-react-recorder; the Express backend persists sessions to Firestore through Firebase 12, and jsPDF + jspdf-autotable produce tabular exports clean enough to send to a client. Auth-gated with Firebase Auth and CORS-aware for the API split between front and back.",
    images: numbered('dalilk', [1, 2, 3]),
    liveUrl: 'https://mellow-pixie-196274.netlify.app/',
    repoUrl: 'https://github.com/Bassel610/Dalilk',
  },
];

export const PROJECT_NAV = PROJECTS.map((p) => ({
  id: p.id,
  title: p.name,
  type: p.type,
  tech: p.tech.slice(0, 3).join(' • '),
}));

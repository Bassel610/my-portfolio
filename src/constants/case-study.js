export const CASE_STUDY = {
  slug: 'twindix-performance-indicator',
  eyebrow: 'Case study · 2025',
  title: 'Twindix Performance Indicator',
  subtitle:
    'A multi-role assessment dashboard with PDF reports — three personas in one shell.',
  liveUrl: 'https://twindix-performance-indicator.netlify.app/login',
  meta: [
    { label: 'Role', value: 'Lead frontend' },
    { label: 'Stack', value: 'React · MUI · jsPDF · REST' },
    { label: 'Timeline', value: '2025 · ongoing' },
    { label: 'Team', value: '1 frontend · 1 backend' },
  ],
  sections: [
    {
      kind: 'problem',
      heading: 'The problem',
      body:
        'HR teams ran assessments in spreadsheets and emailed PDF reports by hand. Three people use the system — the assessed user, the HR coordinator, the admin — but each needs a different view, different data, different actions. The previous tool collapsed all three into one cluttered table; HR was correcting reports manually after every export.',
    },
    {
      kind: 'constraints',
      heading: 'Constraints I had to respect',
      body:
        'Reports had to be generated entirely on the front end (no PDF service budget). One auth backend, three role-specific landings — no full reload between roles. Persisted reports per account so HR could re-download last quarter without reissuing the assessment. PDFs had to be branded and printable.',
    },
    {
      kind: 'decisions',
      heading: 'What I decided',
      body:
        'A single React shell with a role-resolver at boot — fetch the user, route to one of three feature trees, never show another role\'s nav. PDF generation in the browser via jsPDF + autotable, with a screenshot-driven QA pass on every page-break case. Report metadata stored server-side; the binary regenerates from raw scores so we can re-style without a backfill.',
    },
    {
      kind: 'outcomes',
      heading: 'What shipped',
      body:
        'Three role shells, each landing on a different dashboard. PDF reports that match the print proof on every browser. Re-download from history without re-running the assessment. Page load down 40% vs the prior tool, engagement up 25% in the first month after rollout.',
    },
    {
      kind: 'qa',
      heading: 'How I tested it',
      body:
        'Manual end-to-end pass per role on every PR — login → assessment → report → re-download — with a checklist that covers role isolation (admin actions invisible to users), PDF page-break edge cases (long names, RTL, missing data), and the offline path. Bugs filed against my own work in the same tracker as everything else; the QA discipline keeps the gate honest.',
    },
  ],
};

'use client';
import dynamic from 'next/dynamic';
import VantaBackground from './vanta-background';
import ScrollProgress from './scroll-progress';
import FloatingElements from './floating-elements';
import Nav from './nav';
import Footer from './footer';
import NowPill from './now-pill';
import CommandPalette from './command-palette';
import { LoadingSpinner } from '@/atoms';
import { useSectionNav } from '@/hooks/shared';
import { NAV_PAGES } from '@/constants/site';
import Hero from '@/views/hero';

const About = dynamic(() => import('@/views/about'), {
  ssr: false,
  loading: () => <LoadingSpinner size={40} />,
});
const Experience = dynamic(() => import('@/views/experience'), {
  ssr: false,
  loading: () => <LoadingSpinner size={40} />,
});
const CaseStudy = dynamic(() => import('@/views/case-study'), {
  ssr: false,
  loading: () => <LoadingSpinner size={40} />,
});
const Projects = dynamic(() => import('@/views/projects'), {
  ssr: false,
  loading: () => <LoadingSpinner size={40} />,
});

const SECTIONS = [
  { sectionId: 'hero', Component: Hero },
  { sectionId: 'about', Component: About },
  { sectionId: 'experience', Component: Experience },
  { sectionId: 'case-study', Component: CaseStudy },
  { sectionId: 'projects', Component: Projects },
];

const totalPages = NAV_PAGES.length;

export default function DesktopShell() {
  const { containerRef, currentPage, goTo } = useSectionNav();

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <ScrollProgress
        currentPage={currentPage}
        totalPages={totalPages}
        onNavigate={goTo}
      />
      <Nav
        currentPage={currentPage}
        totalPages={totalPages}
        onNavigate={goTo}
      />
      <NowPill />
      <CommandPalette onNavigate={goTo} />
      <VantaBackground />
      <FloatingElements count={6} />

      <div
        ref={containerRef}
        style={{
          position: 'absolute',
          inset: 0,
          overflowY: 'auto',
          scrollSnapType: 'y mandatory',
          scrollBehavior: 'smooth',
          zIndex: 2,
        }}
      >
        {SECTIONS.map(({ sectionId, Component }) => (
          <section
            key={sectionId}
            id={sectionId}
            style={{
              minHeight: '100vh',
              scrollSnapAlign: 'start',
              scrollSnapStop: 'always',
              position: 'relative',
            }}
          >
            <Component />
          </section>
        ))}
        <Footer />
      </div>
    </div>
  );
}

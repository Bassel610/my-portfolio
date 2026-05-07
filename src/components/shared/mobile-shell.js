'use client';
import VantaBackground from './vanta-background';
import ScrollProgress from './scroll-progress';
import FloatingElements from './floating-elements';
import Nav from './nav';
import Footer from './footer';
import { Hero, About, Experience, Projects } from '@/views';
import { NAV_PAGES } from '@/constants/site';

function scrollToPage(pageId) {
  const target = NAV_PAGES.find((p) => p.id === pageId);
  if (!target) return;
  const el = document.getElementById(target.sectionId);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function MobileShell({ currentPage = 'page-one' }) {
  return (
    <div
      style={{
        width: '100vw',
        minHeight: '100vh',
        overflow: 'auto',
        margin: 0,
        padding: 0,
      }}
    >
      <ScrollProgress
        currentPage={currentPage}
        totalPages={4}
        isMobile={true}
        onNavigate={scrollToPage}
      />
      <Nav
        currentPage={currentPage}
        totalPages={4}
        isMobile={true}
        onNavigate={scrollToPage}
      />
      <VantaBackground />
      <FloatingElements count={4} />

      <div style={{ position: 'relative' }}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

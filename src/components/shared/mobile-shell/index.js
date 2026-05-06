'use client';
import VantaBackground from '@/component/Vanta/Vanta';
import ScrollProgress from '@/component/animations/ScrollProgress';
import FloatingElements from '@/component/animations/FloatingElements';
import GlassmorphismNav from '@/component/ui/GlassmorphismNav';
import CursorFollower from '@/component/ui/CursorFollower';
import Footer from '@/component/Share/footer';
import { Hero, About, Experience, Projects } from '@/views';

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
      <ScrollProgress currentPage={currentPage} totalPages={4} isMobile={true} />
      <GlassmorphismNav
        currentPage={currentPage}
        totalPages={4}
        isMobile={true}
      />
      <CursorFollower />
      <VantaBackground />
      <FloatingElements count={8} />

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

'use client';
import VantaBackground from '../vanta-background';
import ScrollProgress from '../scroll-progress';
import FloatingElements from '../floating-elements';
import Nav from '../nav';
import CursorFollower from '../cursor-follower';
import Footer from '../footer';
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
      <Nav currentPage={currentPage} totalPages={4} isMobile={true} />
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

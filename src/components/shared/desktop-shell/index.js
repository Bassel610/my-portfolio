'use client';
import dynamic from 'next/dynamic';
import VantaBackground from '../vanta-background';
import ScrollProgress from '../scroll-progress';
import FloatingElements from '../floating-elements';
import Nav from '../nav';
import CursorFollower from '../cursor-follower';
import Footer from '../footer';
import { LoadingSpinner } from '@/atoms';
import { useSectionRouter } from '@/hooks/shared';
import { getTransform } from '@/lib';
import Hero from '@/views/hero';

const About = dynamic(() => import('@/views/about'), {
  ssr: false,
  loading: () => <LoadingSpinner size={40} />,
});
const Experience = dynamic(() => import('@/views/experience'), {
  ssr: false,
  loading: () => <LoadingSpinner size={40} />,
});
const Projects = dynamic(() => import('@/views/projects'), {
  ssr: false,
  loading: () => <LoadingSpinner size={40} />,
});

const PAGES = {
  'page-one': Hero,
  'page-two': About,
  'page-three': Experience,
  'page-four': Projects,
};
const PAGE_KEYS = Object.keys(PAGES);

export default function DesktopShell({ isAppLoading }) {
  const { transition, wheelRef, sectionContentRef, goTo } = useSectionRouter(
    PAGE_KEYS,
    { isAppLoading, isMobile: false }
  );

  const CurrentComponent = PAGES[transition.currentPage];
  const NextComponent = transition.nextPage ? PAGES[transition.nextPage] : null;

  return (
    <div
      ref={wheelRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
        touchAction: 'none',
      }}
    >
      <ScrollProgress
        currentPage={transition.currentPage}
        totalPages={4}
        onNavigate={goTo}
      />
      <Nav
        currentPage={transition.currentPage}
        totalPages={4}
        onNavigate={goTo}
      />
      <CursorFollower />
      <VantaBackground />
      <FloatingElements count={6} />

      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <div
          ref={sectionContentRef}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            overflow: 'auto',
            ...getTransform(
              transition.nextPage ? transition.direction : null,
              'current'
            ),
            transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
            transformStyle: 'preserve-3d',
            perspective: '1000px',
            zIndex: 2,
          }}
        >
          <div
            style={{
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
              width: '100%',
              minHeight: '100%',
            }}
          >
            <CurrentComponent />
          </div>
        </div>
        <Footer />

        {NextComponent && (
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              ...getTransform(transition.direction, 'next'),
              transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
              transformStyle: 'preserve-3d',
              perspective: '1000px',
              zIndex: 1,
            }}
          >
            <div
              style={{
                transform: 'translateZ(0)',
                backfaceVisibility: 'hidden',
                width: '100%',
                height: '100%',
              }}
            >
              <NextComponent />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

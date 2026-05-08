'use client';
import {
  ErrorBoundary,
  GlobalErrorHandler,
  OfflineBanner,
} from '@/components/error';
import { Nav, Footer } from '@/components/shared';
import { GrainOverlay } from '@/atoms';
import {
  Hero,
  About,
  Skills,
  Work,
  Approach,
  Journey,
  Services,
  Contact,
} from '@/views';

export default function Home() {
  return (
    <ErrorBoundary>
      <OfflineBanner />
      <GlobalErrorHandler />
      <GrainOverlay />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Approach />
        <Journey />
        <Services />
        <Contact />
      </main>
      <Footer />
    </ErrorBoundary>
  );
}

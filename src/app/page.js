'use client';
import { ErrorBoundary, GlobalErrorHandler, OfflineBanner } from '@/components/error';

export default function Home() {
  return (
    <ErrorBoundary>
      <OfflineBanner />
      <GlobalErrorHandler />
      <main style={{ minHeight: '100vh' }} />
    </ErrorBoundary>
  );
}

'use client';
import {
  ErrorBoundary,
  GlobalErrorHandler,
  OfflineBanner,
} from '@/components/error';
import { LoadingSpinner } from '@/atoms';
import { DesktopShell, MobileShell } from '@/components/shared';
import { useAppLoading, useMobile } from '@/hooks/shared';

export default function Home() {
  const isAppLoading = useAppLoading();
  const isMobile = useMobile();

  if (isAppLoading) {
    return <LoadingSpinner fullScreen={true} message="Loading Portfolio" />;
  }

  return (
    <ErrorBoundary>
      <OfflineBanner />
      <GlobalErrorHandler />
      {isMobile ? <MobileShell /> : <DesktopShell isAppLoading={isAppLoading} />}
    </ErrorBoundary>
  );
}

'use client';
import ErrorBoundary from '@/component/ui/ErrorBoundary';
import LoadingSpinner from '@/component/ui/LoadingSpinner';
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
      {isMobile ? <MobileShell /> : <DesktopShell isAppLoading={isAppLoading} />}
    </ErrorBoundary>
  );
}

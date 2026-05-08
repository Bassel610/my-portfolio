'use client';
import { Box } from '@mui/material';
import { ErrorBoundary, GlobalErrorHandler, OfflineBanner } from '@/components/error';
import { GrainOverlay } from '@/atoms';
import Inbox from '@/components/inbox';

export default function InboxPage() {
  return (
    <ErrorBoundary>
      <OfflineBanner />
      <GlobalErrorHandler />
      <GrainOverlay />
      <Box
        sx={{
          maxWidth: 880,
          mx: 'auto',
          px: 'clamp(20px, 5vw, 56px)',
          py: { xs: 6, md: 9 },
        }}
      >
        <Inbox />
      </Box>
    </ErrorBoundary>
  );
}

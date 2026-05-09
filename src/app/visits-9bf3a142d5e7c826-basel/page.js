'use client';
import { Box } from '@mui/material';
import { GrainOverlay } from '@/atoms';
import Stats from '@/components/stats';

export default function StatsPage() {
  return (
    <>
      <GrainOverlay />
      <Box
        sx={{
          maxWidth: 720,
          mx: 'auto',
          px: 'clamp(20px, 5vw, 56px)',
          py: { xs: 6, md: 9 },
        }}
      >
        <Stats />
      </Box>
    </>
  );
}

'use client';
import { Box } from '@mui/material';

export default function HeroBackdrop() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-20%',
          left: '50%',
          width: '80vw',
          height: '80vw',
          maxWidth: 1100,
          maxHeight: 1100,
          transform: 'translateX(-50%)',
          background:
            'radial-gradient(closest-side, var(--accent) 0%, transparent 60%)',
          opacity: 0.07,
          filter: 'blur(20px)',
        },
        '[data-theme="light"] &::before': { opacity: 0.04 },
      }}
    />
  );
}

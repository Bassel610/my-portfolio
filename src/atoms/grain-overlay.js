'use client';
import { Box } from '@mui/material';

const GRAIN_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.45 0'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>`;

export default function GrainOverlay() {
  return (
    <Box
      aria-hidden
      sx={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        backgroundImage: `url("${GRAIN_SVG}")`,
        backgroundRepeat: 'repeat',
        opacity: 'var(--grain-op)',
        mixBlendMode: 'var(--grain-mix)',
        zIndex: 1,
      }}
    />
  );
}

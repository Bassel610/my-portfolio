'use client';
import { Box } from '@mui/material';

export default function GoldUnderline({ children }) {
  return (
    <Box component="span" sx={{ position: 'relative', display: 'inline-block' }}>
      {children}
      <Box
        component="svg"
        viewBox="0 0 220 14"
        preserveAspectRatio="none"
        aria-hidden
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: '-0.18em',
          width: '100%',
          height: '0.32em',
          color: 'var(--accent)',
          pointerEvents: 'none',
        }}
      >
        <path
          d="M2 8 C 40 2, 100 12, 160 6 S 215 9, 218 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
      </Box>
    </Box>
  );
}

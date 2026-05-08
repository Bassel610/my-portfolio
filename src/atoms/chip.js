'use client';
import { Box } from '@mui/material';

export default function Chip({ children }) {
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        px: 1,
        py: 0.4,
        borderRadius: '6px',
        border: '1px solid var(--line)',
        background: 'rgba(20, 15, 5, 0.04)',
        color: 'var(--fg-dim)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.72rem',
        letterSpacing: '0.02em',
        lineHeight: 1.3,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </Box>
  );
}

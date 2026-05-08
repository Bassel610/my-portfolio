'use client';
import { Box } from '@mui/material';

export default function MonoNumber({ value, size = 0.78 }) {
  const padded = String(value).padStart(2, '0');
  return (
    <Box
      component="span"
      sx={{
        fontFamily: 'var(--font-mono)',
        fontSize: `${size}rem`,
        letterSpacing: '0.08em',
        color: 'var(--fg-mute)',
        fontVariantNumeric: 'tabular-nums',
        whiteSpace: 'nowrap',
      }}
    >
      / {padded}
    </Box>
  );
}

'use client';
import { Box } from '@mui/material';

const TONE = {
  mute: 'var(--fg-mute)',
  accent: 'var(--accent)',
};

export default function MonoNumber({ value, size = 0.78, tone = 'mute' }) {
  const padded = String(value).padStart(2, '0');
  return (
    <Box
      component="span"
      sx={{
        fontFamily: 'var(--font-mono)',
        fontSize: `${size}rem`,
        letterSpacing: '0.08em',
        color: TONE[tone] ?? TONE.mute,
        fontVariantNumeric: 'tabular-nums',
        whiteSpace: 'nowrap',
      }}
    >
      / {padded}
    </Box>
  );
}

'use client';
import { Box, Chip } from '@mui/material';

const PALETTE = {
  dark: {
    color: '#4c1d95',
    background:
      'linear-gradient(45deg, rgba(102,126,234,0.18), rgba(118,75,162,0.18))',
    border: '1px solid rgba(102,126,234,0.35)',
  },
  light: {
    color: '#fff',
    background:
      'linear-gradient(45deg, rgba(102,126,234,0.55), rgba(240,147,251,0.45))',
    border: '1px solid rgba(255,255,255,0.35)',
  },
};

export default function Tech({ items, dense = false, variant = 'dark' }) {
  if (!items?.length) return null;
  const palette = PALETTE[variant];
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: dense ? 0.5 : 0.75,
        mb: dense ? 1 : 1.5,
      }}
    >
      {items.map((label) => (
        <Chip
          key={label}
          label={label}
          size="small"
          sx={{
            fontSize: dense ? '0.7rem' : '0.75rem',
            fontWeight: 600,
            height: dense ? 22 : 24,
            ...palette,
          }}
        />
      ))}
    </Box>
  );
}

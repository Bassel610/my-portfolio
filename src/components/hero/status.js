'use client';
import { Box, Typography } from '@mui/material';
import { HERO } from '@/constants/hero';

export default function Status() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'row', md: 'column' },
        alignItems: { xs: 'center', md: 'flex-start' },
        gap: { xs: 1.25, md: 0.85 },
        flexWrap: 'wrap',
        mt: { md: 1 },
      }}
    >
      <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: 'oklch(0.65 0.18 145)',
            boxShadow: '0 0 0 0 var(--accent-soft)',
            animation: 'heroDot 1.8s ease-out infinite',
            '@keyframes heroDot': {
              '0%': { boxShadow: '0 0 0 0 var(--accent-soft)' },
              '70%': { boxShadow: '0 0 0 8px transparent' },
              '100%': { boxShadow: '0 0 0 0 transparent' },
            },
          }}
        />
        <Typography sx={{ fontSize: '0.86rem', color: 'var(--fg)', fontWeight: 500 }}>
          {HERO.status.dot}
        </Typography>
      </Box>
      <Typography
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.74rem',
          letterSpacing: '0.06em',
          color: 'var(--fg-mute)',
          textTransform: 'uppercase',
        }}
      >
        {HERO.status.line}
      </Typography>
    </Box>
  );
}

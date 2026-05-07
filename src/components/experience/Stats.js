'use client';
import { Box, Typography } from '@mui/material';
import { STATS } from '@/constants/stats';

export default function Stats() {
  return (
    <Box
      component="section"
      aria-label="By the numbers"
      sx={{
        mt: { xs: 1, md: 2 },
        mb: { xs: 4, md: 5 },
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(2, minmax(0, 1fr))',
          md: 'repeat(4, minmax(0, 1fr))',
        },
        gap: { xs: 1.5, md: 2 },
        px: { xs: 0.5, md: 0 },
      }}
    >
      {STATS.map((s, i) => (
        <Box
          key={s.label}
          sx={{
            position: 'relative',
            pl: 2,
            py: 0.75,
            borderLeft: '2px solid rgba(255,255,255,0.12)',
            transition: 'border-color 0.25s ease',
            '&:hover': { borderLeftColor: 'rgba(255,255,255,0.45)' },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '1.5rem', md: '1.9rem' },
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#fff',
              letterSpacing: '-0.02em',
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            {s.value}
          </Typography>
          <Typography
            sx={{
              mt: 0.4,
              fontSize: '0.78rem',
              color: 'rgba(255,255,255,0.78)',
              letterSpacing: '0.01em',
            }}
          >
            {s.label}
          </Typography>
          <Typography
            sx={{
              mt: 0.2,
              fontSize: '0.66rem',
              color: 'rgba(255,255,255,0.42)',
              fontFamily: 'monospace',
              letterSpacing: '0.02em',
            }}
          >
            {s.source}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

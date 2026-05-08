'use client';
import { Box, Typography } from '@mui/material';
import { GoldUnderline } from '@/atoms';
import { HERO } from '@/constants/hero';

export default function Headline() {
  return (
    <Box>
      <Typography
        component="div"
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--fg-mute)',
          mb: { xs: 2, md: 3 },
        }}
      >
        {HERO.eyebrow}
      </Typography>
      <Typography
        component="h1"
        sx={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          letterSpacing: '-0.025em',
          fontSize: 'clamp(40px, 9vw, 88px)',
          lineHeight: 1.04,
          color: 'var(--fg)',
          maxWidth: 920,
        }}
      >
        {HERO.headlineLead}{' '}
        <GoldUnderline>{HERO.headlineHighlight}</GoldUnderline>
        {HERO.headlineTail}
      </Typography>
      <Typography
        sx={{
          mt: { xs: 2.5, md: 3.5 },
          fontSize: { xs: '1rem', md: '1.05rem' },
          color: 'var(--fg-dim)',
          maxWidth: 640,
          lineHeight: 1.55,
        }}
      >
        {HERO.sub}
      </Typography>
    </Box>
  );
}

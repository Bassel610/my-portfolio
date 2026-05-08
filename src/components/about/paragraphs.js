'use client';
import { Box, Typography } from '@mui/material';
import { Reveal } from '@/atoms';
import { ABOUT } from '@/constants/about';

export default function Paragraphs() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.25 }}>
      {ABOUT.paragraphs.map((p, i) => (
        <Reveal key={i} delay={i * 0.04}>
          <Typography
            sx={{
              fontSize: { xs: '0.96rem', md: '1.02rem' },
              color: 'var(--fg-dim)',
              lineHeight: 1.7,
              maxWidth: 620,
            }}
          >
            {p}
          </Typography>
        </Reveal>
      ))}
    </Box>
  );
}

'use client';
import { Box, Typography } from '@mui/material';
import Reveal from '@/atoms/reveal';
import MonoNumber from '@/atoms/mono-number';

export default function SectionHead({ number, eyebrow, title, right }) {
  return (
    <Box
      sx={{
        pt: { xs: 1.5, md: 3 },
        mb: { xs: 4, md: 6 },
        borderTop: '1px solid var(--line)',
      }}
    >
      <Reveal>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.25,
            pt: { xs: 2, md: 3 },
            mb: { xs: 2, md: 3 },
          }}
        >
          {number != null && <MonoNumber value={number} tone="accent" />}
          <Typography
            component="span"
            sx={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--fg-dim)',
            }}
          >
            — {eyebrow}
          </Typography>
        </Box>
      </Reveal>
      <Reveal delay={0.08}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: { xs: 2, md: 4 },
            flexWrap: 'wrap',
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              letterSpacing: '-0.025em',
              fontSize: 'clamp(40px, 5.6vw, 68px)',
              lineHeight: 1.04,
              color: 'var(--fg)',
              maxWidth: 880,
            }}
          >
            {title}
          </Typography>
          {right && (
            <Box
              sx={{
                color: 'var(--fg-dim)',
                fontSize: '0.92rem',
                lineHeight: 1.55,
                maxWidth: 320,
                textAlign: { xs: 'left', md: 'right' },
              }}
            >
              {right}
            </Box>
          )}
        </Box>
      </Reveal>
    </Box>
  );
}

'use client';
import { Box } from '@mui/material';
import { Reveal } from '@/atoms';
import { HeroBackdrop } from '@/components/shared';
import Headline from './headline';
import CTAs from './ctas';
import Status from './status';
import Avatar from './avatar';

export default function Hero() {
  return (
    <Box sx={{ position: 'relative', pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 12 } }}>
      <HeroBackdrop />
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr auto' },
          gap: { xs: 4, md: 6 },
          alignItems: { md: 'flex-start' },
          justifyItems: { xs: 'center', md: 'stretch' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Box
          sx={{
            order: { xs: 2, md: 1 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
          }}
        >
          <Reveal>
            <Headline />
          </Reveal>
          <Reveal delay={0.1}>
            <CTAs />
          </Reveal>
        </Box>
        <Box
          sx={{
            order: { xs: 1, md: 2 },
            minWidth: { md: 220 },
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: 2, md: 2.5 },
            alignItems: { xs: 'center', md: 'flex-end' },
          }}
        >
          <Reveal>
            <Avatar />
          </Reveal>
          <Reveal delay={0.05}>
            <Status />
          </Reveal>
        </Box>
      </Box>
    </Box>
  );
}

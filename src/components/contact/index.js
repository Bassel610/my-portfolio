'use client';
import { Box, Typography } from '@mui/material';
import { Reveal } from '@/atoms';
import { SectionHead } from '@/components/shared';
import { CONTACT_SECTION } from '@/constants/contact';
import Channels from './channels';
import Form from './form';

export default function Contact() {
  return (
    <>
      <SectionHead
        number={7}
        eyebrow={CONTACT_SECTION.eyebrow}
        title={CONTACT_SECTION.title}
        right={CONTACT_SECTION.right}
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
          gap: { xs: 4, md: 6 },
          alignItems: 'flex-start',
        }}
      >
        <Reveal>
          <Channels />
        </Reveal>
        <Reveal delay={0.06}>
          <Form />
        </Reveal>
      </Box>
      <Typography
        sx={{
          mt: 3,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          letterSpacing: '0.06em',
          color: 'var(--fg-mute)',
        }}
      >
        {CONTACT_SECTION.reply}
      </Typography>
    </>
  );
}

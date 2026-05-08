'use client';
import { Box } from '@mui/material';
import { SectionHead } from '@/components/shared';
import { ABOUT } from '@/constants/about';
import Paragraphs from './paragraphs';
import Spec from './spec';

export default function About() {
  return (
    <>
      <SectionHead number={1} eyebrow={ABOUT.eyebrow} title={ABOUT.title} right={ABOUT.right} />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.3fr 1fr' },
          gap: { xs: 4, md: 7 },
          alignItems: 'flex-start',
        }}
      >
        <Paragraphs />
        <Spec />
      </Box>
    </>
  );
}

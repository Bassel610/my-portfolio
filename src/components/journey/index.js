'use client';
import { Box } from '@mui/material';
import { Reveal } from '@/atoms';
import { SectionHead } from '@/components/shared';
import { JOURNEY, JOURNEY_SECTION } from '@/constants/journey';
import Entry from './entry';

export default function Journey() {
  return (
    <>
      <SectionHead
        number={5}
        eyebrow={JOURNEY_SECTION.eyebrow}
        title={JOURNEY_SECTION.title}
        right={JOURNEY_SECTION.right}
      />
      <Box
        sx={{
          position: 'relative',
          maxWidth: 880,
          '&::before': {
            content: '""',
            position: 'absolute',
            left: 4,
            top: 6,
            bottom: 0,
            width: 1,
            background: 'var(--line)',
          },
        }}
      >
        {JOURNEY.map((entry, i) => (
          <Reveal key={entry.year + entry.role} delay={i * 0.05}>
            <Entry
              year={entry.year}
              role={entry.role}
              location={entry.location}
              body={entry.body}
              chips={entry.chips}
              current={!!entry.current}
            />
          </Reveal>
        ))}
      </Box>
    </>
  );
}

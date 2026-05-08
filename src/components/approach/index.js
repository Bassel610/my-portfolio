'use client';
import { Box } from '@mui/material';
import { Reveal } from '@/atoms';
import { SectionHead } from '@/components/shared';
import { PRINCIPLES, APPROACH_SECTION } from '@/constants/principles';
import PrincipleCell from './cell';

export default function Approach() {
  return (
    <>
      <SectionHead
        number={4}
        eyebrow={APPROACH_SECTION.eyebrow}
        title={APPROACH_SECTION.title}
        right={APPROACH_SECTION.right}
      />
      <Reveal>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, minmax(0, 1fr))',
              lg: 'repeat(3, minmax(0, 1fr))',
            },
            gap: '1px',
            background: 'var(--line)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}
        >
          {PRINCIPLES.map((p, i) => (
            <PrincipleCell
              key={p.title}
              index={i + 1}
              title={p.title}
              body={p.body}
              icon={p.icon}
            />
          ))}
        </Box>
      </Reveal>
    </>
  );
}

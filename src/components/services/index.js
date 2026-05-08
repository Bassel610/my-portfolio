'use client';
import { Box } from '@mui/material';
import { Reveal } from '@/atoms';
import { SectionHead } from '@/components/shared';
import { SERVICES, SERVICES_SECTION } from '@/constants/services';
import ServiceTile from './tile';

export default function Services() {
  return (
    <>
      <SectionHead
        number={6}
        eyebrow={SERVICES_SECTION.eyebrow}
        title={SERVICES_SECTION.title}
        right={SERVICES_SECTION.right}
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <ServiceTile
              index={i + 1}
              title={s.title}
              body={s.body}
              deliverables={s.deliverables}
            />
          </Reveal>
        ))}
      </Box>
    </>
  );
}

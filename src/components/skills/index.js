'use client';
import { Box } from '@mui/material';
import { Reveal } from '@/atoms';
import { SectionHead } from '@/components/shared';
import { SKILLS, SKILLS_SECTION } from '@/constants/skills';
import SkillCard from './card';

export default function Skills() {
  return (
    <>
      <SectionHead
        number={2}
        eyebrow={SKILLS_SECTION.eyebrow}
        title={SKILLS_SECTION.title}
        right={SKILLS_SECTION.right}
      />
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {SKILLS.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08}>
            <SkillCard index={i} title={s.title} blurb={s.blurb} chips={s.chips} />
          </Reveal>
        ))}
      </Box>
    </>
  );
}

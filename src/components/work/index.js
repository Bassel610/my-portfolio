'use client';
import { useState } from 'react';
import { Box } from '@mui/material';
import { SectionHead } from '@/components/shared';
import {
  PROJECTS,
  WORK_SECTION,
  VISIBLE_BY_DEFAULT,
  SHOW_MORE_STEP,
} from '@/constants/projects';
import CaseStudy from './case-study';
import ShowMore from './show-more';

export default function Work() {
  const [visible, setVisible] = useState(VISIBLE_BY_DEFAULT);
  const total = PROJECTS.length;
  const remaining = Math.max(0, total - visible);
  const nextStep = Math.min(SHOW_MORE_STEP, remaining);

  return (
    <>
      <SectionHead
        number={3}
        eyebrow={WORK_SECTION.eyebrow}
        title={WORK_SECTION.title}
        right={WORK_SECTION.right}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 6, md: 8 } }}>
        {PROJECTS.map((project, i) => (
          <CaseStudy
            key={project.id}
            project={project}
            index={i}
            hidden={i >= visible}
          />
        ))}
      </Box>
      <ShowMore
        canShowMore={remaining > 0}
        canShowLess={visible > VISIBLE_BY_DEFAULT}
        nextStep={nextStep}
        hiddenCount={visible - VISIBLE_BY_DEFAULT}
        onShowMore={() => setVisible((v) => Math.min(total, v + SHOW_MORE_STEP))}
        onShowLess={() => setVisible(VISIBLE_BY_DEFAULT)}
      />
    </>
  );
}

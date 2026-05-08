'use client';
import { useState } from 'react';
import { Box } from '@mui/material';
import { SectionHead } from '@/components/shared';
import { PROJECTS, WORK_SECTION, VISIBLE_BY_DEFAULT } from '@/constants/projects';
import CaseStudy from './case-study';
import ShowMore from './show-more';

export default function Work() {
  const [showAll, setShowAll] = useState(false);
  const total = PROJECTS.length;
  const remaining = total - VISIBLE_BY_DEFAULT;

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
            hidden={!showAll && i >= VISIBLE_BY_DEFAULT}
          />
        ))}
      </Box>
      {!showAll && remaining > 0 && (
        <ShowMore
          remaining={remaining}
          total={total}
          onClick={() => setShowAll(true)}
        />
      )}
    </>
  );
}

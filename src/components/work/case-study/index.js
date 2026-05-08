'use client';
import { Box } from '@mui/material';
import { Reveal } from '@/atoms';
import { MetaCard } from '@/components/shared';
import Gallery from '../gallery';
import Header from './header';
import Overview from './overview';
import Features from './features';

function metaItems(meta) {
  return [
    { label: 'Stack', value: meta.stack.join(' · ') },
    { label: 'Role', value: meta.role },
    { label: 'Timeline', value: meta.timeline },
    { label: 'Reach', value: meta.reach },
  ];
}

export default function CaseStudy({ project, index, hidden }) {
  if (hidden) return null;

  return (
    <Reveal>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '1.2fr 1fr' },
          gap: { xs: 3, lg: '24px 44px' },
          gridTemplateAreas: {
            xs: '"head" "gallery" "body"',
            lg: '"gallery head" "gallery body"',
          },
        }}
      >
        <Box sx={{ gridArea: 'gallery', minWidth: 0 }}>
          <Gallery slides={project.slides} alt={project.title} />
        </Box>
        <Box sx={{ gridArea: 'head' }}>
          <Header
            index={index + 1}
            title={project.title}
            category={project.category}
            year={project.year}
            pill={project.pill}
            tag={project.tag}
            actions={project.actions}
          />
        </Box>
        <Box sx={{ gridArea: 'body', display: 'flex', flexDirection: 'column', gap: 3, pt: 1 }}>
          <Overview paragraphs={project.overview} />
          <Features items={project.features} />
          <MetaCard items={metaItems(project.meta)} columns={2} />
        </Box>
      </Box>
    </Reveal>
  );
}

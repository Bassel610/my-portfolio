'use client';
import { Box } from '@mui/material';
import Aside from './Aside';
import Stage from './Stage';
import { useProjectRouter } from '@/hooks/projects';
import { getProjectStyles } from '@/lib/projects';

export default function DesktopShell({ projects }) {
  const projectKeys = projects.map((p) => p.id);
  const { transition, wheelRef, projectContentRef, goTo } = useProjectRouter(
    projectKeys,
    false
  );

  const findProject = (id) => projects.find((p) => p.id === id);
  const current = findProject(transition.currentProject);
  const next = transition.nextProject ? findProject(transition.nextProject) : null;

  const currentStyles = getProjectStyles(
    transition.direction ? transition.direction : null,
    'current'
  );
  const nextStyles = next ? getProjectStyles(transition.direction, 'next') : null;

  return (
    <Box
      ref={wheelRef}
      sx={{
        display: 'flex',
        flexDirection: 'row',
        height: '100vh',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <Aside activeProject={transition.currentProject} onSelect={goTo} />

      <Box
        sx={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          marginLeft: '250px',
          height: '100vh',
        }}
      >
        <Box
          ref={projectContentRef}
          sx={{
            position: 'absolute',
            inset: 0,
            overflowY: 'auto',
            overflowX: 'hidden',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255,255,255,0.35) transparent',
            '&::-webkit-scrollbar': { width: '6px', height: 0 },
            '&::-webkit-scrollbar-track': { background: 'transparent' },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(255,255,255,0.35)',
              borderRadius: '6px',
            },
            ...currentStyles,
          }}
        >
          <Stage {...stripId(current)} />
        </Box>

        {next && (
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              overflow: 'hidden',
              ...nextStyles,
            }}
          >
            <Stage {...stripId(next)} />
          </Box>
        )}
      </Box>
    </Box>
  );
}

function stripId({ id, ...rest }) {
  return rest;
}

'use client';
import { Box } from '@mui/material';
import Aside from './Aside';
import Stage from './Stage';
import { useProjectRouter } from '../hooks';
import { getProjectStyles } from '../helpers';

export default function DesktopShell({ projects }) {
  const projectKeys = projects.map((p) => p.id);
  const { transition, wheelRef, projectContentRef } = useProjectRouter(
    projectKeys,
    false
  );

  const findProject = (id) => projects.find((p) => p.id === id);
  const current = findProject(transition.currentProject);
  const next = transition.nextProject ? findProject(transition.nextProject) : null;

  const currentStyles = getProjectStyles(
    transition.direction ? transition.direction : null
  );
  const nextStyles = next
    ? getProjectStyles(transition.direction)
    : null;

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
      <Box>
        <Aside activeProject={transition.currentProject} />
      </Box>

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
            width: '100%',
            height: '100%',
            overflow: 'auto',
            ...currentStyles,
          }}
        >
          <Stage {...stripId(current)} />
        </Box>

        {next && (
          <Box
            sx={{
              position: 'absolute',
              width: '100%',
              height: '100%',
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

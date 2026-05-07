'use client';
import { useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { PROJECT_NAV } from '@/constants/projects';
import Item from './Item';

export default function Aside({ activeProject, onSelect }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;
    const stop = (e) => e.stopPropagation();
    node.addEventListener('wheel', stop, { passive: true });
    return () => node.removeEventListener('wheel', stop);
  }, []);

  return (
    <Box
      sx={{
        width: { xs: '100%', md: 250 },
        height: { xs: 'auto', md: '100vh' },
        position: { xs: 'relative', md: 'fixed' },
        left: { xs: 'auto', md: 0 },
        top: { xs: 'auto', md: 0 },
        background:
          'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        color: 'white',
        borderRight: { xs: 'none', md: '3px solid #667eea' },
        borderBottom: { xs: '3px solid #667eea', md: 'none' },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          flexShrink: 0,
          mt: { xs: 1, md: 8 },
          mb: 2,
          px: 2,
          pb: 1.5,
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'white',
          borderBottom: '2px solid rgba(255,255,255,0.2)',
          fontSize: { xs: '1.2rem', md: '1.4rem' },
        }}
      >
        My Projects
      </Typography>

      <Box
        ref={scrollRef}
        sx={{
          flex: 1,
          minHeight: 0,
          overflowY: 'auto',
          overflowX: 'hidden',
          px: { xs: 1, md: 2 },
          pb: 2,
          overscrollBehavior: 'contain',
          '&::-webkit-scrollbar': { width: '6px' },
          '&::-webkit-scrollbar-track': {
            background: 'rgba(255,255,255,0.05)',
          },
          '&::-webkit-scrollbar-thumb': {
            background: 'rgba(255,255,255,0.35)',
            borderRadius: '6px',
            '&:hover': { background: 'rgba(255,255,255,0.55)' },
          },
        }}
      >
        {PROJECT_NAV.map((project, index) => (
          <Item
            key={project.id}
            index={index}
            project={project}
            isActive={activeProject === project.id}
            onSelect={onSelect}
          />
        ))}

        <Typography
          variant="caption"
          sx={{
            mt: 1,
            pt: 1.5,
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.7rem',
            textAlign: 'center',
            display: 'block',
            borderTop: '1px solid rgba(255,255,255,0.2)',
          }}
        >
          Scroll or click to navigate
        </Typography>
      </Box>
    </Box>
  );
}

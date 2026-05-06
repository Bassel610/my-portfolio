'use client';
import { Box, Typography } from '@mui/material';
import { PROJECT_NAV } from '@/constants/projects';
import Item from './Item';

export default function Aside({ activeProject }) {
  return (
    <Box
      sx={{
        width: { xs: '100%', md: 250 },
        p: { xs: 1, md: 2 },
        borderRight: { xs: 'none', md: '3px solid' },
        borderBottom: { xs: '3px solid', md: 'none' },
        borderColor: '#667eea',
        height: { xs: 'auto', md: '100vh' },
        maxHeight: { xs: '200px', md: '100vh' },
        position: { xs: 'relative', md: 'fixed' },
        left: { xs: 'auto', md: 0 },
        top: { xs: 'auto', md: 0 },
        background:
          'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        color: 'white',
        overflowY: 'auto',
        '&::-webkit-scrollbar': { width: '8px' },
        '&::-webkit-scrollbar-track': {
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'linear-gradient(45deg, #f093fb, #f5576c)',
          borderRadius: '10px',
          border: '1px solid rgba(255,255,255,0.2)',
          '&:hover': {
            background: 'linear-gradient(45deg, #f5576c, #4facfe)',
          },
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: { xs: 2, md: 3 },
          mt: { xs: 0, md: 8 },
          fontWeight: 'bold',
          textAlign: 'center',
          color: 'white',
          borderBottom: '2px solid rgba(255,255,255,0.2)',
          pb: { xs: 1, md: 2 },
          fontSize: { xs: '1.2rem', md: '1.5rem' },
        }}
      >
        My Projects
      </Typography>

      {PROJECT_NAV.map((project, index) => (
        <Item
          key={project.id}
          index={index}
          project={project}
          isActive={activeProject === project.id}
        />
      ))}

      <Box
        sx={{
          mt: 3,
          pt: 2,
          borderTop: '1px solid rgba(255,255,255,0.2)',
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255,255,255,0.6)',
            fontSize: '0.7rem',
            textAlign: 'center',
            display: 'block',
          }}
        >
          Scroll to navigate projects
        </Typography>
      </Box>
    </Box>
  );
}

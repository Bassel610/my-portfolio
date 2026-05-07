'use client';
import { Box, Typography, ButtonBase } from '@mui/material';

export default function Item({ index, project, isActive, onSelect }) {
  return (
    <ButtonBase
      focusRipple
      onClick={() => onSelect?.(project.id)}
      sx={{
        display: 'block',
        width: '100%',
        textAlign: 'left',
        mb: 2,
        p: 2,
        borderRadius: '12px',
        backgroundColor: isActive
          ? 'rgba(255,255,255,0.2)'
          : 'rgba(255,255,255,0.05)',
        border: isActive
          ? '2px solid rgba(255,255,255,0.4)'
          : '1px solid rgba(255,255,255,0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.15)',
          transform: 'translateX(5px)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: isActive ? '#fff' : 'rgba(255,255,255,0.6)',
            mr: 1,
          }}
        />
        <Typography
          variant="caption"
          sx={{
            color: 'rgba(255,255,255,0.8)',
            fontSize: '0.7rem',
            fontWeight: 600,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </Typography>
      </Box>

      <Typography
        variant="subtitle2"
        sx={{
          fontWeight: 'bold',
          color: 'white',
          fontSize: '0.9rem',
          mb: 0.5,
          lineHeight: 1.2,
        }}
      >
        {project.title}
      </Typography>

      <Typography
        variant="caption"
        display="block"
        sx={{
          color: 'rgba(255,255,255,0.8)',
          fontSize: '0.75rem',
          mb: 0.5,
        }}
      >
        {project.type}
      </Typography>

      <Typography
        variant="caption"
        display="block"
        sx={{
          color: 'rgba(255,255,255,0.6)',
          fontSize: '0.7rem',
          fontStyle: 'italic',
        }}
      >
        {project.tech}
      </Typography>
    </ButtonBase>
  );
}

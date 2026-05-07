'use client';
import { Box, Typography } from '@mui/material';
import { NOW } from '@/constants/now';

export default function NowPill() {
  return (
    <Box
      role="status"
      aria-label={`Currently ${NOW.status}, ${NOW.doing}, ${NOW.location}`}
      sx={{
        position: 'fixed',
        top: 22,
        right: 24,
        zIndex: 1100,
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        gap: 1,
        px: 1.5,
        py: 0.6,
        borderRadius: '999px',
        background: 'rgba(15, 10, 35, 0.55)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.12)',
        color: 'rgba(255,255,255,0.85)',
        fontSize: '0.72rem',
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
        boxShadow: '0 4px 18px rgba(0,0,0,0.25)',
      }}
    >
      <Box
        sx={{
          width: 7,
          height: 7,
          borderRadius: '50%',
          background: '#3DDC84',
          boxShadow: '0 0 0 0 rgba(61, 220, 132, 0.7)',
          animation: 'nowPulse 1.8s ease-out infinite',
          '@keyframes nowPulse': {
            '0%': { boxShadow: '0 0 0 0 rgba(61, 220, 132, 0.55)' },
            '70%': { boxShadow: '0 0 0 8px rgba(61, 220, 132, 0)' },
            '100%': { boxShadow: '0 0 0 0 rgba(61, 220, 132, 0)' },
          },
        }}
      />
      <Typography
        component="span"
        sx={{ fontSize: 'inherit', fontWeight: 500, color: '#e8ffe8' }}
      >
        {NOW.status}
      </Typography>
      <Box component="span" sx={{ opacity: 0.4 }}>
        ·
      </Box>
      <Typography component="span" sx={{ fontSize: 'inherit', opacity: 0.85 }}>
        {NOW.doing}
      </Typography>
      <Box component="span" sx={{ opacity: 0.4 }}>
        ·
      </Box>
      <Typography component="span" sx={{ fontSize: 'inherit', opacity: 0.65 }}>
        {NOW.location}
      </Typography>
    </Box>
  );
}

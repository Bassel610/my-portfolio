'use client';
import { Box, Typography } from '@mui/material';
import { MonoNumber } from '@/atoms';

export default function ServiceTile({ index, title, body, deliverables }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1.75,
        p: { xs: 3, md: '36px 32px' },
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--bg-1)',
        height: '100%',
        transition: 'border-color 0.2s var(--ease-smooth), transform 0.2s var(--ease-smooth)',
        '&:hover': {
          borderColor: 'var(--accent-line)',
          transform: 'translateY(-2px)',
        },
      }}
    >
      <Box sx={{ fontSize: '1rem' }}>
        <MonoNumber value={index} size={1} />
      </Box>
      <Typography
        component="h3"
        sx={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: '1.5rem',
          color: 'var(--fg)',
          letterSpacing: '-0.015em',
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: '0.94rem', color: 'var(--fg-dim)', lineHeight: 1.65 }}>
        {body}
      </Typography>
      <Box
        component="ul"
        sx={{ m: 0, mt: 'auto', p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0.85 }}
      >
        {deliverables.map((d) => (
          <Box
            key={d}
            component="li"
            sx={{
              position: 'relative',
              pl: 2,
              fontSize: '0.86rem',
              color: 'var(--fg)',
              lineHeight: 1.5,
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 4,
                top: '0.6em',
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: 'var(--accent)',
              },
            }}
          >
            {d}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

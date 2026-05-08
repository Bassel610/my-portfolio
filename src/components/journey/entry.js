'use client';
import { Box, Typography } from '@mui/material';
import { Chip } from '@/atoms';

export default function Entry({ year, role, location, body, chips, current }) {
  return (
    <Box
      sx={{
        position: 'relative',
        pl: { xs: 3, md: 4.5 },
        pb: { xs: 4, md: 5 },
        '&::before': {
          content: '""',
          position: 'absolute',
          left: 0,
          top: 6,
          width: 9,
          height: 9,
          borderRadius: '50%',
          background: 'var(--bg)',
          border: '2px solid',
          borderColor: current ? 'var(--accent)' : 'var(--line-strong)',
          boxShadow: current ? '0 0 0 4px var(--accent-soft)' : 'none',
          zIndex: 1,
        },
      }}
    >
      <Typography
        component="div"
        sx={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.78rem',
          letterSpacing: '0.06em',
          color: current ? 'var(--accent)' : 'var(--fg-mute)',
          mb: 0.75,
        }}
      >
        {year} {location && (
          <Box component="span" sx={{ color: 'var(--fg-mute)' }}>
            · {location}
          </Box>
        )}
      </Typography>
      <Typography
        component="h3"
        sx={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: '1.2rem',
          color: 'var(--fg)',
          letterSpacing: '-0.01em',
          mb: 1,
        }}
      >
        {role}
      </Typography>
      <Typography sx={{ fontSize: '0.92rem', color: 'var(--fg-dim)', lineHeight: 1.6, maxWidth: 720 }}>
        {body}
      </Typography>
      {chips?.length > 0 && (
        <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mt: 1.5 }}>
          {chips.map((c) => <Chip key={c}>{c}</Chip>)}
        </Box>
      )}
    </Box>
  );
}

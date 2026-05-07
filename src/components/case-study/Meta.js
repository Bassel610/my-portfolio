'use client';
import { Box, Typography } from '@mui/material';

export default function Meta({ items }) {
  return (
    <Box
      component="dl"
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: 'repeat(2, minmax(0, 1fr))',
          md: 'repeat(4, minmax(0, 1fr))',
        },
        gap: { xs: 1.5, md: 2 },
        mb: { xs: 3, md: 4 },
        py: 2,
        borderTop: '1px solid rgba(255,255,255,0.12)',
        borderBottom: '1px solid rgba(255,255,255,0.12)',
      }}
    >
      {items.map((m) => (
        <Box key={m.label} sx={{ minWidth: 0 }}>
          <Typography
            component="dt"
            sx={{
              fontSize: '0.66rem',
              fontFamily: 'monospace',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.45)',
              mb: 0.4,
            }}
          >
            {m.label}
          </Typography>
          <Typography
            component="dd"
            sx={{
              m: 0,
              fontSize: '0.92rem',
              color: 'rgba(255,255,255,0.92)',
              lineHeight: 1.3,
            }}
          >
            {m.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

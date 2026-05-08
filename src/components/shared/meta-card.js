'use client';
import { Box, Typography } from '@mui/material';

export default function MetaCard({ items, columns = 2 }) {
  return (
    <Box
      component="dl"
      sx={{
        m: 0,
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: `repeat(${columns}, minmax(0, 1fr))` },
        rowGap: 1.25,
        columnGap: 2.5,
        p: 2,
        borderRadius: 'var(--radius)',
        border: '1px solid var(--line)',
        background: 'var(--bg-1)',
      }}
    >
      {items.map((item, i) => (
        <Box
          key={i}
          sx={{
            display: 'grid',
            gridTemplateColumns: 'minmax(72px, max-content) 1fr',
            gap: 1.5,
            alignItems: 'baseline',
            pt: 1,
            borderTop: i >= columns ? '1px solid var(--line)' : 'none',
          }}
        >
          <Typography
            component="dt"
            sx={{
              m: 0,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--fg-mute)',
            }}
          >
            {item.label}
          </Typography>
          <Typography
            component="dd"
            sx={{
              m: 0,
              fontSize: '0.9rem',
              color: 'var(--fg)',
              lineHeight: 1.45,
            }}
          >
            {item.value}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

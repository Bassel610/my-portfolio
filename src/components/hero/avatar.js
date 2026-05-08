'use client';
import { Box } from '@mui/material';
import { ImageWithFallback } from '@/atoms';
import { SITE } from '@/constants/site';

export default function Avatar() {
  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: 96, md: 132 },
        height: { xs: 96, md: 132 },
        borderRadius: '50%',
        overflow: 'hidden',
        border: '1px solid var(--line-strong)',
        boxShadow: '0 0 0 4px var(--bg)',
        '&::after': {
          content: '""',
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          boxShadow: '0 12px 36px rgba(0,0,0,0.35)',
          pointerEvents: 'none',
        },
      }}
    >
      <ImageWithFallback
        src="/images/avatar.jpg"
        alt={`${SITE.name} portrait`}
        sx={{ objectFit: 'cover', objectPosition: 'center top' }}
      />
    </Box>
  );
}

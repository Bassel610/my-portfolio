'use client';
import { Typography } from '@mui/material';
import { SITE } from '@/constants/site';

export default function Bio() {
  return (
    <Typography
      paragraph
      sx={{
        fontSize: '1.1rem',
        lineHeight: 1.8,
        mb: 4,
        textShadow: '0 1px 3px rgba(0,0,0,0.4)',
      }}
    >
      {SITE.bio}
    </Typography>
  );
}

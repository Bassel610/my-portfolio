'use client';
import { Typography } from '@mui/material';
import { GradientText } from '@/atoms';
import { SITE } from '@/constants/site';

export default function Name() {
  return (
    <Typography
      variant="h2"
      sx={{
        fontWeight: 700,
        mb: { xs: 2, md: 3 },
        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        textShadow: '0 2px 10px rgba(0,0,0,0.7)',
      }}
    >
      <GradientText variant="primary" animate={true}>
        {SITE.name}
      </GradientText>
    </Typography>
  );
}

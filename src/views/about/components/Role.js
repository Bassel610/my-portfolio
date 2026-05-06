'use client';
import { Typography } from '@mui/material';
import GradientText from '@/component/ui/GradientText';
import { SITE } from '@/constants/site';

export default function Role() {
  return (
    <Typography
      variant="h5"
      sx={{
        fontWeight: 400,
        mb: { xs: 3, md: 4 },
        textShadow: '0 1px 5px rgba(0,0,0,0.5)',
        fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
      }}
    >
      <GradientText mb="5px" variant="accent" animate={true}>
        {SITE.role}
      </GradientText>
    </Typography>
  );
}

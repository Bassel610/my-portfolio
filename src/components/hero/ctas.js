'use client';
import { Box } from '@mui/material';
import { Button } from '@/components/shared';
import { HERO } from '@/constants/hero';

export default function CTAs() {
  return (
    <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mt: { xs: 3.5, md: 5 } }}>
      {HERO.ctas.map((cta) => (
        <Button key={cta.href} variant={cta.variant} href={cta.href}>
          {cta.label}
        </Button>
      ))}
    </Box>
  );
}

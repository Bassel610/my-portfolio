'use client';
import { Box } from '@mui/material';
import { ImageWithFallback, BrowserFrame } from '@/atoms';

export default function Slide({ src, alt, active, url }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        inset: 0,
        opacity: active ? 1 : 0,
        transform: active ? 'none' : 'scale(1.015)',
        transition:
          'opacity 0.55s var(--ease-smooth), transform 0.9s var(--ease-smooth)',
        pointerEvents: active ? 'auto' : 'none',
      }}
    >
      <BrowserFrame url={url}>
        <ImageWithFallback
          src={src}
          alt={alt}
          sx={{ objectFit: 'cover', objectPosition: 'top center' }}
        />
      </BrowserFrame>
    </Box>
  );
}

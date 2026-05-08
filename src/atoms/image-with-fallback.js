'use client';
import { useState } from 'react';
import { Box } from '@mui/material';

export default function ImageWithFallback({
  src,
  alt,
  fallbackSrc = '/images/project-placeholder.png',
  sx,
  ...rest
}) {
  const [current, setCurrent] = useState(src);

  return (
    <Box
      component="img"
      src={current}
      alt={alt}
      loading="lazy"
      decoding="async"
      draggable={false}
      onError={() => current !== fallbackSrc && setCurrent(fallbackSrc)}
      sx={{
        display: 'block',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        userSelect: 'none',
        ...sx,
      }}
      {...rest}
    />
  );
}

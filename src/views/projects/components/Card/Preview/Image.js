'use client';
import { Box } from '@mui/material';

export default function Image({ src, alt }) {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={(e) => {
        e.target.src = '/images/project-placeholder.png';
      }}
      sx={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '16px',
        border: '2px solid rgba(102, 126, 234, 0.3)',
        boxShadow: '0 4px 20px rgba(102, 126, 234, 0.2)',
      }}
    />
  );
}

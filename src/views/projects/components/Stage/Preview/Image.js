'use client';
import ImageWithFallback from '@/component/ui/ImageWithFallback';

export default function Image({ src, alt }) {
  return (
    <ImageWithFallback
      src={src}
      alt={alt}
      fallbackSrc="/images/project-placeholder.png"
      sx={{
        '&:hover': {
          transform: 'translateY(-4px) scale(1.02)',
          boxShadow: '0 15px 60px rgba(102, 126, 234, 0.35)',
        },
      }}
    />
  );
}

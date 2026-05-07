'use client';
import { Box } from '@mui/material';

export default function Thumbs({ images, activeIndex, onSelect, compact }) {
  const height = compact ? 44 : 60;
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        overflowX: 'auto',
        py: 0.5,
        '&::-webkit-scrollbar': { height: 4 },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(102,126,234,0.5)',
          borderRadius: 2,
        },
      }}
    >
      {images.map((src, i) => {
        const active = i === activeIndex;
        return (
          <Box
            key={`${src}-${i}`}
            component="img"
            src={src}
            alt=""
            loading="lazy"
            draggable={false}
            onClick={() => onSelect(i)}
            sx={{
              width: height * 1.6,
              height,
              objectFit: 'cover',
              borderRadius: '8px',
              border: active ? '2px solid #667eea' : '2px solid transparent',
              cursor: 'pointer',
              opacity: active ? 1 : 0.6,
              transition: 'opacity 0.2s ease, border-color 0.2s ease',
              flexShrink: 0,
              userSelect: 'none',
              WebkitUserDrag: 'none',
              '&:hover': { opacity: 1, borderColor: '#764ba2' },
            }}
          />
        );
      })}
    </Box>
  );
}

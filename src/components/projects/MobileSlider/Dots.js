'use client';
import { Box } from '@mui/material';

export default function Dots({ count, currentIndex, onSelect }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 1,
        zIndex: 10,
      }}
    >
      {Array.from({ length: count }).map((_, index) => {
        const active = currentIndex === index;
        return (
          <Box
            key={index}
            onClick={() => onSelect(index)}
            sx={{
              width: active ? 24 : 8,
              height: 8,
              borderRadius: '4px',
              background: active
                ? 'linear-gradient(45deg, #667eea, #764ba2)'
                : 'rgba(255, 255, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                background: active
                  ? 'linear-gradient(45deg, #667eea, #764ba2)'
                  : 'rgba(255, 255, 255, 0.5)',
              },
            }}
          />
        );
      })}
    </Box>
  );
}

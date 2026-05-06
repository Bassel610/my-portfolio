'use client';
import { Typography } from '@mui/material';

export default function Description({ children }) {
  return (
    <Typography
      sx={{
        fontSize: '0.9rem',
        lineHeight: 1.6,
        color: 'rgba(255, 255, 255, 0.85)',
        textAlign: 'left',
        mb: 2.5,
        maxHeight: '120px',
        overflow: 'auto',
        '&::-webkit-scrollbar': { width: '4px' },
        '&::-webkit-scrollbar-track': {
          background: 'rgba(102, 126, 234, 0.1)',
          borderRadius: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'rgba(102, 126, 234, 0.3)',
          borderRadius: '4px',
        },
      }}
    >
      {children}
    </Typography>
  );
}

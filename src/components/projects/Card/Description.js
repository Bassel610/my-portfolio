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
      }}
    >
      {children}
    </Typography>
  );
}

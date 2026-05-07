'use client';
import { Box } from '@mui/material';

export default function Description({ children }) {
  return (
    <Box
      sx={{
        fontSize: '1rem',
        lineHeight: 1.7,
        color: '#2c3e50',
        textAlign: 'left',
        fontWeight: 400,
        letterSpacing: '0.2px',
      }}
    >
      {children}
    </Box>
  );
}

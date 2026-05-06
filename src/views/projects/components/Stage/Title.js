'use client';
import { Box } from '@mui/material';

export default function Title({ children }) {
  return (
    <Box
      sx={{
        fontSize: '1.8rem',
        fontWeight: 700,
        lineHeight: 1.2,
        mb: 2,
        background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {children}
    </Box>
  );
}

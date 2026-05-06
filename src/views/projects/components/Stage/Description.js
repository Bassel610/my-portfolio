'use client';
import { Box } from '@mui/material';

export default function Description({ children }) {
  return (
    <Box
      sx={{
        fontSize: '1.1rem',
        lineHeight: 1.8,
        color: '#2c3e50',
        textAlign: 'left',
        fontWeight: 400,
        letterSpacing: '0.3px',
        maxHeight: '280px',
        overflowY: 'auto',
        pr: 1,
        '&::-webkit-scrollbar': { width: '8px' },
        '&::-webkit-scrollbar-track': {
          background: 'rgba(102, 126, 234, 0.1)',
          borderRadius: '12px',
          border: '1px solid rgba(102, 126, 234, 0.2)',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          borderRadius: '12px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          '&:hover': {
            background: 'linear-gradient(45deg, #764ba2, #f093fb)',
          },
        },
      }}
    >
      {children}
    </Box>
  );
}

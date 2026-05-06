'use client';
import { Box } from '@mui/material';

export default function Cta({ href }) {
  return (
    <Box sx={{ mt: 2 }}>
      <Box
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          px: 3,
          py: 1.5,
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '30px',
          fontSize: '0.9rem',
          fontWeight: 600,
          transition: 'all 0.4s ease',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
          '&:hover': {
            background: 'linear-gradient(45deg, #764ba2, #f093fb)',
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 25px rgba(240, 147, 251, 0.4)',
          },
        }}
      >
        View Live Project →
      </Box>
    </Box>
  );
}

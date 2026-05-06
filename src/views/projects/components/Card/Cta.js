'use client';
import { Box } from '@mui/material';

export default function Cta({ href }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        component="a"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '250px',
          px: 3,
          py: 1.3,
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '30px',
          fontSize: '0.95rem',
          fontWeight: 600,
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
          touchAction: 'manipulation',
          '&:active': {
            transform: 'scale(0.98)',
            boxShadow: '0 2px 10px rgba(102, 126, 234, 0.3)',
          },
        }}
      >
        View Live Project →
      </Box>
    </Box>
  );
}

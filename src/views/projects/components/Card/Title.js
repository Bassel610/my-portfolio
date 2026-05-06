'use client';
import { Box, Typography } from '@mui/material';

export default function Title({ children }) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 2.5,
        px: 2,
        background:
          'linear-gradient(135deg, rgba(102, 126, 234, 0.15), rgba(118, 75, 162, 0.15))',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          fontSize: { xs: '1.2rem', sm: '1.4rem' },
          background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1.3,
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}

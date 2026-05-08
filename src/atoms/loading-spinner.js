'use client';
import { Box, CircularProgress } from '@mui/material';

export default function LoadingSpinner({ size = 24 }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        color: 'var(--accent)',
      }}
    >
      <CircularProgress size={size} thickness={3} color="inherit" />
    </Box>
  );
}

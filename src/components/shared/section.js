'use client';
import { Box } from '@mui/material';

export default function Section({ id, plate = false, children, py = true }) {
  return (
    <Box
      component="section"
      id={id}
      sx={{
        position: 'relative',
        py: py ? { xs: '90px', md: '140px' } : 0,
        background: plate ? 'var(--plate)' : 'transparent',
        borderTop: plate ? '1px solid var(--line)' : 'none',
        borderBottom: plate ? '1px solid var(--line)' : 'none',
      }}
    >
      <Box
        sx={{
          maxWidth: 1280,
          mx: 'auto',
          px: 'clamp(24px, 5vw, 56px)',
          position: 'relative',
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

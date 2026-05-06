'use client';
import { Box } from '@mui/material';
import MobileSlider from './MobileSlider';

export default function MobileShell({ projects }) {
  return (
    <Box sx={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <MobileSlider projects={projects} />
    </Box>
  );
}

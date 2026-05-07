'use client';
import { Box } from '@mui/material';
import Gallery from '../../Gallery';

export default function Preview({ images, title }) {
  return (
    <Box sx={{ p: 1.5, height: 220 }}>
      <Gallery images={images} alt={title} compact />
    </Box>
  );
}

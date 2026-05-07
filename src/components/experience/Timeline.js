'use client';
import { Box, Divider } from '@mui/material';
import { JOBS } from '@/constants/experience';
import Card from './Card';

export default function Timeline() {
  return (
    <Box sx={{ position: 'relative', pl: 3, top: '-42px' }}>
      <Divider
        orientation="vertical"
        sx={{
          position: 'absolute',
          left: '20px',
          top: 0,
          height: '100%',
          borderRightWidth: 2,
        }}
      />
      {JOBS.map((job, index) => (
        <Card key={index} job={job} />
      ))}
    </Box>
  );
}

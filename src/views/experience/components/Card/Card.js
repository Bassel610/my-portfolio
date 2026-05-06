'use client';
import { Box, Paper } from '@mui/material';
import Header from './Header';
import Meta from './Meta';
import Bullets from './Bullets';

export default function Card({ job }) {
  return (
    <Box sx={{ position: 'relative', '&:last-child': { pb: 0 } }}>
      <Box
        sx={{
          position: 'absolute',
          left: '-13px',
          top: '8px',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          bgcolor: '#7c4970',
          border: '4px solid',
          borderColor: 'background.paper',
          zIndex: 2,
          p: '8px',
        }}
      />

      <Paper
        elevation={2}
        sx={{
          p: 3,
          mb: 3,
          borderRadius: 2,
          borderLeft: '3px solid',
          borderColor: '#ab5296cf',
          backgroundColor: '#ab5296cf',
        }}
      >
        <Header
          title={job.title}
          company={job.company}
          isCurrent={job.isCurrent}
        />
        <Meta period={job.period} location={job.location} />
        <Bullets items={job.bullets} />
      </Paper>
    </Box>
  );
}

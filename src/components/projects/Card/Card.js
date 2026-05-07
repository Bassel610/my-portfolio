'use client';
import { Box } from '@mui/material';
import Title from './Title';
import Description from './Description';
import Cta from './Cta';
import Preview from './Preview';
import Tech from '../Tech';

export default function Card({
  name,
  description,
  tech,
  images,
  liveUrl,
  repoUrl,
}) {
  return (
    <Box
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '100vw',
        overflow: 'auto',
        pt: 8,
        pb: 7,
        px: 2,
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          background:
            'linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))',
          borderRadius: '20px',
          overflow: 'hidden',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          maxWidth: '500px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <Title>{name}</Title>
        <Preview images={images} title={name} />
        <Box sx={{ p: 2.5, pt: 1.5 }}>
          <Tech items={tech} dense variant="light" />
          <Description>{description}</Description>
          <Cta liveUrl={liveUrl} repoUrl={repoUrl} />
        </Box>
      </Box>
    </Box>
  );
}

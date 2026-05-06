'use client';
import { Box } from '@mui/material';
import Title from './Title';
import Description from './Description';
import Cta from './Cta';
import Preview from './Preview';

export default function Card({ title, description, img, isIframe = false }) {
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
        py: 3,
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
        <Title>{title}</Title>
        <Preview src={img} title={title} isIframe={isIframe} />
        <Box sx={{ p: 2.5, pt: 1.5 }}>
          <Description>{description}</Description>
          <Cta href={img} />
        </Box>
      </Box>
    </Box>
  );
}

'use client';
import { Box } from '@mui/material';
import Title from './Title';
import Description from './Description';
import Cta from './Cta';
import Preview from './Preview';
import Tech from '../Tech';

export default function Stage({
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
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        px: { md: 4, lg: 6 },
        py: 4,
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { md: 'minmax(0, 5fr) minmax(0, 7fr)' },
          gap: { md: 3, lg: 4 },
          alignItems: 'stretch',
          width: '100%',
          maxWidth: 1280,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#1a237e',
            wordBreak: 'break-word',
            minWidth: 0,
            p: { md: 3, lg: 3.5 },
            borderRadius: '20px',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.92), rgba(255,255,255,0.82))',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255,255,255,0.4)',
            boxShadow: '0 8px 32px rgba(20,15,55,0.25)',
          }}
        >
          <Title>{name}</Title>
          <Tech items={tech} />
          <Description>{description}</Description>
          <Cta liveUrl={liveUrl} repoUrl={repoUrl} />
        </Box>

        <Box
          sx={{
            position: 'relative',
            minWidth: 0,
            minHeight: { md: 380, lg: 460 },
            display: 'flex',
            alignItems: 'stretch',
          }}
        >
          <Preview images={images} title={name} />
        </Box>
      </Box>
    </Box>
  );
}

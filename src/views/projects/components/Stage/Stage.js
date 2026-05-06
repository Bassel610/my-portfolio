'use client';
import { Box } from '@mui/material';
import Title from './Title';
import Description from './Description';
import Cta from './Cta';
import Preview from './Preview';

export default function Stage({ title, description, img, isIframe = false }) {
  return (
    <Box
      sx={{
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        py: 0,
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '45% 55%',
          columnGap: 4,
          alignItems: 'center',
          maxWidth: 1200,
          width: '100%',
          p: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#1a237e',
            wordBreak: 'break-word',
            pr: 3,
            minWidth: 0,
          }}
        >
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Cta href={img} />
        </Box>

        <Box
          sx={{
            position: 'relative',
            height: 400,
            overflow: 'hidden',
            borderRadius: '16px',
            minWidth: 0,
          }}
        >
          <Preview src={img} title={title} isIframe={isIframe} />
        </Box>
      </Box>
    </Box>
  );
}

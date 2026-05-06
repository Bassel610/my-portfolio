'use client';
import { Box, Stack } from '@mui/material';
import Title from './Title';
import Description from './Description';
import Cta from './Cta';
import Preview from './Preview';

export default function Stage({ title, description, img, isIframe = false }) {
  return (
    <>
      <Box>{/* Desktop only - no mobile title here anymore */}</Box>
      <Stack
        display={{ xs: 'none', md: 'flex' }}
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        flexDirection="row"
        height="475px"
        sx={{ py: 0 }}
      >
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            maxWidth: 1200,
            p: 2,
            textAlign: 'center',
            width: '100%',
          }}
        >
          <Stack
            width="55%"
            sx={{ height: '400px', position: 'relative', order: 1 }}
          >
            <Preview src={img} title={title} isIframe={isIframe} />
          </Stack>
          <Stack
            width="45%"
            sx={{
              fontFamily: 'inherit',
              color: '#1a237e',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
              pl: 3,
              justifyContent: 'center',
            }}
          >
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Cta href={img} />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

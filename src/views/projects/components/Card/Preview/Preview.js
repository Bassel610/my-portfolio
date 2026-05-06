'use client';
import { Box } from '@mui/material';
import Iframe from './Iframe';
import Image from './Image';

export default function Preview({ src, title, isIframe }) {
  return (
    <Box sx={{ p: 2, display: 'flex', justifyContent: 'center' }}>
      <Box sx={{ width: '100%', height: '250px', position: 'relative' }}>
        {isIframe ? (
          <Iframe src={src} title={title} />
        ) : (
          <Image src={src} alt={title} />
        )}
      </Box>
    </Box>
  );
}

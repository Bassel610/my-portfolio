'use client';
import { Box, Typography } from '@mui/material';

const LABEL_SX = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.7rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--fg-mute)',
  mb: 1.25,
};

export default function Features({ items }) {
  return (
    <Box>
      <Typography component="h5" sx={LABEL_SX}>
        Key features
      </Typography>
      <Box component="ul" sx={{ m: 0, p: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 1 }}>
        {items.map((item) => (
          <Box
            key={item}
            component="li"
            sx={{
              position: 'relative',
              pl: 2.25,
              fontSize: '0.92rem',
              color: 'var(--fg-dim)',
              lineHeight: 1.6,
              '&::before': {
                content: '""',
                position: 'absolute',
                left: 4,
                top: '0.65em',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: 'var(--accent)',
              },
            }}
          >
            {item}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

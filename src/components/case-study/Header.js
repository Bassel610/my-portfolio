'use client';
import { Box, Typography } from '@mui/material';
import { OpenInNew } from '@mui/icons-material';

export default function Header({ eyebrow, title, subtitle, liveUrl }) {
  return (
    <Box sx={{ mb: { xs: 3, md: 4 } }}>
      <Typography
        component="div"
        sx={{
          fontSize: '0.74rem',
          fontFamily: 'monospace',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.55)',
          mb: 1.5,
        }}
      >
        {eyebrow}
      </Typography>

      <Typography
        component="h2"
        sx={{
          fontSize: { xs: '1.85rem', md: '2.6rem' },
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: '#fff',
          mb: 1.5,
        }}
      >
        {title}
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: '0.98rem', md: '1.1rem' },
          color: 'rgba(255,255,255,0.78)',
          maxWidth: 680,
          lineHeight: 1.55,
          mb: 2,
        }}
      >
        {subtitle}
      </Typography>

      {liveUrl && (
        <Box
          component="a"
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 0.75,
            px: 2,
            py: 0.85,
            fontSize: '0.85rem',
            fontWeight: 500,
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '999px',
            border: '1px solid rgba(255,255,255,0.25)',
            background: 'rgba(255,255,255,0.06)',
            transition: 'all 0.2s ease',
            '&:hover': {
              background: 'rgba(255,255,255,0.12)',
              borderColor: 'rgba(255,255,255,0.45)',
              transform: 'translateY(-1px)',
            },
          }}
        >
          <OpenInNew fontSize="small" sx={{ fontSize: 16 }} />
          See it live
        </Box>
      )}
    </Box>
  );
}

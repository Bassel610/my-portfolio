'use client';
import { Box } from '@mui/material';
import { OpenInNew, GitHub } from '@mui/icons-material';

const baseSx = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 0.5,
  flex: 1,
  px: 2,
  py: 1.1,
  textDecoration: 'none',
  borderRadius: '30px',
  fontSize: '0.9rem',
  fontWeight: 600,
  touchAction: 'manipulation',
  transition: 'all 0.25s ease',
};

export default function Cta({ liveUrl, repoUrl }) {
  return (
    <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
      {liveUrl && (
        <Box
          component="a"
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          sx={{
            ...baseSx,
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            color: 'white',
            boxShadow: '0 4px 15px rgba(102,126,234,0.4)',
            '&:active': { transform: 'scale(0.98)' },
          }}
        >
          <OpenInNew fontSize="small" /> Live
        </Box>
      )}
      {repoUrl && (
        <Box
          component="a"
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          sx={{
            ...baseSx,
            background: 'transparent',
            color: '#1a237e',
            border: '2px solid rgba(102,126,234,0.5)',
            '&:active': { transform: 'scale(0.98)' },
          }}
        >
          <GitHub fontSize="small" /> Source
        </Box>
      )}
    </Box>
  );
}

'use client';
import { Box } from '@mui/material';
import { OpenInNew, GitHub } from '@mui/icons-material';

const baseSx = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 0.75,
  px: 2.5,
  py: 1.2,
  textDecoration: 'none',
  borderRadius: '30px',
  fontSize: '0.9rem',
  fontWeight: 600,
  transition: 'all 0.3s ease',
};

export default function Cta({ liveUrl, repoUrl }) {
  return (
    <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
      {liveUrl && (
        <Box
          component="a"
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            ...baseSx,
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            color: 'white',
            boxShadow: '0 4px 15px rgba(102,126,234,0.3)',
            '&:hover': {
              background: 'linear-gradient(45deg, #764ba2, #f093fb)',
              transform: 'translateY(-3px)',
              boxShadow: '0 8px 25px rgba(240,147,251,0.4)',
            },
          }}
        >
          <OpenInNew fontSize="small" /> Live Demo
        </Box>
      )}
      {repoUrl && (
        <Box
          component="a"
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            ...baseSx,
            background: 'transparent',
            color: '#1a237e',
            border: '2px solid rgba(102,126,234,0.5)',
            '&:hover': {
              background: 'rgba(102,126,234,0.08)',
              borderColor: '#764ba2',
              transform: 'translateY(-3px)',
            },
          }}
        >
          <GitHub fontSize="small" /> Source
        </Box>
      )}
    </Box>
  );
}

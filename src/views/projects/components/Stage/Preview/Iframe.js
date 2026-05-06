'use client';
import { useState } from 'react';
import { Box } from '@mui/material';
import LoadingSpinner from '@/component/ui/LoadingSpinner';

export default function Iframe({ src, title }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <Box sx={{ position: 'relative', width: '100%', height: '100%' }}>
      {loading && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.9)',
            borderRadius: '16px',
            zIndex: 2,
          }}
        >
          <LoadingSpinner message="Loading project..." size={50} />
        </Box>
      )}

      {error ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 50%, rgba(240, 147, 251, 0.1) 100%)',
            border: '3px solid transparent',
            borderRadius: '16px',
            backgroundImage:
              'linear-gradient(white, white), linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
            backgroundOrigin: 'border-box',
            backgroundClip: 'content-box, border-box',
            color: '#667eea',
          }}
        >
          <Box sx={{ fontSize: '3rem', mb: 2 }}>🌐</Box>
          <Box sx={{ textAlign: 'center', px: 2 }}>
            <Box sx={{ fontWeight: 'bold', mb: 1 }}>Unable to load project</Box>
            <Box sx={{ fontSize: '0.9rem', opacity: 0.8 }}>
              This project might be temporarily unavailable
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          component="iframe"
          src={src}
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          sx={{
            width: '100%',
            height: '100%',
            border: '3px solid transparent',
            borderRadius: '16px',
            background:
              'linear-gradient(white, white) padding-box, linear-gradient(45deg, #667eea, #764ba2, #f093fb) border-box',
            boxShadow: '0 10px 40px rgba(102, 126, 234, 0.2)',
            transition: 'all 0.4s ease',
            opacity: loading ? 0 : 1,
            '&:hover': {
              boxShadow: '0 15px 60px rgba(102, 126, 234, 0.35)',
              transform: 'translateY(-4px) scale(1.02)',
            },
          }}
          title={title}
          loading="lazy"
        />
      )}
    </Box>
  );
}

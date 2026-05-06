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
          <LoadingSpinner message="Loading..." size={40} />
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
            border: '2px solid rgba(102, 126, 234, 0.3)',
            borderRadius: '16px',
            color: '#667eea',
          }}
        >
          <Box sx={{ fontSize: '2.5rem', mb: 1 }}>🌐</Box>
          <Box sx={{ textAlign: 'center', px: 2, fontSize: '0.9rem' }}>
            <Box sx={{ fontWeight: 'bold', mb: 0.5 }}>Unable to load</Box>
            <Box sx={{ opacity: 0.7 }}>Project unavailable</Box>
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
            border: '2px solid rgba(102, 126, 234, 0.3)',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(102, 126, 234, 0.2)',
            opacity: loading ? 0 : 1,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
          }}
          title={title}
          loading="lazy"
        />
      )}
    </Box>
  );
}

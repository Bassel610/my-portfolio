'use client';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

export default function Fallback({ error, onReset, onReload }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background:
            'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          color: 'white',
          textAlign: 'center',
          p: 4,
        }}
      >
        <Typography variant="h3" sx={{ mb: 2, fontWeight: 'bold' }}>
          🚫 Oops! Something went wrong
        </Typography>
        <Typography variant="h6" sx={{ mb: 3, opacity: 0.9 }}>
          Don&apos;t worry, this happens sometimes. Let&apos;s get you back on
          track!
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={onReset}
            sx={{
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '25px',
              px: 3,
              py: 1.5,
              '&:hover': {
                background: 'rgba(255,255,255,0.3)',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
              },
            }}
          >
            Try Again
          </Button>

          <Button
            variant="outlined"
            onClick={onReload}
            sx={{
              color: 'white',
              borderColor: 'rgba(255,255,255,0.5)',
              borderRadius: '25px',
              px: 3,
              py: 1.5,
              '&:hover': {
                borderColor: 'white',
                background: 'rgba(255,255,255,0.1)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            Reload Page
          </Button>
        </Box>

        {process.env.NODE_ENV === 'development' && error && (
          <Box
            sx={{
              mt: 4,
              p: 2,
              background: 'rgba(0,0,0,0.3)',
              borderRadius: '12px',
              maxWidth: '600px',
              maxHeight: '200px',
              overflow: 'auto',
            }}
          >
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.8)' }}>
              Development Error Details:
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontFamily: 'monospace',
                fontSize: '0.8rem',
                color: '#ffcccb',
                mt: 1,
              }}
            >
              {error.toString()}
            </Typography>
          </Box>
        )}
      </Box>
    </motion.div>
  );
}

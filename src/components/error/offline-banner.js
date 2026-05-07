'use client';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import WifiOffIcon from '@mui/icons-material/WifiOff';

export default function OfflineBanner() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    if (typeof navigator === 'undefined') return;
    setIsOffline(!navigator.onLine);
    const goOnline = () => setIsOffline(false);
    const goOffline = () => setIsOffline(true);
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  if (!isOffline) return null;

  return (
    <Box
      role="status"
      aria-live="polite"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 2000,
        py: 1,
        px: 2,
        background: 'linear-gradient(45deg, #f5576c, #f093fb)',
        color: 'white',
        textAlign: 'center',
        fontSize: '0.85rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        boxShadow: '0 2px 12px rgba(0,0,0,0.25)',
      }}
    >
      <WifiOffIcon fontSize="small" />
      You&apos;re offline — some features may not work until the connection
      returns.
    </Box>
  );
}

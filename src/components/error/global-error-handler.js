'use client';
import { useEffect, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const HIDE_AFTER_MS = 6000;

export default function GlobalErrorHandler() {
  const [toast, setToast] = useState(null);

  useEffect(() => {
    const onError = (event) => {
      const message = event?.error?.message || event?.message || 'Unknown error';
      const stack = event?.error?.stack || '';
      console.error('[window.onerror]', message, stack);
      setToast({ kind: 'stack', message });
    };

    const onRejection = (event) => {
      const reason = event?.reason;
      const message =
        reason?.message ||
        (typeof reason === 'string' ? reason : JSON.stringify(reason));
      const stack = reason?.stack || '';
      console.error('[unhandledrejection]', message, stack);
      const isNetwork =
        /NetworkError|Failed to fetch|TypeError: fetch|ERR_NETWORK/i.test(
          message
        );
      setToast({ kind: isNetwork ? 'network' : 'stack', message });
    };

    window.addEventListener('error', onError);
    window.addEventListener('unhandledrejection', onRejection);
    return () => {
      window.removeEventListener('error', onError);
      window.removeEventListener('unhandledrejection', onRejection);
    };
  }, []);

  return (
    <Snackbar
      open={!!toast}
      autoHideDuration={HIDE_AFTER_MS}
      onClose={() => setToast(null)}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        severity={toast?.kind === 'network' ? 'warning' : 'error'}
        onClose={() => setToast(null)}
        variant="filled"
        sx={{ maxWidth: 480 }}
      >
        {toast?.kind === 'network'
          ? 'Network problem — check your connection.'
          : `Something failed: ${toast?.message ?? ''}`}
      </Alert>
    </Snackbar>
  );
}

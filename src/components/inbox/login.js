'use client';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Lock } from 'lucide-react';
import { Button } from '@/components/shared';

export default function InboxLogin({ onUnlock }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!onUnlock(value)) {
      setError(true);
      setValue('');
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
      }}
    >
      <Box
        component="form"
        onSubmit={onSubmit}
        sx={{
          width: '100%',
          maxWidth: 400,
          p: 4,
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-1)',
          display: 'flex',
          flexDirection: 'column',
          gap: 2.25,
        }}
      >
        <Box
          sx={{
            width: 44,
            height: 44,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'var(--radius)',
            background: 'var(--accent-soft)',
            border: '1px solid var(--accent-line)',
            color: 'var(--accent)',
          }}
        >
          <Lock size={18} strokeWidth={1.6} />
        </Box>
        <Box>
          <Typography
            component="h1"
            sx={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '1.55rem',
              color: 'var(--fg)',
              letterSpacing: '-0.015em',
              mb: 0.5,
            }}
          >
            Inbox
          </Typography>
          <Typography sx={{ fontSize: '0.88rem', color: 'var(--fg-dim)', lineHeight: 1.55 }}>
            Private. Enter the passcode to read messages submitted through the
            contact form.
          </Typography>
        </Box>
        <Box
          component="input"
          type="password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          autoFocus
          placeholder="Passcode"
          suppressHydrationWarning
          sx={{
            width: '100%',
            background: 'var(--bg)',
            color: 'var(--fg)',
            border: '1px solid',
            borderColor: error ? 'var(--accent-line)' : 'var(--line)',
            borderRadius: 'var(--radius)',
            padding: '12px 14px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.92rem',
            outline: 'none',
            '&:focus': { borderColor: 'var(--accent-line)' },
          }}
        />
        {error && (
          <Typography sx={{ fontSize: '0.8rem', color: 'var(--accent)' }}>
            Wrong passcode.
          </Typography>
        )}
        <Button variant="solid" type="submit" arrow={false}>
          Unlock
        </Button>
      </Box>
    </Box>
  );
}

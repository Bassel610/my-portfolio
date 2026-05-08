'use client';
import { Box, Typography } from '@mui/material';
import { LogOut } from 'lucide-react';
import { Button } from '@/components/shared';
import { useInbox } from '@/hooks/inbox';
import InboxLogin from './login';
import Message from './message';

export default function Inbox() {
  const { unlocked, messages, tryUnlock, lock, remove, clear } = useInbox();

  if (!unlocked) {
    return <InboxLogin onUnlock={tryUnlock} />;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 2,
          flexWrap: 'wrap',
          pb: 2.5,
          borderBottom: '1px solid var(--line)',
        }}
      >
        <Box>
          <Typography
            component="h1"
            sx={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 'clamp(28px, 4vw, 40px)',
              letterSpacing: '-0.02em',
              color: 'var(--fg)',
            }}
          >
            Inbox
          </Typography>
          <Typography sx={{ fontSize: '0.88rem', color: 'var(--fg-dim)', mt: 0.5 }}>
            {messages.length} {messages.length === 1 ? 'message' : 'messages'} ·
            stored locally on this browser
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1.25, flexWrap: 'wrap' }}>
          {messages.length > 0 && (
            <Button variant="outline" onClick={clear} arrow={false} size="sm">
              Clear all
            </Button>
          )}
          <Box
            component="button"
            type="button"
            onClick={lock}
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.85,
              px: 1.5,
              py: 0.7,
              borderRadius: 'var(--radius-pill)',
              color: 'var(--fg-dim)',
              border: '1px solid var(--line)',
              fontSize: '0.82rem',
              transition: 'all 0.2s var(--ease-smooth)',
              '&:hover': { color: 'var(--fg)', borderColor: 'var(--line-strong)' },
            }}
          >
            <LogOut size={14} strokeWidth={1.6} />
            Lock
          </Box>
        </Box>
      </Box>

      {messages.length === 0 ? (
        <Box
          sx={{
            p: 5,
            border: '1px dashed var(--line)',
            borderRadius: 'var(--radius)',
            textAlign: 'center',
            color: 'var(--fg-dim)',
            fontSize: '0.92rem',
          }}
        >
          No messages yet.
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {messages.map((m) => (
            <Message key={m.id} message={m} onDelete={remove} />
          ))}
        </Box>
      )}
    </Box>
  );
}

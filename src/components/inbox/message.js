'use client';
import { Box, Typography } from '@mui/material';
import { Trash2 } from 'lucide-react';

function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.valueOf())) return iso;
  return d.toLocaleString();
}

export default function Message({ message, onDelete }) {
  return (
    <Box
      sx={{
        p: { xs: 2, md: 2.5 },
        border: '1px solid var(--line)',
        borderRadius: 'var(--radius)',
        background: 'var(--bg-1)',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 1,
          flexWrap: 'wrap',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, flexWrap: 'wrap' }}>
          <Typography
            sx={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: '1rem',
              color: 'var(--fg)',
              letterSpacing: '-0.01em',
            }}
          >
            {message.name || 'Anonymous'}
          </Typography>
          {message.company && (
            <Typography
              sx={{
                fontSize: '0.82rem',
                color: 'var(--fg-dim)',
              }}
            >
              · {message.company}
            </Typography>
          )}
        </Box>
        <Box
          component="button"
          type="button"
          onClick={() => onDelete(message.id)}
          aria-label="Delete message"
          sx={{
            width: 30,
            height: 30,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            color: 'var(--fg-mute)',
            border: '1px solid transparent',
            transition: 'all 0.2s var(--ease-smooth)',
            '&:hover': { color: 'var(--accent)', borderColor: 'var(--accent-line)' },
          }}
        >
          <Trash2 size={14} strokeWidth={1.6} />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          flexWrap: 'wrap',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.74rem',
          color: 'var(--fg-mute)',
        }}
      >
        <Box component="a" href={`mailto:${message.email}`} sx={{ color: 'var(--fg-dim)' }}>
          {message.email}
        </Box>
        <span>{formatDate(message.receivedAt)}</span>
      </Box>
      <Typography
        sx={{
          mt: 0.5,
          fontSize: '0.94rem',
          color: 'var(--fg)',
          lineHeight: 1.6,
          whiteSpace: 'pre-wrap',
        }}
      >
        {message.message}
      </Typography>
    </Box>
  );
}

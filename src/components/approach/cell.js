'use client';
import { Box, Typography } from '@mui/material';
import * as Icons from 'lucide-react';
import { MonoNumber } from '@/atoms';

export default function PrincipleCell({ index, title, body, icon }) {
  const Icon = Icons[icon] ?? Icons.Sparkle;
  return (
    <Box
      sx={{
        position: 'relative',
        background: 'var(--bg)',
        p: { xs: 3, md: '36px 32px' },
        transition: 'background 0.2s var(--ease-smooth)',
        '&:hover': { background: 'var(--bg-1)' },
        '&:hover .approach-icon': {
          background: 'var(--accent-soft)',
          borderColor: 'var(--accent-line)',
          color: 'var(--accent)',
        },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
        <Box
          className="approach-icon"
          sx={{
            width: 36,
            height: 36,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            border: '1px solid var(--line-strong)',
            background: 'transparent',
            color: 'var(--accent)',
            transition: 'all 0.2s var(--ease-smooth)',
          }}
        >
          <Icon size={16} strokeWidth={1.6} />
        </Box>
        <MonoNumber value={index} />
      </Box>
      <Typography
        component="h4"
        sx={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: '1.3rem',
          color: 'var(--fg)',
          letterSpacing: '-0.015em',
          mb: 1,
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: '0.875rem', color: 'var(--fg-dim)', lineHeight: 1.6 }}>
        {body}
      </Typography>
    </Box>
  );
}

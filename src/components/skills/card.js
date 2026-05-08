'use client';
import { Box, Typography } from '@mui/material';
import { Sparkle } from 'lucide-react';
import { Chip, MonoNumber } from '@/atoms';

export default function SkillCard({ index, title, blurb, chips }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1.25,
        p: '22px',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--line)',
        background: 'var(--bg-1)',
        transition: 'border-color 0.2s var(--ease-smooth), transform 0.2s var(--ease-smooth)',
        '&:hover': { borderColor: 'var(--line-strong)', transform: 'translateY(-2px)' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <MonoNumber value={index + 1} />
        <Box
          sx={{
            width: 30,
            height: 30,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '8px',
            background: 'var(--accent-soft)',
            border: '1px solid var(--accent-line)',
            color: 'var(--accent)',
          }}
        >
          <Sparkle size={14} strokeWidth={1.6} />
        </Box>
      </Box>
      <Typography
        component="h3"
        sx={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          fontSize: '1.125rem',
          color: 'var(--fg)',
          letterSpacing: '-0.01em',
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: '0.78rem', color: 'var(--fg-dim)', lineHeight: 1.5 }}>
        {blurb}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mt: 0.5 }}>
        {chips.map((c) => (
          <Chip key={c}>{c}</Chip>
        ))}
      </Box>
    </Box>
  );
}

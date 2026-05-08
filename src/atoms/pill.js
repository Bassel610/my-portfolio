'use client';
import { Box } from '@mui/material';

const TONE = {
  default: {
    bg: 'transparent',
    border: 'var(--line)',
    color: 'var(--fg-dim)',
  },
  accent: {
    bg: 'var(--accent-soft)',
    border: 'var(--accent-line)',
    color: 'var(--accent)',
  },
  muted: {
    bg: 'var(--bg-1)',
    border: 'var(--line)',
    color: 'var(--fg-mute)',
  },
};

export default function Pill({ children, tone = 'default', dot = false }) {
  const t = TONE[tone] ?? TONE.default;
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.75,
        px: 1.25,
        py: 0.45,
        borderRadius: 'var(--radius-pill)',
        border: '1px solid',
        borderColor: t.border,
        background: t.bg,
        color: t.color,
        fontFamily: 'var(--font-mono)',
        fontSize: '0.72rem',
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
        lineHeight: 1.2,
      }}
    >
      {dot && (
        <Box
          component="span"
          sx={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: 'currentColor',
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </Box>
  );
}

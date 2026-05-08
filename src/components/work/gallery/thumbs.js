'use client';
import { Box } from '@mui/material';

export default function Thumbs({ slides, activeIndex, onSelect }) {
  return (
    <Box
      role="tablist"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 0.75,
        mt: 1.25,
      }}
    >
      {slides.map((s, i) => {
        const active = i === activeIndex;
        const padded = String(i + 1).padStart(2, '0');
        return (
          <Box
            key={s.label}
            component="button"
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onSelect(i)}
            suppressHydrationWarning
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.85,
              px: 1.25,
              py: 0.55,
              borderRadius: 'var(--radius-pill)',
              border: '1px solid',
              borderColor: active ? 'var(--accent-line)' : 'var(--line)',
              background: active ? 'var(--accent-soft)' : 'transparent',
              color: active ? 'var(--fg)' : 'var(--fg-dim)',
              fontSize: '0.78rem',
              cursor: 'pointer',
              transition: 'all 0.2s var(--ease-smooth)',
              '&:hover': {
                borderColor: 'var(--accent-line)',
                color: 'var(--fg)',
              },
            }}
          >
            <Box
              component="span"
              sx={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: active ? 'var(--accent)' : 'var(--fg-mute)',
                letterSpacing: '0.04em',
              }}
            >
              / {padded}
            </Box>
            {s.label}
          </Box>
        );
      })}
    </Box>
  );
}

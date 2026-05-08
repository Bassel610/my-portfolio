'use client';
import { Box } from '@mui/material';

const DOTS = ['#ff5f57', '#febc2e', '#28c840'];

export default function BrowserFrame({ url = 'preview', children }) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: 'var(--radius-lg)',
        border: '1px solid var(--line)',
        background: 'var(--bg-1)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flexShrink: 0,
          height: 34,
          px: 1.5,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          borderBottom: '1px solid var(--line)',
          background: 'var(--bg-2)',
        }}
      >
        <Box sx={{ display: 'flex', gap: 0.625 }}>
          {DOTS.map((c) => (
            <Box
              key={c}
              sx={{ width: 10, height: 10, borderRadius: '50%', background: c, opacity: 0.7 }}
            />
          ))}
        </Box>
        <Box
          sx={{
            ml: 1.5,
            flex: 1,
            maxWidth: 360,
            height: 20,
            px: 1,
            borderRadius: '6px',
            background: 'var(--bg)',
            color: 'var(--fg-mute)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            display: 'flex',
            alignItems: 'center',
            border: '1px solid var(--line)',
          }}
        >
          {url}
        </Box>
      </Box>
      <Box sx={{ flex: 1, position: 'relative', minHeight: 0 }}>{children}</Box>
    </Box>
  );
}

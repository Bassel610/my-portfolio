'use client';
import { Box } from '@mui/material';
import { Sun, Moon } from 'lucide-react';
import { useTheme, useMounted } from '@/hooks/shared';

export default function ThemeToggle() {
  const mounted = useMounted();
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Box
      component="button"
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      sx={{
        width: 36,
        height: 36,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        border: '1px solid var(--line)',
        background: 'transparent',
        color: 'var(--fg-dim)',
        cursor: 'pointer',
        transition: 'background 0.2s var(--ease-smooth), color 0.2s var(--ease-smooth), border-color 0.2s var(--ease-smooth)',
        '&:hover': {
          color: 'var(--accent)',
          borderColor: 'var(--accent-line)',
          background: 'var(--accent-soft)',
        },
      }}
    >
      {mounted && (isDark ? <Sun size={16} strokeWidth={1.6} /> : <Moon size={16} strokeWidth={1.6} />)}
    </Box>
  );
}

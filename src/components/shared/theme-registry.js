'use client';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useMemo } from 'react';

const theme = createTheme({
  cssVariables: { cssVarPrefix: '' },
  shape: { borderRadius: 12 },
  palette: {
    mode: 'dark',
    background: { default: 'var(--bg)', paper: 'var(--bg-1)' },
    text: { primary: 'var(--fg)', secondary: 'var(--fg-dim)' },
    divider: 'var(--line)',
    primary: { main: 'var(--accent)', contrastText: 'var(--accent-ink)' },
  },
  typography: {
    fontFamily: 'var(--font-sans), ui-sans-serif, system-ui, sans-serif',
    h1: { fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '-0.025em' },
    h2: { fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '-0.025em' },
    h3: { fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '-0.02em' },
    h4: { fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '-0.015em' },
    button: { textTransform: 'none', fontWeight: 500 },
  },
  components: {
    MuiButtonBase: { defaultProps: { disableRipple: false } },
  },
});

export default function ThemeRegistry({ children }) {
  const value = useMemo(() => theme, []);
  return (
    <ThemeProvider theme={value}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

'use client';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useMemo } from 'react';

const theme = createTheme({
  shape: { borderRadius: 12 },
  palette: {
    mode: 'dark',
    background: { default: '#2a2825', paper: '#312e2b' },
    text: { primary: '#f5f3ee', secondary: '#b6afa3' },
    divider: '#45413c',
    primary: { main: '#e8b755', contrastText: '#2c2823' },
  },
  typography: {
    fontFamily: 'var(--font-sans), ui-sans-serif, system-ui, sans-serif',
    h1: { fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '-0.025em' },
    h2: { fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '-0.025em' },
    h3: { fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '-0.02em' },
    h4: { fontFamily: 'var(--font-display)', fontWeight: 500, letterSpacing: '-0.015em' },
    button: { textTransform: 'none', fontWeight: 500 },
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

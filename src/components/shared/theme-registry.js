'use client';
import { createTheme, ThemeProvider } from '@mui/material';
import { useMemo } from 'react';

// MUI palette is intentionally minimal — body/text colors come from
// the CSS variables in globals.css so the theme toggle (data-theme)
// drives every surface. CssBaseline is dropped because it would force
// body bg to MUI's palette and override our --bg variable.
const theme = createTheme({
  shape: { borderRadius: 12 },
  palette: {
    mode: 'light',
    primary: { main: '#b5742a', contrastText: '#fff8ec' },
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
  return <ThemeProvider theme={value}>{children}</ThemeProvider>;
}

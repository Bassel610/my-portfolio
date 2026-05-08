'use client';
import { Box } from '@mui/material';

export default function NavLink({ href, children, onClick }) {
  return (
    <Box
      component="a"
      href={href}
      onClick={onClick}
      sx={{
        position: 'relative',
        px: 1.4,
        py: 0.6,
        fontSize: '0.85rem',
        fontWeight: 500,
        color: 'var(--fg-dim)',
        borderRadius: 'var(--radius-pill)',
        transition: 'color 0.2s var(--ease-smooth), background 0.2s var(--ease-smooth)',
        '&:hover': {
          color: 'var(--fg)',
          background: 'var(--bg-1)',
        },
      }}
    >
      {children}
    </Box>
  );
}

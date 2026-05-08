'use client';
import { useState } from 'react';
import { Box } from '@mui/material';
import { Menu as MenuIcon, X } from 'lucide-react';
import NavLink from './link';

export default function MobileMenu({ links }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
      <Box
        component="button"
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close menu' : 'Open menu'}
        sx={{
          width: 36,
          height: 36,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          border: '1px solid var(--line)',
          color: 'var(--fg-dim)',
        }}
      >
        {open ? <X size={16} strokeWidth={1.6} /> : <MenuIcon size={16} strokeWidth={1.6} />}
      </Box>

      {open && (
        <Box
          sx={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            left: 12,
            right: 12,
            p: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 0.25,
            background: 'var(--bg-1)',
            border: '1px solid var(--line)',
            borderRadius: 'var(--radius)',
            boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
            zIndex: 1000,
          }}
        >
          {links.map((l) => (
            <NavLink key={l.href} href={l.href} onClick={close}>
              {l.label}
            </NavLink>
          ))}
        </Box>
      )}
    </Box>
  );
}

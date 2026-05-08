'use client';
import { Box } from '@mui/material';
import { NAV_LINKS, SITE } from '@/constants/site';
import ThemeToggle from '../theme-toggle';
import NavLink from './link';
import MobileMenu from './mobile-menu';

export default function Nav() {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 12,
        zIndex: 50,
        mx: 'auto',
        mt: 1.5,
        px: 'clamp(12px, 3vw, 24px)',
        maxWidth: 1280,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1.5,
          px: { xs: 1.25, md: 2 },
          py: 0.85,
          borderRadius: 'var(--radius-pill)',
          background: 'color-mix(in oklab, var(--bg-1) 78%, transparent)',
          border: '1px solid var(--line)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 1px 0 var(--line) inset, 0 6px 24px rgba(0,0,0,0.18)',
        }}
      >
        <Box
          component="a"
          href="#hero"
          sx={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            color: 'var(--fg)',
            letterSpacing: '-0.01em',
            fontSize: '0.96rem',
            px: 0.5,
          }}
        >
          {SITE.monogram}
        </Box>

        <Box
          sx={{
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            gap: 0.25,
          }}
        >
          {NAV_LINKS.map((l) => (
            <NavLink key={l.href} href={l.href}>
              {l.label}
            </NavLink>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <ThemeToggle />
          <MobileMenu links={NAV_LINKS} />
        </Box>
      </Box>
    </Box>
  );
}

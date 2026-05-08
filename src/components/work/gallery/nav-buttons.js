'use client';
import { Box } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SIDE = {
  left: { left: 12, icon: ChevronLeft, label: 'Previous slide' },
  right: { right: 12, icon: ChevronRight, label: 'Next slide' },
};

export default function NavButton({ side, onClick }) {
  const cfg = SIDE[side];
  const Icon = cfg.icon;
  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      aria-label={cfg.label}
      className="gallery-nav"
      sx={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        ...(side === 'left' ? { left: cfg.left } : { right: cfg.right }),
        width: { xs: 38, md: 46 },
        height: { xs: 38, md: 46 },
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        background: 'rgba(15, 10, 30, 0.65)',
        backdropFilter: 'blur(10px)',
        color: '#fff',
        border: '1px solid rgba(255,255,255,0.08)',
        boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
        cursor: 'pointer',
        opacity: { xs: 1, md: 0 },
        transition: 'opacity 0.2s var(--ease-smooth), background 0.2s var(--ease-smooth)',
        zIndex: 3,
        '&:hover': { background: 'rgba(15, 10, 30, 0.9)' },
      }}
    >
      <Icon size={18} strokeWidth={1.6} />
    </Box>
  );
}

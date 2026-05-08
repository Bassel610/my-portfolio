'use client';
import { Box } from '@mui/material';
import { ArrowUpRight } from 'lucide-react';

const VARIANT = {
  solid: {
    bg: 'var(--accent)',
    color: 'var(--accent-ink)',
    border: '1px solid var(--accent)',
    hoverBg: 'oklch(0.88 0.13 80)',
    hoverBorder: 'oklch(0.88 0.13 80)',
  },
  outline: {
    bg: 'transparent',
    color: 'var(--fg)',
    border: '1px solid var(--line-strong)',
    hoverBg: 'var(--bg-1)',
    hoverBorder: 'var(--accent-line)',
  },
  ghost: {
    bg: 'transparent',
    color: 'var(--fg-dim)',
    border: '1px solid transparent',
    hoverBg: 'var(--bg-1)',
    hoverBorder: 'transparent',
  },
};

export default function Button({
  variant = 'solid',
  href,
  onClick,
  type,
  children,
  arrow = true,
  size = 'md',
  ...rest
}) {
  const v = VARIANT[variant] ?? VARIANT.solid;
  const isLink = !!href;
  const Comp = isLink ? 'a' : 'button';

  const padY = size === 'sm' ? 0.7 : 0.95;
  const padX = size === 'sm' ? 1.5 : 2;

  return (
    <Box
      component={Comp}
      href={href}
      onClick={onClick}
      type={!isLink ? type ?? 'button' : undefined}
      target={isLink && /^https?:/.test(href) ? '_blank' : undefined}
      rel={isLink && /^https?:/.test(href) ? 'noopener noreferrer' : undefined}
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.85,
        py: padY,
        px: padX,
        borderRadius: 'var(--radius-pill)',
        background: v.bg,
        color: v.color,
        border: v.border,
        fontFamily: 'var(--font-sans)',
        fontWeight: 500,
        fontSize: '0.92rem',
        letterSpacing: '-0.005em',
        cursor: 'pointer',
        transition: 'background 0.2s var(--ease-smooth), border-color 0.2s var(--ease-smooth), transform 0.2s var(--ease-smooth)',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        '&:hover': {
          background: v.hoverBg,
          borderColor: v.hoverBorder,
          transform: 'translateY(-1px)',
          '& svg.btn-arrow': { transform: 'translate(2px, -2px)' },
        },
        '& svg.btn-arrow': {
          transition: 'transform 0.2s var(--ease-smooth)',
        },
      }}
      {...rest}
    >
      <span>{children}</span>
      {arrow && <ArrowUpRight size={16} className="btn-arrow" strokeWidth={1.6} />}
    </Box>
  );
}

'use client';
import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Mail, MessageCircle, Copy, Check } from 'lucide-react';
import { BrandIcon } from '@/atoms';
import { CONTACT } from '@/constants/contact';

const Linkedin = (props) => <BrandIcon name="linkedin" {...props} />;
const Github = (props) => <BrandIcon name="github" {...props} />;

const ICON = {
  email: Mail,
  whatsapp: MessageCircle,
  linkedin: Linkedin,
  github: Github,
};

function CopyButton({ value }) {
  const [copied, setCopied] = useState(false);
  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };
  return (
    <Box
      component="button"
      type="button"
      onClick={onClick}
      aria-label={copied ? 'Copied' : 'Copy email'}
      suppressHydrationWarning
      sx={{
        width: 28,
        height: 28,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '6px',
        color: copied ? 'var(--accent)' : 'var(--fg-mute)',
        border: '1px solid var(--line)',
        background: 'transparent',
        transition: 'all 0.2s var(--ease-smooth)',
        '&:hover': { color: 'var(--fg)', borderColor: 'var(--line-strong)' },
      }}
    >
      {copied ? <Check size={13} strokeWidth={1.8} /> : <Copy size={13} strokeWidth={1.6} />}
    </Box>
  );
}

export default function Channels() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, width: '100%' }}>
      {CONTACT.channels.map((c) => {
        const Icon = ICON[c.kind] ?? Mail;
        const isExternal = c.kind !== 'email';
        return (
          <Box
            key={c.kind}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: { xs: 'center', md: 'flex-start' },
              gap: 1.25,
              p: 1.5,
              border: '1px solid var(--line)',
              borderRadius: 'var(--radius)',
              background: 'var(--bg-1)',
              transition: 'border-color 0.2s var(--ease-smooth)',
              '&:hover': { borderColor: 'var(--line-strong)' },
            }}
          >
            <Box
              sx={{
                width: 32,
                height: 32,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
                color: 'var(--fg-dim)',
                border: '1px solid var(--line)',
              }}
            >
              <Icon size={15} strokeWidth={1.6} />
            </Box>
            <Box
              component="a"
              href={c.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              sx={{ minWidth: 0, color: 'var(--fg)', fontSize: '0.92rem' }}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.86rem',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                }}
              >
                {c.label}
              </Typography>
            </Box>
            {c.copyValue && <CopyButton value={c.copyValue} />}
          </Box>
        );
      })}
    </Box>
  );
}

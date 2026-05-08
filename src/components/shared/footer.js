'use client';
import { Box, Typography } from '@mui/material';
import { Mail, MessageCircle } from 'lucide-react';
import { BrandIcon } from '@/atoms';
import { SITE } from '@/constants/site';
import { CONTACT } from '@/constants/contact';

const Linkedin = (props) => <BrandIcon name="linkedin" {...props} />;
const Github = (props) => <BrandIcon name="github" {...props} />;

const ICON = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  whatsapp: MessageCircle,
};

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 6, md: 10 },
        pt: 7,
        pb: 5,
        borderTop: '1px solid var(--line)',
      }}
    >
      <Box
        sx={{
          maxWidth: 1280,
          mx: 'auto',
          px: 'clamp(24px, 5vw, 56px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 1.5,
          }}
        >
          <Typography
            sx={{
              fontFamily: 'var(--font-display)',
              fontSize: '1rem',
              fontWeight: 500,
              color: 'var(--fg)',
              letterSpacing: '-0.01em',
            }}
          >
            {SITE.monogram}
          </Typography>
          <Typography
            sx={{
              fontSize: '0.88rem',
              color: 'var(--fg-dim)',
            }}
          >
            {SITE.tagline}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: 2.5,
            flexWrap: 'wrap',
          }}
        >
          {CONTACT.channels.map((c) => {
            const Icon = ICON[c.kind] ?? Mail;
            return (
              <Box
                key={c.kind}
                component="a"
                href={c.href}
                target={c.kind === 'email' ? undefined : '_blank'}
                rel={c.kind === 'email' ? undefined : 'noopener noreferrer'}
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 0.85,
                  fontSize: '0.86rem',
                  color: 'var(--fg-dim)',
                  transition: 'color 0.2s var(--ease-smooth)',
                  '&:hover': { color: 'var(--accent)' },
                }}
              >
                <Icon size={15} strokeWidth={1.6} />
                {c.label}
              </Box>
            );
          })}
        </Box>

        <Typography
          sx={{
            fontSize: '0.78rem',
            color: 'var(--fg-mute)',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.02em',
          }}
        >
          {SITE.copyright}
        </Typography>
      </Box>
    </Box>
  );
}

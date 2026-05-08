'use client';
import { Box, Typography } from '@mui/material';
import { Pill, MonoNumber } from '@/atoms';
import { Button } from '@/components/shared';

export default function Header({ index, title, category, year, pill, tag, actions }) {
  return (
    <Box sx={{ pb: 2, borderBottom: '1px solid var(--line)' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25, flexWrap: 'wrap', mb: 1.25 }}>
        <MonoNumber value={index} />
        <Typography
          component="span"
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            letterSpacing: '0.08em',
            color: 'var(--fg-mute)',
            textTransform: 'uppercase',
          }}
        >
          · {category} · {year}
        </Typography>
        <Pill tone={pill.tone} dot={pill.tone === 'accent'}>
          {pill.label}
        </Pill>
      </Box>
      <Typography
        component="h3"
        sx={{
          fontFamily: 'var(--font-display)',
          fontWeight: 500,
          letterSpacing: '-0.02em',
          fontSize: 'clamp(22px, 2.4vw, 28px)',
          color: 'var(--fg)',
          mb: 1.25,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: '0.96rem',
          color: 'var(--fg-dim)',
          lineHeight: 1.6,
          mb: 2,
        }}
      >
        {tag}
      </Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {actions.map((a, i) => (
          <Button key={a.href} href={a.href} variant={i === 0 ? 'solid' : 'outline'} size="sm">
            {a.label}
          </Button>
        ))}
      </Box>
    </Box>
  );
}

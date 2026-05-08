'use client';
import { Box } from '@mui/material';
import { ChevronDown } from 'lucide-react';

export default function ShowMore({ remaining, total, onClick }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: { xs: 5, md: 6 } }}>
      <Box
        component="button"
        type="button"
        onClick={onClick}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          px: 2.25,
          py: 1,
          borderRadius: 'var(--radius-pill)',
          border: '1px solid var(--line-strong)',
          background: 'transparent',
          color: 'var(--fg)',
          fontSize: '0.92rem',
          fontWeight: 500,
          cursor: 'pointer',
          transition: 'all 0.2s var(--ease-smooth)',
          '&:hover': {
            background: 'var(--bg-1)',
            borderColor: 'var(--accent-line)',
            transform: 'translateY(-1px)',
          },
        }}
      >
        <Box
          component="span"
          sx={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--accent)',
          }}
        >
          + {String(remaining).padStart(2, '0')}
        </Box>
        Show all {total} projects
        <ChevronDown size={16} strokeWidth={1.6} />
      </Box>
    </Box>
  );
}

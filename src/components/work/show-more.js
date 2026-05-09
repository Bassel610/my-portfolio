'use client';
import { Box } from '@mui/material';
import { ChevronDown, ChevronUp } from 'lucide-react';

const PILL_SX = {
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
};

const COUNT_SX = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.78rem',
  color: 'var(--accent)',
};

export default function ShowMore({ onShowMore, onShowLess, canShowMore, canShowLess, nextStep, hiddenCount }) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1.25,
        flexWrap: 'wrap',
        justifyContent: 'center',
        mt: { xs: 5, md: 6 },
      }}
    >
      {canShowMore && (
        <Box component="button" type="button" onClick={onShowMore} suppressHydrationWarning sx={PILL_SX}>
          <Box component="span" sx={COUNT_SX}>
            + {String(nextStep).padStart(2, '0')}
          </Box>
          Show {nextStep} more
          <ChevronDown size={16} strokeWidth={1.6} />
        </Box>
      )}
      {canShowLess && (
        <Box
          component="button"
          type="button"
          onClick={onShowLess}
          suppressHydrationWarning
          sx={{ ...PILL_SX, color: 'var(--fg-dim)' }}
        >
          <Box component="span" sx={{ ...COUNT_SX, color: 'var(--fg-mute)' }}>
            − {String(hiddenCount).padStart(2, '0')}
          </Box>
          Show less
          <ChevronUp size={16} strokeWidth={1.6} />
        </Box>
      )}
    </Box>
  );
}

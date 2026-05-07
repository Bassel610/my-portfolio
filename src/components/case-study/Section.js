'use client';
import { Box, Typography } from '@mui/material';

const KIND_LABEL = {
  problem: '01 / Problem',
  constraints: '02 / Constraints',
  decisions: '03 / Decisions',
  outcomes: '04 / Outcomes',
  qa: '05 / How I tested',
};

export default function Section({ kind, heading, body }) {
  return (
    <Box
      component="section"
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '160px 1fr' },
        gap: { xs: 1, md: 4 },
        py: { xs: 2, md: 2.5 },
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <Typography
        component="div"
        sx={{
          fontSize: '0.7rem',
          fontFamily: 'monospace',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.5)',
          pt: { md: 0.5 },
        }}
      >
        {KIND_LABEL[kind] ?? kind}
      </Typography>

      <Box>
        <Typography
          component="h3"
          sx={{
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            fontWeight: 600,
            color: '#fff',
            mb: 1,
            letterSpacing: '-0.005em',
          }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '0.95rem', md: '1rem' },
            color: 'rgba(255,255,255,0.78)',
            lineHeight: 1.7,
            maxWidth: 720,
          }}
        >
          {body}
        </Typography>
      </Box>
    </Box>
  );
}

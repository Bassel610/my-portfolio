'use client';
import { Box, Typography } from '@mui/material';

const LABEL_SX = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.7rem',
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--fg-mute)',
  mb: 1,
};

function renderParagraph(text) {
  // Allow **bold** segments without bringing in a markdown lib.
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <Box key={i} component="strong" sx={{ color: 'var(--fg)', fontWeight: 600 }}>
        {part}
      </Box>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function Overview({ paragraphs }) {
  return (
    <Box>
      <Typography component="h5" sx={LABEL_SX}>
        Overview
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25 }}>
        {paragraphs.map((p, i) => (
          <Typography
            key={i}
            sx={{ fontSize: '0.95rem', color: 'var(--fg-dim)', lineHeight: 1.65 }}
          >
            {renderParagraph(p)}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}

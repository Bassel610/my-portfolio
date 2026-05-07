'use client';
import { Box, ListItemButton, Typography } from '@mui/material';

export default function Item({ item, selected, onHover, onPick }) {
  return (
    <ListItemButton
      selected={selected}
      onMouseEnter={onHover}
      onClick={onPick}
      sx={{
        borderRadius: 1.5,
        mx: 0.5,
        my: 0.25,
        py: 1,
        px: 1.5,
        gap: 1.25,
        '&.Mui-selected': { background: 'rgba(255,255,255,0.08)' },
        '&.Mui-selected:hover': { background: 'rgba(255,255,255,0.12)' },
      }}
    >
      <Box
        sx={{
          width: 28,
          height: 28,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 1,
          background: 'rgba(255,255,255,0.05)',
          fontSize: '0.95rem',
        }}
      >
        ⇢
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography sx={{ color: '#fff', fontSize: '0.92rem', fontWeight: 500 }}>
          {item.label}
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '0.72rem',
            fontFamily: 'monospace',
          }}
        >
          /{item.hint}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: 'rgba(255,255,255,0.35)',
          fontFamily: 'monospace',
          fontSize: '0.7rem',
        }}
      >
        {item.kind}
      </Typography>
    </ListItemButton>
  );
}

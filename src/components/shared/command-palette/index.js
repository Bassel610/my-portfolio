'use client';
import {
  Dialog,
  Box,
  InputBase,
  List,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Item from './Item';
import { usePalette } from './use-palette';

export default function CommandPalette({ onNavigate }) {
  const { open, setOpen, query, setQuery, active, setActive, filtered, inputRef, commit } =
    usePalette({ onPick: (item) => onNavigate?.(item.pageId) });

  return (
    <Dialog
      open={open}
      onClose={() => setOpen(false)}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          mt: '14vh',
          alignSelf: 'flex-start',
          background: 'rgba(15, 10, 35, 0.92)',
          backdropFilter: 'blur(24px)',
          border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: 2,
          color: '#fff',
          overflow: 'hidden',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 1.25,
          px: 2,
          py: 1.5,
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <SearchIcon sx={{ fontSize: 18, color: 'rgba(255,255,255,0.55)' }} />
        <InputBase
          inputRef={inputRef}
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Jump to a section…"
          sx={{
            color: '#fff',
            fontSize: '0.95rem',
            '& input::placeholder': { color: 'rgba(255,255,255,0.45)' },
          }}
        />
        <Typography
          sx={{
            fontFamily: 'monospace',
            fontSize: '0.66rem',
            color: 'rgba(255,255,255,0.35)',
            border: '1px solid rgba(255,255,255,0.18)',
            borderRadius: '4px',
            px: 0.6,
            py: 0.1,
          }}
        >
          esc
        </Typography>
      </Box>

      <List sx={{ p: 0.5, maxHeight: 360, overflowY: 'auto' }}>
        {filtered.length === 0 && (
          <Box sx={{ px: 2, py: 2.5, color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
            No matches.
          </Box>
        )}
        {filtered.map((item, i) => (
          <Item
            key={item.id}
            item={item}
            selected={i === active}
            onHover={() => setActive(i)}
            onPick={() => commit(item)}
          />
        ))}
      </List>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          px: 2,
          py: 1,
          borderTop: '1px solid rgba(255,255,255,0.08)',
          color: 'rgba(255,255,255,0.45)',
          fontSize: '0.7rem',
          fontFamily: 'monospace',
        }}
      >
        <span>↑↓ navigate</span>
        <span>↵ go</span>
        <span>esc close</span>
      </Box>
    </Dialog>
  );
}

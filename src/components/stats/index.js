'use client';
import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Eye, RefreshCw } from 'lucide-react';
import { Button } from '@/components/shared';
import { getVisitCount } from '@/lib/stats';

export default function Stats() {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const v = await getVisitCount();
    setCount(v);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
        <Box>
          <Typography
            component="span"
            sx={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--fg-mute)',
            }}
          >
            Stats
          </Typography>
          <Typography
            component="h1"
            sx={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              fontSize: 'clamp(28px, 4vw, 40px)',
              color: 'var(--fg)',
              mt: 0.5,
            }}
          >
            Portfolio visits
          </Typography>
        </Box>
        <Button variant="outline" size="sm" arrow={false} onClick={load}>
          <RefreshCw size={14} strokeWidth={1.6} style={{ marginRight: 6 }} />
          Refresh
        </Button>
      </Box>

      <Box
        sx={{
          p: { xs: 4, md: 5 },
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-1)',
          display: 'flex',
          alignItems: 'center',
          gap: 3,
        }}
      >
        <Box
          sx={{
            width: 56,
            height: 56,
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--accent-soft)',
            color: 'var(--accent)',
            border: '1px solid var(--accent-line)',
          }}
        >
          <Eye size={22} strokeWidth={1.6} />
        </Box>
        <Box>
          <Typography
            sx={{
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              fontSize: 'clamp(40px, 8vw, 72px)',
              lineHeight: 1,
              color: 'var(--fg)',
              letterSpacing: '-0.02em',
            }}
          >
            {loading ? '—' : (count ?? '—')}
          </Typography>
          <Typography
            sx={{
              mt: 1,
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              letterSpacing: '0.06em',
              color: 'var(--fg-mute)',
              textTransform: 'uppercase',
            }}
          >
            Total visits · all time
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          fontSize: '0.86rem',
          color: 'var(--fg-dim)',
          lineHeight: 1.6,
        }}
      >
        Each browser session counts once. Bots, prefetchers and refreshes within
        the same tab don&apos;t double-count. Numbers are stored on a free
        public counter service — no personal data is collected.
      </Typography>
    </Box>
  );
}

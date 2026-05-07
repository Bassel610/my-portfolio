'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { NAV_PAGES } from '@/constants/site';

function buildItems() {
  return NAV_PAGES.map((p) => ({
    id: `nav:${p.id}`,
    label: p.name,
    hint: p.sectionId,
    pageId: p.id,
    kind: 'section',
  }));
}

function matches(query, item) {
  if (!query) return true;
  const q = query.toLowerCase().trim();
  return (
    item.label.toLowerCase().includes(q) ||
    item.hint.toLowerCase().includes(q) ||
    item.kind.includes(q)
  );
}

export function usePalette({ onPick }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const all = useMemo(buildItems, []);
  const filtered = useMemo(() => all.filter((it) => matches(query, it)), [all, query]);

  useEffect(() => {
    const onKey = (e) => {
      const isToggle = (e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey);
      if (isToggle) {
        e.preventDefault();
        setOpen((x) => !x);
        return;
      }
      if (!open) return;
      if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActive((i) => Math.min(i + 1, Math.max(filtered.length - 1, 0)));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActive((i) => Math.max(i - 1, 0));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const pick = filtered[active];
        if (pick) commit(pick);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  function commit(item) {
    setOpen(false);
    onPick?.(item);
  }

  return {
    open,
    setOpen,
    query,
    setQuery,
    active,
    setActive,
    filtered,
    inputRef,
    commit,
  };
}

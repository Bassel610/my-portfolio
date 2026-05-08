'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

export function useGallery(total) {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  const goTo = useCallback((i) => {
    setIndex(((i % total) + total) % total);
  }, [total]);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const onKey = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev();
      }
    };
    node.addEventListener('keydown', onKey);
    return () => node.removeEventListener('keydown', onKey);
  }, [next, prev]);

  return { index, next, prev, goTo, containerRef };
}

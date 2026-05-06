'use client';
import { useEffect, useState } from 'react';

const QUERY = '(pointer: fine)';

export function useFinePointer() {
  const [fine, setFine] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mql = window.matchMedia(QUERY);
    setFine(mql.matches);
    const handler = (e) => setFine(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return fine;
}

'use client';
import { useEffect, useState } from 'react';

const MOBILE_BREAKPOINT = 768;
const RESIZE_DEBOUNCE_MS = 200;

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let debounceTimer;
    const check = () => {
      if (debounceTimer) clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
      }, RESIZE_DEBOUNCE_MS);
    };

    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener('resize', check);

    return () => {
      window.removeEventListener('resize', check);
      if (debounceTimer) clearTimeout(debounceTimer);
    };
  }, []);

  return isMobile;
}

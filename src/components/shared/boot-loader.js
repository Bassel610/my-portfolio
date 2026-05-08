'use client';
import { useEffect } from 'react';

export default function BootLoaderHider() {
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      document.documentElement.setAttribute('data-app-loaded', 'true');
    });
    return () => cancelAnimationFrame(id);
  }, []);
  return null;
}

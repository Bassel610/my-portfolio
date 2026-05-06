'use client';
import { useEffect, useState } from 'react';

const INIT_DELAY_MS = 800;

export function useAppLoading() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), INIT_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return isLoading;
}

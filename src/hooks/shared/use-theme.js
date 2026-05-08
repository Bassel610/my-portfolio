'use client';
import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';

function readInitial() {
  if (typeof window === 'undefined') return 'dark';
  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === 'light' || saved === 'dark' ? saved : 'dark';
}

function applyTheme(value) {
  if (typeof document === 'undefined') return;
  document.documentElement.setAttribute('data-theme', value);
}

export function useTheme() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const initial = readInitial();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const setAndPersist = useCallback((next) => {
    setTheme(next);
    applyTheme(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, next);
    }
  }, []);

  const toggle = useCallback(() => {
    setAndPersist(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setAndPersist]);

  return { theme, toggle, setTheme: setAndPersist };
}

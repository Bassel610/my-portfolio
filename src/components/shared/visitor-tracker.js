'use client';
import { useEffect } from 'react';
import { incrementVisit } from '@/lib/stats';

const SESSION_KEY = 'portfolio-visit-counted';

export default function VisitorTracker() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.sessionStorage.getItem(SESSION_KEY) === '1') return;
    window.sessionStorage.setItem(SESSION_KEY, '1');
    incrementVisit();
  }, []);
  return null;
}

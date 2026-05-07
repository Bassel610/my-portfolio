'use client';
import { useEffect, useRef, useState } from 'react';
import { NAV_PAGES } from '@/constants/site';

export function useSectionNav() {
  const containerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(NAV_PAGES[0].id);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const sectionId = visible.target.id;
        const page = NAV_PAGES.find((p) => p.sectionId === sectionId);
        if (page) setCurrentPage(page.id);
      },
      { root, threshold: [0.4, 0.6, 0.8] }
    );

    NAV_PAGES.forEach((p) => {
      const el = root.querySelector(`#${p.sectionId}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const goTo = (pageId) => {
    const target = NAV_PAGES.find((p) => p.id === pageId);
    if (!target) return;
    const root = containerRef.current;
    if (!root) return;
    const el = root.querySelector(`#${target.sectionId}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return { containerRef, currentPage, goTo };
}

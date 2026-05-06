'use client';
import { useEffect, useRef, useState } from 'react';
import { useScrollBoundary } from './use-scroll-boundary';

const TRANSITION_MS = 800;
const COOLDOWN_MS = 200;
const MIN_DELTA = 10;
const MAX_DELTA = 100;

export function useSectionRouter(pageKeys, { isAppLoading, isMobile }) {
  const [transition, setTransition] = useState({
    direction: null,
    currentPage: pageKeys[0],
    nextPage: null,
  });

  const wheelRef = useRef(null);
  const sectionContentRef = useRef(null);
  const isProcessing = useRef(false);

  const { canScrollDown, canScrollUp, hasOverflow } = useScrollBoundary(
    sectionContentRef,
    !isMobile && !isAppLoading
  );

  useEffect(() => {
    if (isAppLoading || isMobile) return;

    const handleWheel = (e) => {
      e.preventDefault();
      if (
        isProcessing.current ||
        Math.abs(e.deltaY) < MIN_DELTA ||
        Math.abs(e.deltaY) > MAX_DELTA
      ) {
        return;
      }

      const direction = e.deltaY > 0 ? 'down' : 'up';

      if (hasOverflow && sectionContentRef.current) {
        if (direction === 'down' && canScrollDown) {
          sectionContentRef.current.scrollTop += e.deltaY;
          return;
        }
        if (direction === 'up' && canScrollUp) {
          sectionContentRef.current.scrollTop += e.deltaY;
          return;
        }
      }

      const currentIndex = pageKeys.indexOf(transition.currentPage);
      let nextIndex = currentIndex;
      if (direction === 'down' && currentIndex < pageKeys.length - 1) {
        nextIndex = currentIndex + 1;
      } else if (direction === 'up' && currentIndex > 0) {
        nextIndex = currentIndex - 1;
      }
      if (nextIndex === currentIndex) return;

      isProcessing.current = true;
      setTransition({
        direction,
        currentPage: transition.currentPage,
        nextPage: pageKeys[nextIndex],
      });
    };

    const node = wheelRef.current;
    if (!node) return;
    node.addEventListener('wheel', handleWheel, { passive: false });
    return () => node.removeEventListener('wheel', handleWheel);
  }, [
    transition,
    isAppLoading,
    isMobile,
    pageKeys,
    hasOverflow,
    canScrollDown,
    canScrollUp,
  ]);

  useEffect(() => {
    if (!transition.nextPage) return;
    const timer = setTimeout(() => {
      setTransition((prev) => ({
        direction: null,
        currentPage: prev.nextPage,
        nextPage: null,
      }));
      setTimeout(() => {
        isProcessing.current = false;
      }, COOLDOWN_MS);
    }, TRANSITION_MS);
    return () => clearTimeout(timer);
  }, [transition]);

  return { transition, wheelRef, sectionContentRef };
}

'use client';
import { useEffect, useRef, useState } from 'react';
import { useScrollBoundary } from './use-scroll-boundary';

const TRANSITION_MS = 800;
const COOLDOWN_MS = 200;
const MIN_DELTA = 10;
const MAX_DELTA = 100;

const STEP_KEYS = new Set(['ArrowDown', 'PageDown']);
const STEP_BACK_KEYS = new Set(['ArrowUp', 'PageUp']);

export function useSectionRouter(pageKeys, { isAppLoading, isMobile }) {
  const [transition, setTransition] = useState({
    direction: null,
    currentPage: pageKeys[0],
    nextPage: null,
  });

  const wheelRef = useRef(null);
  const sectionContentRef = useRef(null);
  const isProcessing = useRef(false);
  const transitionRef = useRef(transition);
  transitionRef.current = transition;

  const { canScrollDown, canScrollUp, hasOverflow } = useScrollBoundary(
    sectionContentRef,
    !isMobile && !isAppLoading
  );

  const stepRef = useRef(null);
  stepRef.current = (direction) => {
    if (isProcessing.current) return;
    const currentIndex = pageKeys.indexOf(transitionRef.current.currentPage);
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
      currentPage: transitionRef.current.currentPage,
      nextPage: pageKeys[nextIndex],
    });
  };

  const goToRef = useRef(null);
  goToRef.current = (pageId) => {
    if (isProcessing.current) return;
    if (pageId === transitionRef.current.currentPage) return;
    if (!pageKeys.includes(pageId)) return;
    const fromIndex = pageKeys.indexOf(transitionRef.current.currentPage);
    const toIndex = pageKeys.indexOf(pageId);
    isProcessing.current = true;
    setTransition({
      direction: toIndex > fromIndex ? 'down' : 'up',
      currentPage: transitionRef.current.currentPage,
      nextPage: pageId,
    });
  };

  useEffect(() => {
    if (isAppLoading || isMobile) return;

    const handleWheel = (e) => {
      e.preventDefault();
      if (isProcessing.current) return;
      if (Math.abs(e.deltaY) < MIN_DELTA) return;

      const cappedDelta = Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), MAX_DELTA);
      const direction = cappedDelta > 0 ? 'down' : 'up';

      if (hasOverflow && sectionContentRef.current) {
        if (direction === 'down' && canScrollDown) {
          sectionContentRef.current.scrollTop += cappedDelta;
          return;
        }
        if (direction === 'up' && canScrollUp) {
          sectionContentRef.current.scrollTop += cappedDelta;
          return;
        }
      }

      stepRef.current(direction);
    };

    const handleKey = (e) => {
      if (STEP_KEYS.has(e.key)) {
        e.preventDefault();
        stepRef.current('down');
      } else if (STEP_BACK_KEYS.has(e.key)) {
        e.preventDefault();
        stepRef.current('up');
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToRef.current(pageKeys[0]);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToRef.current(pageKeys[pageKeys.length - 1]);
      }
    };

    const node = wheelRef.current;
    if (!node) return;
    node.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKey);
    return () => {
      node.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKey);
    };
  }, [isAppLoading, isMobile, pageKeys, hasOverflow, canScrollDown, canScrollUp]);

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

  return {
    transition,
    wheelRef,
    sectionContentRef,
    goTo: (id) => goToRef.current?.(id),
  };
}

'use client';
import { useEffect, useRef, useState } from 'react';
import { useScrollBoundary } from '../use-scroll-boundary';
import { TRANSITION_MS, COOLDOWN_MS } from './constants';
import { makeWheelHandler, makeKeyHandler } from './make-handlers';

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
    const node = wheelRef.current;
    if (!node) return;

    const step = (d) => stepRef.current?.(d);
    const goTo = (id) => goToRef.current?.(id);

    const handleWheel = makeWheelHandler({
      isProcessing,
      hasOverflow,
      canScrollDown,
      canScrollUp,
      sectionContentRef,
      step,
    });
    const handleKey = makeKeyHandler({ step, goTo, pageKeys });

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

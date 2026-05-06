import { useState, useEffect, useCallback, useRef } from 'react';

const SCROLL_THRESHOLD = 1;
const DEBOUNCE_MS = 50;

const EMPTY_STATE = {
  canScrollDown: false,
  canScrollUp: false,
  hasOverflow: false,
  scrollPosition: 0,
  isAtTop: true,
  isAtBottom: false,
};

export function useScrollBoundary(containerRef, isActive = true) {
  const [scrollState, setScrollState] = useState(EMPTY_STATE);

  const debounceTimerRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const calculateScrollState = useCallback(() => {
    if (!containerRef.current || !isActive) return EMPTY_STATE;

    try {
      const container = containerRef.current;
      const scrollTop = container.scrollTop || 0;
      const scrollHeight = container.scrollHeight || 0;
      const clientHeight = container.clientHeight || 0;

      if (isNaN(scrollTop) || isNaN(scrollHeight) || isNaN(clientHeight)) {
        console.warn('[useScrollBoundary] Invalid scroll measurements detected');
        return EMPTY_STATE;
      }

      const hasOverflow = scrollHeight > clientHeight + SCROLL_THRESHOLD;
      const isAtTop = scrollTop <= SCROLL_THRESHOLD;
      const isAtBottom =
        scrollTop >= scrollHeight - clientHeight - SCROLL_THRESHOLD;

      return {
        canScrollDown: hasOverflow && !isAtBottom,
        canScrollUp: hasOverflow && !isAtTop,
        hasOverflow,
        scrollPosition: scrollTop,
        isAtTop,
        isAtBottom,
      };
    } catch (error) {
      console.error('[useScrollBoundary] Error calculating scroll state:', error);
      return EMPTY_STATE;
    }
  }, [containerRef, isActive]);

  const handleScroll = useCallback(() => {
    if (!isActive) return;

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      setScrollState(calculateScrollState());
    }, DEBOUNCE_MS);
  }, [calculateScrollState, isActive]);

  useEffect(() => {
    if (!containerRef.current || !isActive) {
      setScrollState(EMPTY_STATE);
      return;
    }

    const container = containerRef.current;
    setScrollState(calculateScrollState());

    try {
      resizeObserverRef.current = new ResizeObserver(() => {
        setScrollState(calculateScrollState());
      });
      resizeObserverRef.current.observe(container);
    } catch (error) {
      console.warn(
        '[useScrollBoundary] ResizeObserver failed, falling back to window resize:',
        error
      );

      const handleResize = () => setScrollState(calculateScrollState());
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }

    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
        resizeObserverRef.current = null;
      }
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [containerRef, isActive, calculateScrollState]);

  useEffect(() => {
    if (!containerRef.current || !isActive) return;

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [containerRef, isActive, handleScroll]);

  return { ...scrollState, handleScroll };
}

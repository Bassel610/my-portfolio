'use client';
import { useEffect, useRef, useState } from 'react';
import { useScrollBoundary } from '@/component/hooks/useScrollBoundary';

export function useProjectRouter(projectKeys, isMobile) {
  const [transition, setTransition] = useState({
    direction: null,
    currentProject: projectKeys[0],
    nextProject: null,
  });

  const wheelRef = useRef(null);
  const projectContentRef = useRef(null);
  const isProcessing = useRef(false);

  const { canScrollDown, canScrollUp, hasOverflow } = useScrollBoundary(
    projectContentRef,
    !isMobile
  );

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (
        isProcessing.current ||
        Math.abs(e.deltaY) < 5 ||
        e.deltaY > 50
      )
        return;

      const direction = e.deltaY > 0 ? 'down' : 'up';

      if (hasOverflow && projectContentRef.current) {
        if (direction === 'down' && canScrollDown) {
          projectContentRef.current.scrollTop += e.deltaY;
          return;
        }
        if (direction === 'up' && canScrollUp) {
          projectContentRef.current.scrollTop += e.deltaY;
          return;
        }
      }

      const currentIndex = projectKeys.indexOf(transition.currentProject);
      if (
        (direction === 'down' && currentIndex === projectKeys.length - 1) ||
        (direction === 'up' && currentIndex === 0)
      ) {
        return;
      }

      isProcessing.current = true;
      const nextProject =
        direction === 'down'
          ? projectKeys[currentIndex + 1]
          : projectKeys[currentIndex - 1];

      setTransition({
        direction,
        currentProject: transition.currentProject,
        nextProject,
      });
    };

    const node = wheelRef.current;
    if (!node) return;
    node.addEventListener('wheel', handleWheel, { passive: false });
    return () => node.removeEventListener('wheel', handleWheel);
  }, [transition, projectKeys, hasOverflow, canScrollDown, canScrollUp]);

  useEffect(() => {
    if (!transition.nextProject) return;
    const timer = setTimeout(() => {
      setTransition((prev) => ({
        ...prev,
        currentProject: prev.nextProject,
        nextProject: null,
        direction: null,
      }));
      if (projectContentRef.current) {
        projectContentRef.current.scrollTop = 0;
      }
      isProcessing.current = false;
    }, 800);
    return () => clearTimeout(timer);
  }, [transition]);

  return { transition, wheelRef, projectContentRef };
}

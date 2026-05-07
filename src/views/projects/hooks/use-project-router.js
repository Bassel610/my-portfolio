'use client';
import { useEffect, useRef, useState } from 'react';
import { useScrollBoundary } from '@/hooks/shared';

const TRANSITION_MS = 800;
const MIN_DELTA = 5;
const MAX_DELTA = 100;

export function useProjectRouter(projectKeys, isMobile) {
  const [transition, setTransition] = useState({
    direction: null,
    currentProject: projectKeys[0],
    nextProject: null,
  });

  const wheelRef = useRef(null);
  const projectContentRef = useRef(null);
  const isProcessing = useRef(false);
  const transitionRef = useRef(transition);
  transitionRef.current = transition;

  const { canScrollDown, canScrollUp, hasOverflow } = useScrollBoundary(
    projectContentRef,
    !isMobile
  );

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (isProcessing.current || Math.abs(e.deltaY) < MIN_DELTA) return;

      const cappedDelta = Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), MAX_DELTA);
      const direction = cappedDelta > 0 ? 'down' : 'up';

      if (hasOverflow && projectContentRef.current) {
        if (direction === 'down' && canScrollDown) {
          e.stopPropagation();
          projectContentRef.current.scrollTop += cappedDelta;
          return;
        }
        if (direction === 'up' && canScrollUp) {
          e.stopPropagation();
          projectContentRef.current.scrollTop += cappedDelta;
          return;
        }
      }

      const currentIndex = projectKeys.indexOf(transitionRef.current.currentProject);
      if (
        (direction === 'down' && currentIndex === projectKeys.length - 1) ||
        (direction === 'up' && currentIndex === 0)
      ) {
        return;
      }

      e.stopPropagation();
      isProcessing.current = true;
      const nextProject =
        direction === 'down'
          ? projectKeys[currentIndex + 1]
          : projectKeys[currentIndex - 1];

      setTransition({
        direction,
        currentProject: transitionRef.current.currentProject,
        nextProject,
      });
    };

    const node = wheelRef.current;
    if (!node) return;
    node.addEventListener('wheel', handleWheel, { passive: false });
    return () => node.removeEventListener('wheel', handleWheel);
  }, [projectKeys, hasOverflow, canScrollDown, canScrollUp]);

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
    }, TRANSITION_MS);
    return () => clearTimeout(timer);
  }, [transition]);

  return { transition, wheelRef, projectContentRef };
}

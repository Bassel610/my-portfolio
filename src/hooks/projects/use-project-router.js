'use client';
import { useEffect, useRef, useState } from 'react';
import { useScrollBoundary } from '@/hooks/shared';

const TRANSITION_MS = 800;
const COOLDOWN_MS = 250;
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

  const goToRef = useRef(null);
  goToRef.current = (projectId) => {
    if (isProcessing.current) return;
    if (!projectKeys.includes(projectId)) return;
    if (projectId === transitionRef.current.currentProject) return;
    const fromIndex = projectKeys.indexOf(transitionRef.current.currentProject);
    const toIndex = projectKeys.indexOf(projectId);
    isProcessing.current = true;
    setTransition({
      direction: toIndex > fromIndex ? 'down' : 'up',
      currentProject: transitionRef.current.currentProject,
      nextProject: projectId,
    });
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) < MIN_DELTA) return;

      if (isProcessing.current) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }

      const cappedDelta =
        Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), MAX_DELTA);
      const direction = cappedDelta > 0 ? 'down' : 'up';

      if (hasOverflow && projectContentRef.current) {
        if (direction === 'down' && canScrollDown) {
          e.preventDefault();
          e.stopPropagation();
          projectContentRef.current.scrollTop += cappedDelta;
          return;
        }
        if (direction === 'up' && canScrollUp) {
          e.preventDefault();
          e.stopPropagation();
          projectContentRef.current.scrollTop += cappedDelta;
          return;
        }
      }

      const currentIndex = projectKeys.indexOf(
        transitionRef.current.currentProject
      );

      if (direction === 'up' && currentIndex > 0) {
        e.preventDefault();
        e.stopPropagation();
        isProcessing.current = true;
        setTransition({
          direction: 'up',
          currentProject: transitionRef.current.currentProject,
          nextProject: projectKeys[currentIndex - 1],
        });
        return;
      }

      if (direction === 'down' && currentIndex < projectKeys.length - 1) {
        e.preventDefault();
        e.stopPropagation();
        isProcessing.current = true;
        setTransition({
          direction: 'down',
          currentProject: transitionRef.current.currentProject,
          nextProject: projectKeys[currentIndex + 1],
        });
        return;
      }
      // At first/last project: let the event bubble so the outer
      // scroll-snap container can step into the next section.
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
      setTimeout(() => {
        isProcessing.current = false;
      }, COOLDOWN_MS);
    }, TRANSITION_MS);
    return () => clearTimeout(timer);
  }, [transition]);

  return {
    transition,
    wheelRef,
    projectContentRef,
    goTo: (id) => goToRef.current?.(id),
  };
}

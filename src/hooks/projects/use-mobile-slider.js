'use client';
import { useRef, useState } from 'react';

const MIN_SWIPE_DISTANCE = 50;
const DRAG_THRESHOLD = 10;

export function useMobileSlider(total) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const goNext = () => {
    if (currentIndex < total - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goPrev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goTo = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    if (Math.abs(touchStartX.current - touchEndX.current) > DRAG_THRESHOLD) {
      setIsDragging(true);
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    const swipe = touchStartX.current - touchEndX.current;
    if (Math.abs(swipe) > MIN_SWIPE_DISTANCE) {
      if (swipe > 0) goNext();
      else goPrev();
    }
    setIsDragging(false);
  };

  return {
    currentIndex,
    direction,
    isDragging,
    goNext,
    goPrev,
    goTo,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}

import {
  MIN_DELTA,
  MAX_DELTA,
  STEP_KEYS,
  STEP_BACK_KEYS,
} from './constants';

export function makeWheelHandler({
  isProcessing,
  hasOverflow,
  canScrollDown,
  canScrollUp,
  sectionContentRef,
  step,
}) {
  return (e) => {
    e.preventDefault();
    if (isProcessing.current) return;
    if (Math.abs(e.deltaY) < MIN_DELTA) return;

    const cappedDelta =
      Math.sign(e.deltaY) * Math.min(Math.abs(e.deltaY), MAX_DELTA);
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
    step(direction);
  };
}

export function makeKeyHandler({ step, goTo, pageKeys }) {
  return (e) => {
    if (STEP_KEYS.has(e.key)) {
      e.preventDefault();
      step('down');
    } else if (STEP_BACK_KEYS.has(e.key)) {
      e.preventDefault();
      step('up');
    } else if (e.key === 'Home') {
      e.preventDefault();
      goTo(pageKeys[0]);
    } else if (e.key === 'End') {
      e.preventDefault();
      goTo(pageKeys[pageKeys.length - 1]);
    }
  };
}

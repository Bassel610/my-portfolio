'use client';
import { useEffect, useRef } from 'react';
import { usePrefersReducedMotion } from '@/hooks/shared';

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let vantaEffect;
    let canceled = false;

    Promise.all([import('three'), import('vanta/dist/vanta.net.min')]).then(
      ([THREE, VantaModule]) => {
        if (canceled) return;
        const NET = VantaModule.default ?? VantaModule;
        vantaEffect = NET({
          el: vantaRef.current,
          THREE,
          mouseControls: false,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0xff3f81,
          backgroundColor: 0x23153c,
          points: 12.0,
          maxDistance: 23.0,
          spacing: 20.0,
        });
      }
    );

    const handleVisibility = () => {
      if (!vantaEffect) return;
      if (document.hidden && vantaEffect.pause) vantaEffect.pause();
      else if (!document.hidden && vantaEffect.play) vantaEffect.play();
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      canceled = true;
      document.removeEventListener('visibilitychange', handleVisibility);
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [prefersReducedMotion]);

  return (
    <div
      ref={vantaRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: prefersReducedMotion ? '#23153c' : undefined,
      }}
    />
  );
}

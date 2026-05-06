'use client';
import { useEffect, useRef } from 'react';
import Head from 'next/head';
import { usePrefersReducedMotion } from '@/hooks/shared';

export default function VantaBackground() {
  const vantaRef = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    let vantaEffect;
    let canceled = false;

    const threeScript = document.createElement('script');
    threeScript.src =
      'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
    threeScript.async = true;

    const vantaScript = document.createElement('script');
    vantaScript.src =
      'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js';
    vantaScript.async = true;

    threeScript.onload = () => {
      vantaScript.onload = () => {
        if (canceled) return;
        vantaEffect = window.VANTA.NET({
          el: vantaRef.current,
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
      };
      document.body.appendChild(vantaScript);
    };

    document.body.appendChild(threeScript);

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
    <>
      <Head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      </Head>
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
    </>
  );
}

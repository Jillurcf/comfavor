'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

type Scene3DProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  cameraPosition?: [number, number, number];
  cameraFov?: number;
  cameraNear?: number;
  cameraFar?: number;
  dpr?: [number, number];
  frameloop?: 'always' | 'demand' | 'never';
  logarithmicDepthBuffer?: boolean;
};

export default function Scene3D({
  children,
  className,
  containerClassName,
  cameraPosition = [0, 0, 6],
  cameraFov = 45,
  cameraNear = 0.1,
  cameraFar = 100,
  dpr = [1, 1.5] as [number, number],
  frameloop,
  logarithmicDepthBuffer = false,
}: Scene3DProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const effectiveFrameloop = reducedMotion
    ? ('demand' as const)
    : !inView
      ? ('demand' as const)
      : (frameloop ?? ('always' as const));

  return (
    <div ref={containerRef} className={containerClassName}>
      <Canvas
        camera={{ position: cameraPosition, fov: cameraFov, near: cameraNear, far: cameraFar }}
        dpr={dpr}
        frameloop={effectiveFrameloop}
        className={className}
        style={{ width: '100%', height: '100%' }}
        gl={{ alpha: false, logarithmicDepthBuffer }}
      >
        <color attach="background" args={['#0f172a']} />
        <AdaptiveDpr pixelated />
        {children}
      </Canvas>
    </div>
  );
}

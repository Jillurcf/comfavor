'use client';

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import SpotlightScene from '@/components/home/SpotlightScene';

function Loader() {
  return (
    <div className="flex h-[80vh] w-full items-center justify-center bg-black">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-white border-t-transparent" />
    </div>
  );
}

export default function SpotlightSection() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: [4.6, 2.2, -2.1], fov: 35, near: 0.1, far: 100 }}
          shadows
          dpr={[1, 1.5]}
          gl={{ alpha: false, antialias: true }}
          style={{ background: '#000000' }}
        >
          <AdaptiveDpr pixelated />
          <SpotlightScene />
        </Canvas>
      </Suspense>

      <div className="pointer-events-none absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-center text-white/60 text-xs">
        three.js — SpotLights
      </div>
    </section>
  );
}

'use client';

import React, { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { AdaptiveDpr } from '@react-three/drei';
import {
  Color,
  BufferGeometry,
  BufferAttribute,
  AdditiveBlending,
  type Points as ThreePoints,
} from 'three';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { BRAND, SECTION_THEMES, SCENE } from '@/lib/constants/brand';

type ThemeKey = keyof typeof SECTION_THEMES;

interface ParticleState {
  targetPos: Float32Array;
  currentPos: Float32Array;
  targetColors: Float32Array;
  currentColors: Float32Array;
}

const SEED_POSITIONS: [number, number, number][] = [];
const SEED_SPEEDS: number[] = [];
for (let i = 0; i < SCENE.transition.particleCount; i++) {
  const theta = ((i * 137.5) % 360) * (Math.PI / 180);
  const phi = Math.acos(((i * 2) % 200) / 100 - 1);
  SEED_POSITIONS.push([theta, phi, 0.3 + ((i * 7) % 70) / 100]);
  SEED_SPEEDS.push(0.3 + ((i * 13) % 50) / 100);
}

const SECTION_IDS: { id: string; theme: ThemeKey }[] = [
  { id: 'section-banner', theme: 'banner' },
  { id: 'section-services', theme: 'services' },
  { id: 'section-whychooseus', theme: 'whyChooseUs' },
  { id: 'section-cta', theme: 'cta' },
];

function makeParticlePositions(spread: number, count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    const [theta, phi, rFactor] = SEED_POSITIONS[i];
    const r = spread * rFactor;
    arr[i3] = r * Math.sin(phi) * Math.cos(theta);
    arr[i3 + 1] = r * Math.cos(phi);
    arr[i3 + 2] = r * Math.sin(phi) * Math.sin(theta) * 0.3;
  }
  return arr;
}

function makeParticleColors(color: Color, count: number): Float32Array {
  const arr = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    arr[i3] = color.r;
    arr[i3 + 1] = color.g;
    arr[i3 + 2] = color.b;
  }
  return arr;
}

function ParticleField() {
  const ref = useRef<ThreePoints>(null);
  const reducedMotion = useReducedMotion();
  const { viewport } = useThree();
  const [activeTheme, setActiveTheme] = useState<ThemeKey>('banner');
  const stateRef = useRef<ParticleState | null>(null);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTION_IDS.forEach(({ id, theme }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveTheme(theme);
        },
        { threshold: 0.3 },
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const count = SCENE.transition.particleCount;
  const spread = Math.max(viewport.width, viewport.height) * 1.5;

  const particleState = useMemo<ParticleState>(() => {
    const positions = makeParticlePositions(spread, count);
    const colors = makeParticleColors(new Color(BRAND.green), count);
    const state: ParticleState = {
      targetPos: new Float32Array(positions),
      currentPos: new Float32Array(positions),
      targetColors: new Float32Array(colors),
      currentColors: new Float32Array(colors),
    };
    return state;
  }, [spread, count]);

  useEffect(() => {
    stateRef.current = particleState;
  }, [particleState]);

  const updateTargets = useCallback(
    (theme: ThemeKey) => {
      const s = stateRef.current;
      if (!s) return;
      const t = SECTION_THEMES[theme];
      const pc = new Color(t.primary);
      const newTargetPos = makeParticlePositions(spread, count);
      const newTargetColors = makeParticleColors(pc, count);
      s.targetPos = newTargetPos;
      s.targetColors = newTargetColors;
    },
    [spread, count],
  );

  useEffect(() => {
    updateTargets(activeTheme);
  }, [activeTheme, updateTargets]);

  const geometry = useMemo(() => {
    const positions = new Float32Array(
      particleState.currentPos,
    );
    const colors = new Float32Array(
      particleState.currentColors,
    );
    const geo = new BufferGeometry();
    geo.setAttribute('position', new BufferAttribute(positions, 3));
    geo.setAttribute('color', new BufferAttribute(colors, 3));
    return geo;
  }, [particleState]);

  useFrame((_, delta) => {
    if (!ref.current || reducedMotion) return;
    const s = stateRef.current;
    if (!s) return;
    const pos = ref.current.geometry.attributes.position
      .array as Float32Array;
    const col = ref.current.geometry.attributes.color
      .array as Float32Array;
    const speed = SCENE.transition.morphSpeed;

    let changed = false;
    for (let i = 0; i < pos.length; i++) {
      const diff = s.targetPos[i] - s.currentPos[i];
      if (Math.abs(diff) > 0.001) {
        s.currentPos[i] += diff * speed * (delta * 30);
        pos[i] = s.currentPos[i];
        changed = true;
      }
      const cdiff = s.targetColors[i] - s.currentColors[i];
      if (Math.abs(cdiff) > 0.001) {
        s.currentColors[i] += cdiff * speed * (delta * 30);
        col[i] = s.currentColors[i];
        changed = true;
      }
    }
    if (changed) {
      ref.current.geometry.attributes.position.needsUpdate = true;
      ref.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        size={SCENE.transition.particleSize}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={AdditiveBlending}
      />
    </points>
  );
}

export default function SectionTransitionScene() {
  const reducedMotion = useReducedMotion();
  if (reducedMotion) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60, near: 0.1, far: 100 }}
        dpr={[1, 1.5]}
        frameloop="always"
        gl={{ alpha: true, antialias: false, logarithmicDepthBuffer: true }}
        style={{ background: 'transparent' }}
      >
        <AdaptiveDpr pixelated />
        <ParticleField />
      </Canvas>
    </div>
  );
}

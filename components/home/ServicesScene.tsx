'use client';

import React, { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Shape, ShapeGeometry, DoubleSide, type Mesh } from 'three';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { BRAND, SCENE } from '@/lib/constants/brand';
import { useViewport } from '@/hooks/use-viewport';

type HexConfig = {
  position: [number, number, number];
  color: string;
  orbitSpeed: number;
  orbitRadius: number;
  phase: number;
};

function seededHexProps(i: number, count: number): Omit<HexConfig, 'color'> {
  const angle = (i / count) * Math.PI * 2;
  const spread = 8;
  return {
    position: [
      Math.cos(angle * 2.3) * spread * (0.6 + ((i * 3) % 5) / 10),
      Math.sin(angle * 1.7) * spread * 0.5 * (0.6 + ((i * 7) % 5) / 10),
      ((i % 5) - 2) * 0.8 - 1,
    ] as [number, number, number],
    orbitSpeed: 0.1 + ((i * 11) % 20) / 100,
    orbitRadius: 0.3 + ((i * 13) % 50) / 100,
    phase: ((i * 137.5) % 360) * (Math.PI / 180),
  };
}

function HexagonShape({
  position,
  color,
  index,
  orbitSpeed,
  orbitRadius,
  phase,
}: HexConfig & { index: number }) {
  const reducedMotion = useReducedMotion();
  const ref = useRef<Mesh>(null);
  const basePos = useMemo(() => position, [position]);

  const geometry = useMemo(() => {
    const shape = new Shape();
    const radius = 0.3;
    for (let i = 0; i < 6; i++) {
      const a = (Math.PI / 3) * i - Math.PI / 6;
      const x = radius * Math.cos(a);
      const y = radius * Math.sin(a);
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    return new ShapeGeometry(shape);
  }, []);

  useFrame((state, delta) => {
    if (!ref.current || reducedMotion) return;
    ref.current.rotation.z += delta * 0.003 * (1 + index * 0.2);
    const t = state.clock.elapsedTime * orbitSpeed + phase;
    ref.current.position.x = basePos[0] + Math.cos(t) * orbitRadius;
    ref.current.position.y = basePos[1] + Math.sin(t) * orbitRadius * 0.5;
    const glow = Math.sin(state.clock.elapsedTime * 0.5 + phase) * 0.5 + 0.5;
    ref.current.scale.setScalar(0.8 + glow * 0.4);
  });

  return (
    <mesh ref={ref} position={position} geometry={geometry}>
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.15}
        side={DoubleSide}
      />
    </mesh>
  );
}

export default function ServicesScene() {
  const { isMobile } = useViewport();

  const hexagons: (HexConfig & { index: number })[] = useMemo(() => {
    if (isMobile) return [];

    const colors = [BRAND.green, BRAND.dark, BRAND.gray];
    const result: (HexConfig & { index: number })[] = [];
    const count = SCENE.services.hexagonCount;

    for (let i = 0; i < count; i++) {
      const props = seededHexProps(i, count);
      result.push({
        ...props,
        color: colors[i % colors.length],
        index: i,
      });
    }

    return result;
  }, [isMobile]);

  if (isMobile || hexagons.length === 0) return null;

  return (
    <group>
      {hexagons.map((hex) => (
        <HexagonShape
          key={hex.index}
          position={hex.position}
          color={hex.color}
          index={hex.index}
          orbitSpeed={hex.orbitSpeed}
          orbitRadius={hex.orbitRadius}
          phase={hex.phase}
        />
      ))}
    </group>
  );
}
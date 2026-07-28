'use client';

import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, useHelper } from '@react-three/drei';
import { SpotLightHelper, type SpotLight, Vector3 } from 'three';

const COLORS = ['#FF7F00', '#00FF7F', '#7F00FF'] as const;

const INITIAL_POSITIONS: [number, number, number][] = [
  [1.5, 4, 4.5],
  [0, 4, 3.5],
  [-1.5, 4, 4.5],
];

type Targets = {
  position: Vector3;
  angle: number;
  penumbra: number;
};

function randomTargets(): Targets {
  return {
    position: new Vector3(
      (Math.random() * 3) - 1.5,
      (Math.random() * 1) + 1.5,
      (Math.random() * 3) - 1.5,
    ),
    angle: (Math.random() * 0.7) + 0.1,
    penumbra: Math.random() + 1,
  };
}

function AnimatedSpotlight({
  color,
  initialPosition,
}: {
  color: string;
  initialPosition: [number, number, number];
}) {
  const lightRef = useRef<SpotLight>(null!);

  useHelper(lightRef, SpotLightHelper, color);

  const targetsRef = useRef<Targets>(randomTargets());
  const currentRef = useRef({
    position: new Vector3(...initialPosition),
    angle: 0.3,
    penumbra: 0.2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      targetsRef.current = randomTargets();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useFrame(() => {
    const l = lightRef.current;
    if (!l) return;

    const t = 0.02;

    currentRef.current.position.lerp(targetsRef.current.position, t);
    currentRef.current.angle += (targetsRef.current.angle - currentRef.current.angle) * t;
    currentRef.current.penumbra += (targetsRef.current.penumbra - currentRef.current.penumbra) * t;

    l.position.copy(currentRef.current.position);
    l.angle = currentRef.current.angle;
    l.penumbra = currentRef.current.penumbra;
  });

  return (
    <spotLight
      ref={lightRef}
      color={color}
      intensity={10}
      castShadow
      angle={0.3}
      penumbra={0.2}
      decay={2}
      distance={50}
    />
  );
}

export default function SpotlightScene() {
  return (
    <>
      <OrbitControls
        target={[0, 0.5, 0]}
        maxPolarAngle={Math.PI / 2}
        minDistance={1}
        maxDistance={10}
        enableZoom={false}
      />

      <ambientLight intensity={0x444444 / 0xffffff} />

      <mesh rotation={[-Math.PI * 0.5, 0, 0]} position={[0, -0.05, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshPhongMaterial color="#808080" />
      </mesh>

      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.1, 0.2]} />
        <meshPhongMaterial color="#aaaaaa" />
      </mesh>

      {COLORS.map((color, i) => (
        <AnimatedSpotlight
          key={color}
          color={color}
          initialPosition={INITIAL_POSITIONS[i]}
        />
      ))}
    </>
  );
}

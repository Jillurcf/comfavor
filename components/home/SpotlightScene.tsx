'use client';

import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls, useHelper } from '@react-three/drei';
import { SpotLightHelper, type SpotLight, Vector3, CanvasTexture, type Group, Sprite, SpriteMaterial } from 'three';

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

type ParticleData = {
  tex: CanvasTexture;
  basePos: [number, number, number];
  scale: number;
  phase: number;
  speed: number;
};

function generateParticles(): ParticleData[] {
  const symbols = ['</>', '{}', '[]', '#', '⚡', '⌘', '⚙', '★', '⌨', '⎔', '☰', '✦', '⏻', '⊕'];
  const colors = ['#22c55e', '#FF7F00', '#00FF7F', '#7F00FF', '#60a5fa', '#f472b6', '#fbbf24'];
  const result: ParticleData[] = [];

  for (let i = 0; i < 30; i++) {
    const symbol = symbols[i % symbols.length];
    const color = colors[i % colors.length];

    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d')!;
    ctx.clearRect(0, 0, 128, 128);

    ctx.shadowColor = color;
    ctx.shadowBlur = 14;
    ctx.fillStyle = color;
    ctx.globalAlpha = 0.9;
    ctx.font = 'bold 64px monospace, "Segoe UI Symbol", "Apple Color Emoji", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(symbol, 64, 64);

    const tex = new CanvasTexture(canvas);
    tex.needsUpdate = true;

    result.push({
      tex,
      basePos: [
        (Math.random() - 0.5) * 7,
        Math.random() * 4 + 0.2,
        (Math.random() - 0.5) * 7,
      ],
      scale: Math.random() * 0.7 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.5 + 0.15,
    });
  }

  return result;
}

function TechParticles() {
  const groupRef = useRef<Group>(null!);
  const animRef = useRef<ParticleData[]>([]);

  useEffect(() => {
    const group = groupRef.current;
    if (!group) return;

    const data = generateParticles();
    animRef.current = data;

    const sprites: Sprite[] = [];

    for (const d of data) {
      const material = new SpriteMaterial({
        map: d.tex,
        transparent: true,
        depthWrite: false,
      });
      const sprite = new Sprite(material);
      sprite.position.set(d.basePos[0], d.basePos[1], d.basePos[2]);
      sprite.scale.set(d.scale, d.scale, d.scale);
      group.add(sprite);
      sprites.push(sprite);
    }

    return () => {
      sprites.forEach((s) => {
        group.remove(s);
        s.material.dispose();
        (s.material as SpriteMaterial).map?.dispose();
      });
      animRef.current = [];
    };
  }, []);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const group = groupRef.current;
    if (!group) return;
    const sprites = group.children as Sprite[];
    const data = animRef.current;
    for (let i = 0; i < sprites.length; i++) {
      const d = data[i];
      if (!d) continue;
      sprites[i].position.x = d.basePos[0] + Math.sin(t * d.speed + d.phase) * 0.5;
      sprites[i].position.y = d.basePos[1] + Math.sin(t * d.speed * 0.7 + d.phase + 1.2) * 0.35;
      sprites[i].position.z = d.basePos[2] + Math.cos(t * d.speed + d.phase) * 0.5;
    }
  });

  return <group ref={groupRef} />;
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
      <TechParticles />
    </>
  );
}

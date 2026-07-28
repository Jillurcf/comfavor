'use client';

import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { MathUtils, type Group } from 'three';
import { useReducedMotion } from '@/hooks/use-reduced-motion';

const labeldata = [
  { size: 0.01, scale: 0.0001, label: 'microscopic (1µm)' },
  { size: 0.01, scale: 0.1, label: 'minuscule (1mm)' },
  { size: 0.01, scale: 1.0, label: 'tiny (1cm)' },
  { size: 1, scale: 1.0, label: 'child-sized (1m)' },
  { size: 10, scale: 1.0, label: 'tree-sized (10m)' },
  { size: 100, scale: 1.0, label: 'building-sized (100m)' },
  { size: 1000, scale: 1.0, label: 'medium (1km)' },
  { size: 10000, scale: 1.0, label: 'city-sized (10km)' },
  { size: 3400000, scale: 1.0, label: 'moon-sized (3,400 Km)' },
  { size: 12000000, scale: 1.0, label: 'planet-sized (12,000 km)' },
  { size: 1400000000, scale: 1.0, label: 'sun-sized (1,400,000 km)' },
  { size: 7.47e12, scale: 1.0, label: 'solar system-sized (50Au)' },
  { size: 9.4605284e15, scale: 1.0, label: 'gargantuan (1 light year)' },
  { size: 3.08567758e16, scale: 1.0, label: 'ludicrous (1 parsec)' },
  { size: 1e19, scale: 1.0, label: 'mind boggling (1000 light years)' },
] as const;

function LabelGroup({
  data,
  index,
}: {
  data: (typeof labeldata)[number];
  index: number;
}) {
  const color = `hsl(${(index * 137.5) % 360}, 50%, 50%)`;

  return (
    <group position={[0, 0, -data.size * data.scale]}>
      <Text
        position={[1, (data.size / 4) * data.scale, 0]}
        fontSize={data.size}
        scale={data.scale}
        color={color}
        anchorX="left"
        anchorY="middle"
      >
        {data.label}
      </Text>
      <mesh
        position={[0, -(data.size / 4) * data.scale, 0]}
        scale={data.size * data.scale}
      >
        <sphereGeometry args={[0.5, 24, 12]} />
        <meshPhongMaterial color={color} specular="#050505" shininess={50} />
      </mesh>
    </group>
  );
}

export default function HeroScene() {
  const reducedMotion = useReducedMotion();
  const groupRef = useRef<Group>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const zoomPosRef = useRef(-100);
  const zoomSpeedRef = useRef(0.015);
  const minZoomSpeed = useRef(0.015);

  useEffect(() => {
    if (reducedMotion) return;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!isFinePointer) return;
    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener('mousemove', handleMouse, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const handleWheel = (e: WheelEvent) => {
      const dir = e.deltaY > 0 ? -1 : 1;
      zoomSpeedRef.current = dir / 10;
      minZoomSpeed.current = 0.001;
    };
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [reducedMotion]);

  useFrame((state) => {
    if (reducedMotion) return;

    const minzoom = labeldata[0].size * labeldata[0].scale * 1;
    const maxzoom =
      labeldata[labeldata.length - 1].size *
      labeldata[labeldata.length - 1].scale *
      100;

    let damping =
      Math.abs(zoomSpeedRef.current) > minZoomSpeed.current ? 0.95 : 1.0;

    const zoom = MathUtils.clamp(
      Math.pow(Math.E, zoomPosRef.current),
      minzoom,
      maxzoom,
    );
    zoomPosRef.current = Math.log(zoom);

    if (
      (zoom === minzoom && zoomSpeedRef.current < 0) ||
      (zoom === maxzoom && zoomSpeedRef.current > 0)
    ) {
      damping = 0.85;
    }

    zoomPosRef.current += zoomSpeedRef.current;
    zoomSpeedRef.current *= damping;

    const hAngle = 0.5 * Math.PI * (mouseRef.current.x - 0.5);
    const vAngle = 0.25 * Math.PI * (mouseRef.current.y - 0.5);

    state.camera.position.set(
      Math.sin(hAngle) * zoom,
      Math.sin(vAngle) * zoom,
      Math.cos(hAngle) * zoom,
    );
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <group ref={groupRef}>
      <ambientLight intensity={0x777777 / 0xffffff} />
      <directionalLight position={[100, 100, 100]} intensity={3} />

      {labeldata.map((data, i) => (
        <LabelGroup key={i} data={data} index={i} />
      ))}
    </group>
  );
}

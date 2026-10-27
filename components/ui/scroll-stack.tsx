'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';

export function ScrollStackItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`scroll-stack-card ${className}`.trim()}>
      {children}
    </div>
  );
}

interface ScrollStackProps {
  children: ReactNode;
  className?: string;
  itemStackDistance?: number;
  stackPosition?: string;
}

export default function ScrollStack({
  children,
  className = '',
  itemStackDistance = 30,
  stackPosition = '20%',
}: ScrollStackProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cards = Array.from(scrollerRef.current?.children ?? []) as HTMLElement[];
    if (!cards.length) return;

    cards.slice(0, -1).forEach((el, i) => {
      el.style.position = 'sticky';
      el.style.top = itemStackDistance
        ? `calc(${stackPosition} + ${itemStackDistance * i}px)`
        : stackPosition;
      el.style.zIndex = `${i}`;
    });
  }, [itemStackDistance, stackPosition]);

  return (
    <div className={className} ref={scrollerRef}>
      {children}
      <div className="scroll-stack-end pointer-events-none" aria-hidden />
    </div>
  );
}

'use client';

import {
  useLayoutEffect,
  useRef,
  useCallback,
  type ReactNode,
} from 'react';

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
  scaleEndPosition?: string;
  baseScale?: number;
  onStackComplete?: () => void;
}

export default function ScrollStack({
  children,
  className = '',
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  onStackComplete,
}: ScrollStackProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const stackCompletedRef = useRef(false);
  const cardTopsRef = useRef<number[]>([]);
  const endTopRef = useRef(0);
  const rafRef = useRef(0);
  const lastValuesRef = useRef<Map<number, { y: number; s: number }>>(new Map());

  const update = useCallback(() => {
    const cardTops = cardTopsRef.current;
    if (!cardTops.length) return;

    const scrollTop = window.scrollY;
    const vh = window.innerHeight;
    const stackPx = (parseFloat(stackPosition) / 100) * vh;
    const scalePx = (parseFloat(scaleEndPosition) / 100) * vh;
    const endTop = endTopRef.current;
    const cache = lastValuesRef.current;

    for (let i = 0; i < cardTops.length; i++) {
      const card = scrollerRef.current?.children[i] as HTMLElement | undefined;
      if (!card) continue;

      const cardTop = cardTops[i];
      const pinStart = cardTop - stackPx - itemStackDistance * i;
      const pinEnd = endTop - vh / 2;

      let translateY = 0;
      let scale = 1;

      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        const triggerEnd = cardTop - scalePx;
        const t = Math.min(1, Math.max(0, (scrollTop - pinStart) / (triggerEnd - pinStart)));
        const targetScale = baseScale + i * 0.04;
        scale = 1 - t * (1 - targetScale);
        translateY = scrollTop - cardTop + stackPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPx + itemStackDistance * i;
      }

      const prev = cache.get(i);
      if (prev && Math.abs(prev.y - translateY) < 0.5 && Math.abs(prev.s - scale) < 0.005) {
        continue;
      }
      cache.set(i, { y: translateY, s: scale });

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;

      if (i === cardTops.length - 1) {
        const stacked = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (stacked && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!stacked && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    }
  }, [stackPosition, scaleEndPosition, baseScale, itemStackDistance, onStackComplete]);

  useLayoutEffect(() => {
    const cards = Array.from(scrollerRef.current?.children ?? []) as HTMLElement[];
    if (!cards.length) return;

    const endEl = cards[cards.length - 1];
    const stackCards = cards.slice(0, -1);

    cardTopsRef.current = stackCards.map((c) => c.getBoundingClientRect().top + window.scrollY);
    endTopRef.current = endEl.getBoundingClientRect().top + window.scrollY;

    stackCards.forEach((el, i) => {
      el.style.transformOrigin = 'top center';
      el.style.zIndex = `${i}`;
    });

    const valuesCache = lastValuesRef.current;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafRef.current);
      stackCompletedRef.current = false;
      valuesCache.clear();
    };
  }, [update]);

  return (
    <div className={className} ref={scrollerRef}>
      {children}
      <div className="scroll-stack-end pointer-events-none" aria-hidden />
    </div>
  );
}

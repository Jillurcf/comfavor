'use client';

import { useState, useEffect } from 'react';

type Viewport = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  width: number;
};

export function useViewport(): Viewport {
  const [viewport, setViewport] = useState<Viewport>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    width: 1200,
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      setViewport({
        isMobile: w < 768,
        isTablet: w >= 768 && w < 1024,
        isDesktop: w >= 1024,
        width: w,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
}

'use client';

import React from 'react';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';

const images = ['/website.jpg', '/BannerImg_2.jpg', '/digitalMarketing.jpg'];

export default function Banner() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on('select', onSelect);
    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  return (
    <Carousel setApi={setApi} className="w-full">
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Slide {current + 1} of {images.length}
      </div>

      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="relative h-[40vh] md:h-[60vh] w-full">
              <Image
                src={src}
                alt={`Comfavor banner showing ${src.replace(/^\//, '').replace(/\.\w+$/, '')}`}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}

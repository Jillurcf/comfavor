'use client';

import React from 'react';
import Hyperspeed from '@/components/home/Hyperspeed';
import OptionWheel from '@/components/home/OptionWheel';
import Link from 'next/link';

export default function Banner() {
  return (
    <section id="section-banner" className="relative w-full min-h-[70vh] md:min-h-[80vh] bg-black overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Hyperspeed />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[5] bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />

      <div className="absolute left-0 top-0 z-[6] h-full w-104">
        <OptionWheel side="left" />
      </div>

      <div className="pointer-events-none relative z-10 flex min-h-[70vh] md:min-h-[80vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
          Comfavor
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80 md:text-xl">
          We build the digital backbone for Bangladeshi businesses — websites, mobile apps, design,
          and marketing.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row pointer-events-auto">
          <Link
            href="/contact"
            className="rounded-xl bg-(--primary-color) px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl"
          >
            Get a Free Consultation
          </Link>
          <Link
            href="/services"
            className="rounded-xl border border-white/30 bg-white/10 px-8 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-sm transition-all hover:bg-white/20"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

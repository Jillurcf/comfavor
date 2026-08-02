'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ElectricBorder from '@/components/ui/electric-border';

export default function DownloadAppCard() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;
  const callNumber = () => {
    window.location.href = 'tel:+8801643989705';
  };

  return (
    <div className="fixed bottom-8 md:bottom-6 right-6 z-50 w-72">
      <ElectricBorder
      color="#22c55e"
      borderRadius={16}
      chaos={0.12}
      speed={1}
    >
      <div className="rounded-2xl bg-white md:bg-transparent shadow-2xl p-3 md:p-4 relative">
        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          aria-label="Close download card"
          className="absolute top-1 right-1 flex h-9 w-9 md:h-11 md:w-11 items-center justify-center text-gray-600 hover:text-black"
        >
          <X size={16} />
        </button>

        {/* Content */}
        <h6 className="text-xs md:text-base font-semibold text-orange-600">Upcoming...</h6>
        <h3 className="text-base md:text-lg font-semibold text-gray-900 md:text-white">
          Download Our App 🚀
        </h3>

        <p className="hidden md:block text-sm text-gray-400 mt-1">
          Get exclusive offers and a faster experience on mobile.
        </p>

        <Button
        disabled
          onClick={callNumber}
          className="mt-2 md:mt-4 h-9 md:h-10 w-full text-xs md:text-sm bg-(--primary-color) rounded-2xl text-white hover:bg-gray-800"
        >
          Download
        </Button>
      </div>
    </ElectricBorder>

    </div>  );
}

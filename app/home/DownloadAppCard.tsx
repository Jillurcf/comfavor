'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ElectricBorder from '@/components/ui/electric-border';

export default function DownloadAppCard() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;
  const callNumber = () => {
    window.location.href = 'tel:+8801643989705';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-72">
      <ElectricBorder
      color="#22c55e"
      borderRadius={16}
      chaos={0.12}
      speed={1}
      // className="fixed bottom-6 right-6 z-50 w-72"
    >
      <div className="rounded-2xl bg-transparent shadow-2xl p-4 relative">
        {/* Close Button */}
        <button
          onClick={() => setVisible(false)}
          aria-label="Close download card"
          className="absolute top-1 right-1 flex h-11 w-11 items-center justify-center text-gray-600 hover:text-black"
        >
          <X size={18} />
        </button>

        {/* Content */}
        <h6 className=" font-semibold text-orange-600">Upcoming...</h6>
        <h3 className="text-lg font-semibold text-white">Download Our App 🚀</h3>
        <div className="flex items-center gap-2">
          {/* <h3 className="text-lg font-semibold text-white">ঘরের খাবার</h3> */}
          {/* <Image src="/globe.svg" alt="" width={20} height={20} /> */}
        </div>

        <p className="text-sm text-gray-400 mt-1">
          Get exclusive offers and a faster experience on mobile.
        </p>

        <Button
        disabled
          onClick={callNumber}
          className="mt-4 w-full bg-(--primary-color) rounded-2xl text-white hover:bg-gray-800"
        >
          Download
        </Button>
      </div>
    </ElectricBorder>

    </div>  );
}

'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function DownloadAppCard() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;
  const callNumber = () => {
    window.location.href = 'tel:+8801643989705';
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-72 rounded-2xl bg-white shadow-2xl border border-gray-100 p-4">
      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        aria-label="Close download card"
        className="absolute top-1 right-1 flex h-11 w-11 items-center justify-center text-gray-600 hover:text-black"
      >
        <X size={18} />
      </button>

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-900">Download Our App 🚀</h3>
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-semibold text-gray-900">ঘরের খাবার</h3>
        <Image src="/globe.svg" alt="" width={20} height={20} />
      </div>

      <p className="text-sm text-gray-600 mt-1">
        Get exclusive offers and a faster experience on mobile.
      </p>

      <Button
        onClick={callNumber}
        className="mt-4 w-full bg-(--primary-color) rounded-2xl text-white hover:bg-gray-800"
      >
        Download
      </Button>
    </div>
  );
}

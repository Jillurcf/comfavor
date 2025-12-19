"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function DownloadAppCard() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 w-72 rounded-xl bg-white shadow-2xl border p-4">
      {/* Close Button */}
      <button
        onClick={() => setVisible(false)}
        className="absolute top-2 right-2 text-gray-500 hover:text-black"
      >
        <X size={18} />
      </button>

      {/* Content */}
      <h3 className="text-lg font-semibold text-gray-900">
        Download Our App 🚀
      </h3>

      <p className="text-sm text-gray-600 mt-1">
        Get exclusive offers and a faster experience on mobile.
      </p>

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        <a
          href="#"
          className="flex-1 bg-black text-white text-sm py-2 rounded-lg text-center hover:bg-gray-800"
        >
          App Store
        </a>
        <a
          href="#"
          className="flex-1 bg-green-600 text-white text-sm py-2 rounded-lg text-center hover:bg-green-700"
        >
          Play Store
        </a>
      </div>
    </div>
  );
}

'use client';

export default function HeroSceneLoader() {
  return (
    <div className="relative h-[40vh] md:h-[60vh] w-full flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-(--primary-color) border-t-transparent" />
        <p className="text-sm text-gray-500">Loading 3D experience…</p>
      </div>
    </div>
  );
}

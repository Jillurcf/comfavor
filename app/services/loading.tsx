export default function ServicesLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-2 h-9 w-48 animate-pulse rounded bg-gray-200" />
      <div className="mb-10 h-5 w-80 animate-pulse rounded bg-gray-200" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-gray-200 p-6 shadow-lg">
            <div className="mb-4 h-6 w-3/4 animate-pulse rounded bg-gray-200" />
            <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200" />
            <div className="mb-2 h-4 w-full animate-pulse rounded bg-gray-200" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
          </div>
        ))}
      </div>
    </div>
  );
}

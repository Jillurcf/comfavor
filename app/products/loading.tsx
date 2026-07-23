export default function ProductsLoading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-2 h-9 w-48 animate-pulse rounded bg-gray-200" />
      <div className="mb-10 h-5 w-96 animate-pulse rounded bg-gray-200" />
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-2xl shadow-lg">
            <div className="h-48 animate-pulse bg-gray-200" />
            <div className="flex flex-col gap-3 p-6">
              <div className="h-5 w-32 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-48 animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
              <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

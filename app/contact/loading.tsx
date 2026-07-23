export default function ContactLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-4 mx-auto h-10 w-48 animate-pulse rounded bg-gray-200" />
      <div className="mx-auto mb-16 h-5 w-96 max-w-2xl animate-pulse rounded bg-gray-200" />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-10 w-full animate-pulse rounded bg-gray-200" />
          ))}
        </div>
        <div className="space-y-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="h-10 w-10 shrink-0 animate-pulse rounded-full bg-gray-200" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-16 animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

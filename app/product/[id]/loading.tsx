export default function ProductLoading() {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
      <div className="bg-white rounded-2xl border border-[#e2e8f4] overflow-hidden animate-pulse">
        <div className="flex flex-col md:flex-row">
          {/* Image skeleton */}
          <div className="md:w-1/2 bg-gray-200 aspect-square md:min-h-[480px]" />

          {/* Details skeleton */}
          <div className="md:w-1/2 p-8 flex flex-col gap-5">
            <div className="h-6 bg-gray-200 rounded-full w-24" />
            <div className="h-8 bg-gray-200 rounded w-3/4" />
            <div className="h-8 bg-gray-200 rounded w-1/3" />
            <div className="space-y-2">
              <div className="h-4 bg-gray-200 rounded w-full" />
              <div className="h-4 bg-gray-200 rounded w-5/6" />
              <div className="h-4 bg-gray-200 rounded w-4/6" />
            </div>
            <div className="h-12 bg-gray-200 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

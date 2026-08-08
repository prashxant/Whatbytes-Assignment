"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { categories, MAX_PRICE } from "@/lib/products";

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") ?? "All";
  const currentMaxPrice = Number(searchParams.get("maxPrice") ?? MAX_PRICE);

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === "" || value === "All") {
        params.delete(key);
      } else {
        params.set(key, value);
      }
      router.push(`/?${params.toString()}`, { scroll: false });
    },
    [router, searchParams]
  );

  return (
    <aside
      className="w-full rounded-xl p-5 flex flex-col gap-6"
      style={{ backgroundColor: "var(--color-sidebar-bg)", border: "1px solid var(--color-border)" }}
      aria-label="Product filters"
    >
      <h2 className="font-bold text-lg text-gray-800">Filters</h2>

      {/* Category */}
      <section aria-labelledby="category-heading">
        <h3 id="category-heading" className="font-semibold text-sm text-gray-700 mb-3">
          Category
        </h3>
        <ul className="flex flex-col gap-2">
          {categories.map((cat) => (
            <li key={cat}>
              <label
                className="flex items-center gap-2.5 cursor-pointer group"
                id={`category-label-${cat.toLowerCase()}`}
              >
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={currentCategory === cat}
                  onChange={() => updateParam("category", cat)}
                  className="w-4 h-4 accent-[#1a56db] cursor-pointer"
                  id={`category-radio-${cat.toLowerCase()}`}
                  aria-label={`Filter by ${cat}`}
                />
                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                  {cat}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      {/* Price Range */}
      <section aria-labelledby="price-heading">
        <h3 id="price-heading" className="font-semibold text-sm text-gray-700 mb-3">
          Price
        </h3>
        <input
          id="price-range-slider"
          type="range"
          min={0}
          max={MAX_PRICE}
          step={50}
          value={currentMaxPrice}
          onChange={(e) => updateParam("maxPrice", e.target.value)}
          aria-label={`Maximum price: $${currentMaxPrice}`}
          aria-valuemin={0}
          aria-valuemax={MAX_PRICE}
          aria-valuenow={currentMaxPrice}
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>0</span>
          <span className="font-medium text-gray-700">${currentMaxPrice}</span>
          <span>{MAX_PRICE}</span>
        </div>
      </section>
    </aside>
  );
}

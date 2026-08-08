"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { categories, brands, MAX_PRICE } from "@/lib/products";

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category") ?? "All";
  const currentBrand = searchParams.get("brand") ?? "All";
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
      className="w-full rounded-xl p-5 flex flex-col gap-6 bg-[#1053a6] text-white shadow-md"
      aria-label="Product filters"
    >
      <h2 className="font-bold text-xl text-white tracking-wide">Filters</h2>

      {/* Category Filter */}
      <section aria-labelledby="category-heading">
        <h3 id="category-heading" className="font-semibold text-sm text-blue-100 mb-3">
          Category
        </h3>
        <ul className="flex flex-col gap-2">
          {categories.map((cat) => (
            <li key={cat}>
              <label
                className="flex items-center gap-2.5 cursor-pointer group select-none text-sm"
                id={`category-label-${cat.toLowerCase()}`}
              >
                <input
                  type="radio"
                  name="category"
                  value={cat}
                  checked={currentCategory === cat}
                  onChange={() => updateParam("category", cat)}
                  className="w-4 h-4 accent-white cursor-pointer"
                  id={`category-radio-${cat.toLowerCase()}`}
                  aria-label={`Filter by ${cat}`}
                />
                <span className={`transition-colors ${currentCategory === cat ? "font-semibold text-white" : "text-blue-100 group-hover:text-white"}`}>
                  {cat}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </section>

      {/* Price Range */}
      <section aria-labelledby="price-heading">
        <h3 id="price-heading" className="font-semibold text-sm text-blue-100 mb-3">
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
          className="w-full cursor-pointer accent-white"
          aria-label={`Maximum price: $${currentMaxPrice}`}
          aria-valuemin={0}
          aria-valuemax={MAX_PRICE}
          aria-valuenow={currentMaxPrice}
        />
        <div className="flex justify-between text-xs text-blue-200 mt-1">
          <span>0</span>
          <span className="font-semibold text-white">${currentMaxPrice}</span>
          <span>{MAX_PRICE}</span>
        </div>
      </section>

      {/* Brand Filter (Optional Requirement) */}
      <section aria-labelledby="brand-heading">
        <h3 id="brand-heading" className="font-semibold text-sm text-blue-100 mb-3">
          Brand
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {brands.map((b) => (
            <button
              key={b}
              type="button"
              id={`brand-pill-${b.toLowerCase()}`}
              onClick={() => updateParam("brand", b)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                currentBrand === b
                  ? "bg-white text-[#1053a6] font-bold shadow-sm"
                  : "bg-white/10 text-blue-100 hover:bg-white/20 hover:text-white"
              }`}
            >
              {b}
            </button>
          ))}
        </div>
      </section>
    </aside>
  );
}

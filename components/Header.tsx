"use client";

import Link from "next/link";
import { ShoppingCart, Search, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState, useEffect } from "react";

export default function Header() {
  const { totalItems } = useCart();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") ?? ""
  );

  // Sync with URL on navigation
  useEffect(() => {
    setSearchValue(searchParams.get("search") ?? "");
  }, [searchParams]);

  const handleSearch = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set("search", value);
      } else {
        params.delete("search");
      }
      router.push(`/?${params.toString()}`);
    },
    [router, searchParams]
  );

  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-white font-bold text-2xl tracking-tight shrink-0 hover:opacity-90 transition-opacity"
          id="header-logo"
        >
          Logo
        </Link>

        {/* Search bar */}
        <div className="flex-1 max-w-xl mx-auto relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            size={16}
          />
          <input
            id="search-input"
            type="search"
            placeholder="Search for products..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch(searchValue);
            }}
            onBlur={() => handleSearch(searchValue)}
            className="w-full pl-9 pr-4 py-2 rounded-lg text-sm bg-white text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-300 transition"
            aria-label="Search for products"
          />
        </div>

        {/* Cart & Profile on the right */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/cart"
            id="cart-icon-link"
            className="relative flex items-center gap-2 bg-[#1a56db] hover:bg-[#1447b8] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            aria-label={`Cart, ${totalItems} items`}
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <span
                className="absolute -top-2 -right-2 min-w-[20px] h-5 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full px-1"
                aria-hidden="true"
              >
                {totalItems > 99 ? "99+" : totalItems}
              </span>
            )}
          </Link>

          {/* Profile / Avatar */}
          <button
            id="profile-avatar-btn"
            type="button"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="User Profile"
            title="User Profile"
          >
            <User size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

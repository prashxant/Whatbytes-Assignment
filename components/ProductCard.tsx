"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Star } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import clsx from "clsx";

interface ProductCardProps {
  product: Product;
}

function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${rating} out of ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={clsx(
            i < Math.floor(rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"
          )}
        />
      ))}
    </div>
  );
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <Link
      href={`/product/${product.id}`}
      id={`product-card-${product.id}`}
      className="group block bg-white rounded-xl border border-[#e2e8f4] overflow-hidden hover:shadow-lg hover:border-[#c7d4ee] transition-all duration-200 hover:-translate-y-0.5"
    >
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-50 overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card body */}
      <div className="p-4 flex flex-col gap-2">
        <h2 className="font-semibold text-gray-800 text-sm leading-tight line-clamp-2">
          {product.title}
        </h2>

        <p className="text-gray-900 font-bold text-base">${product.price}</p>

        {product.rating && (
          <StarRating rating={product.rating} />
        )}

        <button
          id={`add-to-cart-${product.id}`}
          onClick={handleAddToCart}
          aria-label={`Add ${product.title} to cart`}
          className={clsx(
            "mt-1 w-full py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200",
            added
              ? "bg-green-500"
              : "bg-[#1a56db] hover:bg-[#1447b8] active:scale-95"
          )}
        >
          {added ? "Added ✓" : "Add to Cart"}
        </button>
      </div>
    </Link>
  );
}

export { StarRating };

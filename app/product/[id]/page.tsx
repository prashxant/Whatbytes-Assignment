"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { StarRating } from "@/components/ProductCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Minus, Plus, ShoppingCart } from "lucide-react";
import { Suspense, useState, use } from "react";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors"
          id="back-to-listing"
        >
          <ArrowLeft size={16} />
          Back to listing
        </Link>

        <div className="bg-white rounded-2xl border border-[#e2e8f4] overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Section */}
            <div className="md:w-1/2 bg-gray-50 relative aspect-square md:aspect-auto md:min-h-[480px]">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>

            {/* Details Section */}
            <div className="md:w-1/2 p-8 flex flex-col gap-5">
              {/* Category badge */}
              <span className="inline-block text-xs font-semibold uppercase tracking-wider bg-blue-50 text-blue-700 px-3 py-1 rounded-full w-fit">
                {product.category}
              </span>

              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                {product.title}
              </h1>

              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold text-gray-900">
                  ${product.price}
                </span>
                {product.rating && (
                  <div className="flex items-center gap-1.5">
                    <StarRating rating={product.rating} />
                    {product.reviewCount && (
                      <span className="text-sm text-gray-400">
                        ({product.reviewCount})
                      </span>
                    )}
                  </div>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed text-sm">
                {product.description}
              </p>

              <div className="flex gap-2 text-sm text-gray-500">
                <span className="font-medium text-gray-700">Brand:</span>
                <span>{product.brand}</span>
              </div>

              {/* Quantity selector */}
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">Qty:</span>
                <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    id="quantity-decrease"
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-40"
                    disabled={quantity <= 1}
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span
                    id="quantity-display"
                    className="w-12 text-center font-semibold text-gray-800"
                    aria-live="polite"
                    aria-label={`Quantity: ${quantity}`}
                  >
                    {quantity}
                  </span>
                  <button
                    id="quantity-increase"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Add to cart */}
              <button
                id="add-to-cart-detail"
                onClick={handleAdd}
                className={`flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-white font-semibold text-base transition-all duration-200 active:scale-95 ${
                  added
                    ? "bg-green-500"
                    : "bg-[#1a56db] hover:bg-[#1447b8]"
                }`}
                aria-label={`Add ${product.title} to cart`}
              >
                <ShoppingCart size={18} />
                {added ? "Added to Cart ✓" : "Add to Cart"}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CartPage() {
  const { state, removeFromCart, updateQuantity, totalItems, totalPrice } =
    useCart();

  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>

      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-800 mb-6 transition-colors"
          id="back-to-shop"
        >
          <ArrowLeft size={16} />
          Continue Shopping
        </Link>

        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Your Cart{" "}
          {totalItems > 0 && (
            <span className="text-base font-normal text-gray-400">
              ({totalItems} {totalItems === 1 ? "item" : "items"})
            </span>
          )}
        </h1>

        {state.items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-5 text-center">
            <ShoppingBag className="text-gray-200" size={72} />
            <p className="text-xl font-semibold text-gray-400">
              Your cart is empty
            </p>
            <p className="text-sm text-gray-400">
              Looks like you haven&apos;t added anything yet.
            </p>
            <Link
              href="/"
              id="shop-now-btn"
              className="mt-2 bg-[#1a56db] hover:bg-[#1447b8] text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart items */}
            <div className="flex-1 flex flex-col gap-4">
              {state.items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  id={`cart-item-${product.id}`}
                  className="bg-white rounded-xl border border-[#e2e8f4] p-4 flex gap-4 items-start hover:shadow-sm transition-shadow"
                >
                  {/* Image */}
                  <Link
                    href={`/product/${product.id}`}
                    className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-50 shrink-0 hover:opacity-90 transition-opacity"
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${product.id}`}
                      className="font-semibold text-gray-800 text-sm hover:text-[#1a56db] transition-colors line-clamp-2"
                    >
                      {product.title}
                    </Link>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {product.category} · {product.brand}
                    </p>
                    <p className="text-base font-bold text-gray-900 mt-1">
                      ${product.price}
                    </p>
                  </div>

                  {/* Controls */}
                  <div className="flex flex-col items-end gap-3">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                      <button
                        id={`decrease-qty-${product.id}`}
                        onClick={() =>
                          updateQuantity(product.id, quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        aria-label={`Decrease quantity of ${product.title}`}
                      >
                        <Minus size={12} />
                      </button>
                      <span
                        className="w-10 text-center text-sm font-semibold"
                        aria-live="polite"
                      >
                        {quantity}
                      </span>
                      <button
                        id={`increase-qty-${product.id}`}
                        onClick={() =>
                          updateQuantity(product.id, quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        aria-label={`Increase quantity of ${product.title}`}
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <p className="text-sm font-bold text-gray-800">
                      ${(product.price * quantity).toFixed(2)}
                    </p>

                    {/* Remove */}
                    <button
                      id={`remove-item-${product.id}`}
                      onClick={() => removeFromCart(product.id)}
                      className="text-gray-300 hover:text-red-400 transition-colors"
                      aria-label={`Remove ${product.title} from cart`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <aside className="w-full lg:w-72 shrink-0">
              <div
                className="bg-white rounded-xl border border-[#e2e8f4] p-6 sticky top-24"
                aria-label="Order summary"
              >
                <h2 className="font-bold text-lg text-gray-800 mb-5">
                  Order Summary
                </h2>

                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>
                      Subtotal ({totalItems}{" "}
                      {totalItems === 1 ? "item" : "items"})
                    </span>
                    <span className="font-medium">${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <div className="border-t border-gray-100 pt-3 flex justify-between text-base font-bold text-gray-900">
                    <span>Total</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  id="checkout-btn"
                  className="mt-6 w-full bg-[#1a56db] hover:bg-[#1447b8] text-white py-3 rounded-xl font-semibold text-sm transition-colors active:scale-95"
                >
                  Proceed to Checkout
                </button>
              </div>
            </aside>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}

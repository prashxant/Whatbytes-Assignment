import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WhatBytes Store — Product Listing",
  description:
    "Browse our curated collection of electronics, clothing, and accessories. Filter by category, price, and brand.",
  keywords: ["shop", "products", "electronics", "clothing", "accessories"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#f4f6fb]">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}

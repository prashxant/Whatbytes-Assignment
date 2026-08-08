import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FilterSidebar from "@/components/FilterSidebar";
import ProductCard from "@/components/ProductCard";
import { products, MAX_PRICE } from "@/lib/products";
import { Package } from "lucide-react";

interface HomePageProps {
  searchParams: Promise<{
    category?: string;
    brand?: string;
    search?: string;
    maxPrice?: string;
  }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const category = params.category ?? "All";
  const brand = params.brand ?? "All";
  const search = (params.search ?? "").toLowerCase();
  const maxPrice = Number(params.maxPrice ?? MAX_PRICE);

  // Server-side filtering
  const filtered = products.filter((p) => {
    const matchesCategory = category === "All" || p.category === category;
    const matchesBrand = brand === "All" || p.brand.toLowerCase() === brand.toLowerCase();
    const matchesSearch =
      !search ||
      p.title.toLowerCase().includes(search) ||
      p.description.toLowerCase().includes(search) ||
      p.brand.toLowerCase().includes(search);
    const matchesPrice = p.price <= maxPrice;
    return matchesCategory && matchesBrand && matchesSearch && matchesPrice;
  });

  return (
    <>
      <Suspense fallback={null}>
        <Header />
      </Suspense>

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-56 shrink-0">
            <Suspense fallback={<div className="h-64 bg-[#1053a6] rounded-xl animate-pulse" />}>
              <FilterSidebar />
            </Suspense>
          </aside>

          {/* Main content */}
          <section className="flex-1 min-w-0" aria-label="Product listing">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Product Listing
            </h1>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
                <Package className="text-gray-300" size={64} />
                <p className="text-lg font-semibold text-gray-500">
                  No products found
                </p>
                <p className="text-sm text-gray-400">
                  Try adjusting your filters or search query.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}

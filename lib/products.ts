import { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    title: "Running Shoes",
    price: 99,
    category: "Clothing",
    brand: "Nike",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format",
    description:
      "Lightweight and breathable running shoes designed for comfort and performance. Perfect for daily training and long-distance runs.",
    rating: 4,
    reviewCount: 128,
  },
  {
    id: "2",
    title: "Wireless Headphones",
    price: 239,
    category: "Electronics",
    brand: "Sony",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format",
    description:
      "Premium wireless headphones with active noise cancellation and 30-hour battery life. Experience studio-quality sound anywhere.",
    rating: 5,
    reviewCount: 256,
  },
  {
    id: "3",
    title: "Backpack",
    price: 129,
    category: "Accessories",
    brand: "Herschel",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&auto=format",
    description:
      "Durable and stylish backpack with multiple compartments, laptop sleeve, and ergonomic shoulder straps. Perfect for work or travel.",
    rating: 4,
    reviewCount: 89,
  },
  {
    id: "4",
    title: "Smartwatch",
    price: 249,
    category: "Electronics",
    brand: "Apple",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format",
    description:
      "Feature-packed smartwatch with health monitoring, GPS, and seamless smartphone integration. Track your fitness and stay connected.",
    rating: 5,
    reviewCount: 412,
  },
  {
    id: "5",
    title: "Sunglasses",
    price: 149,
    category: "Accessories",
    brand: "RayBan",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop&auto=format",
    description:
      "Classic UV400 polarized sunglasses with durable acetate frames. Protect your eyes in style with timeless design.",
    rating: 4,
    reviewCount: 73,
  },
  {
    id: "6",
    title: "Digital Camera",
    price: 499,
    category: "Electronics",
    brand: "Canon",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=400&fit=crop&auto=format",
    description:
      "Compact digital camera with 24MP sensor, 4K video recording, and built-in Wi-Fi. Capture every moment in stunning detail.",
    rating: 4,
    reviewCount: 167,
  },
  {
    id: "7",
    title: "T-Shirt",
    price: 29,
    category: "Clothing",
    brand: "Zara",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format",
    description:
      "Soft, breathable 100% cotton t-shirt available in multiple colors. Casual everyday wear with a relaxed fit.",
    rating: 3,
    reviewCount: 45,
  },
  {
    id: "8",
    title: "Smartphone",
    price: 699,
    category: "Electronics",
    brand: "Samsung",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop&auto=format",
    description:
      "Lorem ipsum dolor amet, conssectetur euisagend.",
    rating: 4,
    reviewCount: 534,
  },
];

export const categories = ["All", "Electronics", "Clothing", "Accessories", "Home"] as const;
export const brands = ["All", "Nike", "Sony", "Herschel", "Apple", "RayBan", "Canon", "Zara", "Samsung"] as const;
export const MAX_PRICE = 1000;

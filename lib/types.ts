export interface Product {
  id: string;
  title: string;
  price: number;
  category: "Electronics" | "Clothing" | "Home" | "Accessories";
  brand: string;
  image: string;
  description: string;
  rating: number;
  reviewCount?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; productId: string }
  | { type: "UPDATE_QUANTITY"; productId: string; quantity: number }
  | { type: "CLEAR_CART" };

export interface FilterState {
  category: string;
  search: string;
  minPrice: number;
  maxPrice: number;
  brand: string;
}

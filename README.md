# WhatBytes Frontend Assignment — E-Commerce Store

A modern, responsive e-commerce product listing and shopping cart web application built with **Next.js 16 (App Router)**, **TypeScript**, **Tailwind CSS v4**, and **React Context**.

Designed and crafted to match the exact visual reference image provided for the WhatBytes assignment.

---

## 🚀 Live Demo

- **Vercel Live URL**: [https://whatbytes-assignment-prashxant.vercel.app](https://whatbytes-assignment-prashxant.vercel.app) *(Deploy to Vercel and paste your live deployment link here)*
- **GitHub Repository**: [https://github.com/prashxant/Whatbytes-Assignment](https://github.com/prashxant/Whatbytes-Assignment)

---

## ✨ Features

### 1. 🏠 Home Page (`/`) — Product Listing
- **Header**:
  - Distinctive logo on dark navy header background (`#1a3a6e`).
  - Search bar with instant string-matching and URL sync.
  - Cart button with dynamic item counter badge.
- **Sidebar Filters**:
  - **Category Filter**: Filter products by All, Electronics, Clothing, Accessories, or Home.
  - **Price Range Slider**: Interactive slider (0 to $1000).
  - **URL-based Sync**: All filter states sync to URL query parameters (e.g., `/?category=Electronics&maxPrice=500&search=watch`), allowing full bookmarking and shareability.
- **Responsive Product Grid**:
  - Grid layout: 3 columns on desktop, 2 on tablet, 1 on mobile.
  - Product cards featuring high-quality images, titles, pricing, star ratings, and interactive "Add to Cart" CTA buttons.
  - Empty state fallback message when no items match selected filters.
- **Footer**:
  - Quick category navigation links, About Us info, copyright details, and social media icons.

### 2. 📦 Product Detail Page (`/product/[id]`)
- Dynamic Routing using Next.js App Router (`/product/[id]`).
- Left-side product image layout and right-side detail overview.
- Detailed description, category pill badge, brand info, and star rating.
- Interactive **Quantity Selector** with increment (`+`) and decrement (`-`) controls.
- Interactive "Add to Cart" button with instant visual confirmation.
- Skeleton loading state (`loading.tsx`).

### 3. 🛒 Shopping Cart Page (`/cart`)
- Comprehensive cart item management:
  - Increment/decrement item quantity.
  - Instant removal of items with confirmation.
  - Subtotal calculation per product line.
- Sticky **Order Summary** box calculating subtotal and total cost.
- Empty cart state with "Shop Now" call to action.
- **State Persistence**: Cart state automatically syncs to `localStorage` and restores on page reload/navigation.

---

## 🛠️ Tech Stack & Libraries

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context (`CartContext`) + `useReducer`
- **Persistence**: Browser `localStorage`

---

## 📁 Folder Structure

```
.
├── app/
│   ├── cart/
│   │   └── page.tsx              # Cart page (/cart)
│   ├── product/
│   │   └── [id]/
│   │       ├── loading.tsx        # Skeleton loading UI
│   │       └── page.tsx          # Product Detail page (/product/[id])
│   ├── globals.css               # Global styles & Tailwind theme
│   ├── layout.tsx                # Root layout with CartProvider
│   └── page.tsx                  # Home page (/ product listing)
├── components/
│   ├── FilterSidebar.tsx         # Sidebar with Category radio & Price slider
│   ├── Footer.tsx                # Site footer
│   ├── Header.tsx                # Sticky top navbar with search & cart badge
│   └── ProductCard.tsx           # Product item card component
├── context/
│   └── CartContext.tsx           # Global cart state with localStorage persistence
├── lib/
│   ├── products.ts               # Static product data source
│   └── types.ts                  # TypeScript definitions
└── README.md
```

---

## 🏃 Getting Started Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/prashxant/Whatbytes-Assignment.git
   cd Whatbytes-Assignment
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Run the development server**:
   ```bash
   pnpm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:3000` to view the application.

---

## ⚡ Deployment to Vercel

1. Push your code to GitHub.
2. Import your repository into [Vercel](https://vercel.com/new).
3. Leave default settings (Framework Preset: Next.js).
4. Click **Deploy**.

---

## 📜 License

MIT License. Built for the WhatBytes Frontend Assignment.

# 🛍️ Exclusive Modern E-Commerce Platform

A high-performance, fully responsive E-Commerce web application built with cutting-edge frontend technologies to deliver a seamless and engaging shopping experience. **Exclusive** combines state-of-the-art UI design with efficient state management, optimized API handling, and modern development practices.

![Exclusive E-Commerce Platform](https://img.shields.io/badge/React-19.1.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue) ![Vite](https://img.shields.io/badge/Vite-7.1.0-green) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.11-cyan)

---

## ✨ Key Features

### 🛒 **E-Commerce Core**

**Product Catalog**: Browse through diverse product categories (Men's, Women's, Beauty, Electronics, Home, Sports, Motors)
**Product Details**: Comprehensive product information with image galleries, reviews, and specifications
**Shopping Cart**: Add, remove, and update product quantities with persistent storage
**Category Navigation**: Dynamic routing with organized product categories
**Search & Filter**: Advanced product filtering and sorting capabilities

### 🎨 **User Experience**

**Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
**Modern UI**: Clean, intuitive interface with smooth animations and transitions
**Flash Sales**: Time-limited offers and promotional sections
**Best Sellers**: Curated product recommendations
**New Arrivals**: Latest product showcases
**Store Benefits**: Clear value propositions and service highlights

### 🔧 **Technical Features**

**Type Safety**: Full TypeScript implementation for robust development
**State Management**: Redux Toolkit for predictable state updates
**Data Caching**: TanStack Query for efficient API data management
**Code Quality**: ESLint + Prettier for consistent code formatting
**Performance**: Optimized builds with Vite and lazy loading
**Accessibility**: WCAG compliant components and navigation

---

## 🛠️ Technology Stack

### **Frontend Framework**

**React 19.1.1** Latest React with concurrent features
**TypeScript 5.8.3** Type-safe JavaScript development
**Vite 7.1.0** Lightning-fast build tool and dev server

### **State Management & Data**

**Redux Toolkit 2.9.0** Modern Redux with simplified API
**React Redux 9.2.0** Official React bindings for Redux
**TanStack Query 5.85.9** Powerful data synchronization for React
**Axios 1.11.0** Promise-based HTTP client

### **Forms & Validation**

**React Hook Form 7.63.0** Performant, type-safe form management

### **Styling & UI**

**TailwindCSS 4.1.11** Utility-first CSS framework
**React Icons 5.5.0** Popular icon library
**React Spinners 0.17.0** Loading indicators

### **Routing & Navigation**

**React Router DOM 7.8.0** Declarative routing for React
**React Intersection Observer 9.16.0** Viewport intersection detection

### **SEO & Head Management**

**React Helmet** Document head and meta management (planned)

### **Development Tools**

**ESLint 9.32.0** JavaScript/TypeScript linting
**Prettier 3.6.2** Code formatting
**TypeScript ESLint 8.39.0** TypeScript-specific linting rules

---

## 📁 Project Structure

```
exclusive/
├── 📁 public/
│   ├── 📁 fonts/           # Custom web fonts
│   └── 📁 imgs/            # Static images and assets
│
├── 📁 src/
│   ├── 📁 assets/          # Application assets (logos, hero images)
│   │   ├── hero-img.webp
│   │   └── logo.png
│   ├── 📁 components/      # Reusable UI components
│   │   ├── DisplayCustomData.tsx
│   │   ├── DisplayProducts.tsx
│   │   ├── PrivateRoute.tsx
│   │   ├── ScrollToTop.tsx
│   │   ├── 📁 about/       # About page components
│   │   ├── 📁 cart/        # Shopping cart components
│   │   ├── 📁 category/    # Category page components
│   │   ├── 📁 contact/     # Contact page components
│   │   ├── 📁 home/        # Home page sections
│   │   │   ├── BestSelling.tsx
│   │   │   ├── ExploreProducts.tsx
│   │   │   ├── FlashSales.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── LimitedOffer.tsx
│   │   │   ├── NewArrival.tsx
│   │   │   └── StoreBenefits.tsx
│   │   ├── 📁 layout/      # Layout components
│   │   │   ├── AppLayout.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── TopHeader.tsx
│   │   │   └── 📁 Header/  # Header components & navigation
│   │   ├── 📁 productDetails/ # Product detail components
│   │   ├── 📁 profile/     # Profile page components
│   │   ├── 📁 signIn/      # Authentication components
│   │   ├── 📁 signUp/      # Registration components
│   │   └── 📁 ui/          # Reusable UI primitives
│   │
│   ├── 📁 hooks/           # Custom React hooks
│   │   ├── useCategories.ts
│   │   ├── useLogin.ts
│   │   ├── useProductById.tsx
│   │   └── useProducts.tsx
│   │
│   ├── 📁 pages/           # Application pages/routes
│   │   ├── About.tsx
│   │   ├── Cart.tsx
│   │   ├── CategoryProducts.tsx
│   │   ├── Contact.tsx
│   │   ├── Dashboard.tsx
│   │   ├── Home.tsx
│   │   ├── PageNotFound.tsx
│   │   ├── ProductDetails.tsx
│   │   ├── Profile.tsx
│   │   └── SignInPage.tsx
│   │
│   ├── 📁 services/        # API integrations
│   │   ├── authApi.ts            # Auth (DummyJSON) integration
│   │   └── productsApi.ts        # Products API integration
│   │
│   ├── 📁 store/           # Redux store configuration
│   │   ├── hooks.ts              # Typed Redux hooks
│   │   └── store.ts              # Store setup
│   │
│   ├── 📁 types/           # TypeScript definitions
│   │   ├── functions.ts          # Utility function types
│   │   ├── products.ts           # Product & API types
│   │   └── users.ts              # User & auth types
│   │
│   ├── 📁 utils/           # Helper functions
│   │   └── helpers.ts
│   ├── App.css                   # Global styles
│   ├── App.tsx                   # Root application component
│   ├── main.tsx                  # Application entry point
│   └── vite-env.d.ts
│
├── 📄 Configuration Files
├── .gitignore                    # Git ignore rules
├── .prettierrc                   # Prettier configuration
├── eslint.config.js             # ESLint configuration
├── index.html                    # HTML entry (Vite)
├── netlify.toml                  # Netlify deployment config
├── package.json                  # Dependencies and scripts
├── package-lock.json             # Lockfile
├── tsconfig.json                 # TypeScript configuration
├── tsconfig.app.json             # App-specific TS config
├── tsconfig.node.json            # Node-specific TS config
├── vite.config.ts                # Vite build configuration
└── readme.md
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mohamed-Y0/Exclusive
   ```

   ```bash
   cd exclusive
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 🌐 API Integration

The application integrates with **DummyJSON API** for product data:

**Base URL**: `https://dummyjson.com`
**Endpoints**: Products, Categories, Product Details
**Features**: Pagination, Sorting, Category Filtering

---

## 🎯 Development Roadmap

### ✅ Completed Features

- [x] Product catalog with categories
- [x] Shopping cart functionality
- [x] Responsive design implementation
- [x] Product detail pages
- [x] Category-based navigation
- [x] Lazy Loading
- [x] React Suspense
- [x] Authentication (DummyJSON): Login flow using React Query + Redux
- [x] Protected routes and admin guard
- [x] Profile page and navigation
- [x] Product filtering by sub-category and price sorting synced to URL params
- [x] Home sections: Flash Sales, Best Sellers, Explore Products, New Arrival, Store Benefits
- [x] Product details: image gallery, info, and reviews
- [x] 404 page for unknown routes
- [x] Mobile-friendly header with hamburger menu and icons
- [x] Cart: add/update/remove items, totals calculation, and localStorage persistence
- [x] Profile editing & Password Changing.

---

### 🗺️ Planned Features

- [ ] Order history and details in user profile
- [ ] Search across products with debounced input in header
- [ ] Pagination/infinite scroll for product lists
- [ ] Admin dashboard for product/category management
- [ ] Dark mode and theme customization
- [ ] Unit and integration tests (components, hooks, and store)

---

## 👨‍💻 Author

**Mohamed Y** _Front-end Developer_

---

<div align="center">
  <p>Made with ❤️ and modern web technologies</p>
</div>

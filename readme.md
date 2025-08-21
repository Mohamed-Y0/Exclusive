# Exclusive (Under Development & Planing)

high-performance, fully responsive E-Commerce web application built with a modern frontend tech stack to deliver a seamless and engaging shopping experience.
It combines state-of-the-art UI design with efficient state management and optimized API handling.

> Last Update (readme.md): 20/08/2025

---

## Docs List

**Note: My English is a bit bad, I'm trying my best here**

[Custom Hooks Docs hooks/HooksDocs.md](./src/hooks/HooksDocs.md)

[Stores Docs stores/StoresDocs.md](./src/stores/StoresDocs.md)

---

## Tech Stack

### **Core Technologies**

- **React 19.1.1** – Modern React with concurrent features
- **TypeScript 5.8.3** – Type-safe JavaScript development
- **Vite 7.1.0** – Fast build tool and dev server

### **UI & Styling**

- **Tailwind CSS 4.1.11** – Utility-first CSS framework
- **React Icons 5.5.0** – Popular icon library for React
- **React Slick 0.31.0** – Carousel/slider for images and products
- **Slick Carousel 1.8.1** – CSS/JS dependency for React Slick

### **State Management & Data Fetching**

- **Zustand 5.0.7** – Lightweight state management for shared state
- **Axios 1.11.0** – Promise-based HTTP client for API requests

### **Development & Code Quality**

- **ESLint 9.32.0** – Linting for consistent code style
- **Prettier 3.6.2** – Opinionated code formatter
- **TypeScript ESLint 8.39.0** – ESLint support for TypeScript
- **Prettier Plugin TailwindCSS 0.6.14** – TailwindCSS class sorting for Prettier

---

### **Project Sturcture**

```
public/
├── fonts/              # Project fonts
├── imgs/               # Public images (logos, favicons, etc.)
src/
├── assets/             # Static assets (images, icons, fonts used internally)
├── components/         # Reusable UI components
│   ├── home/           # Components specific to the Home page
│   ├── layout/         # Layout components (Header, Footer, Sidebar, etc.)
│   └── ui/             # Small UI building blocks (buttons, cards, modals, etc.)
│       └── DisplayData.tsx
├── hooks/              # Custom React hooks
├── pages/              # Application pages (used in routing, e.g., ProductsPage, CartPage)
├── services/           # API calls or external service integrations
├── stores/             # State management (Zustand Stores)
├── types/              # TypeScript types and interfaces
├── utils/              # Helper/utility functions (e.g., formatCurrency, calcDiscount)
├── App.css             # Global styles
├── App.tsx             # Root component
└── main.tsx            # Entry point

```

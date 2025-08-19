## useProductsStore.ts

### API Functions

- **fetchProducts(limit?, skip?)**  
  Fetches products globally. Accepts two optional arguments (`limit`, `skip`) to control pagination or data size. Often used in combination with the `useProducts` hook for custom fetching.

- **fetchProductById(id)**  
  Fetches a single product by its unique ID.

### State Management

- **setProducts**  
  Updates the global `products` state directly.  
  Useful when fetching custom data via `useProducts` hook but want to sync or override the global store (e.g., on the Products Page).  
  This prevents duplicated or conflicting data across different sections of the app.

### Notes

For isolated sections (FlashSales, BestSelling, etc.), use the `useProducts` hook instead of the global store.  
For full pages (like the Products Page), prefer fetching via the store to ensure a unified global state.

📖 See also: [hooks/HooksDocs.md](../hooks/HooksDocs.md)

> Last Update : 20/08/2025.

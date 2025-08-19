# Stores Docs/Notes

Here I write things like docs about the code and why I did it this way, focusing on the important points.

---

## useProductsStore.ts

- **fetchProducts(limit?, skip?)** → Used to fetch products (customized with `limit` and `skip`) from the API.
- **fetchProductById(id)** → For fetching a single product by its ID.

**Important:**

- **setProducts** → In [hooks/useProducts.ts](../hooks/useProducts.ts) I fetch custom data to avoid duplicated results.
  If I relied only on `fetchProducts` inside the store, the data would always be stored in the global `products` property → meaning _all_ components would show the same products across the app.
  So I created `setProducts` to manually update products when needed.
  This is especially useful later when displaying the **full products list** in the Products Page.

Feel free to read [hooks/HooksDocs.md](../hooks/HooksDocs.md).

> Last Update : 20/08/2025.

# Stores Docs/Notes

Here i write things like docs about the code and why i did that with this way and explanations, I'll try to focus in important tings.

---

## useProductsStore.ts

- fetchProducts: Takes to aruments (limit, skip) to fetch custom data or the whole data
- fetchProductById: Well, for fetching product bt id ? xd

**Important:**

- setProducts: In [hooks/useProducts.ts](../hooks/useProducts.ts) I will fetch custom data to prevent duplicate data, or in other words, when I rely on `fetchProducts` in the store, the data will be in the Products property and it will be the same in wthe whole app!, so I create `setProducts`, I'll get the data from the custom hook (`useProducts`) and set it using `setProducts` ,and it's specialy for future use when i display the whole data in products page.
  feel free to read [hooks/HooksDocs.md](../hooks//HooksDocs.md).

> Last Update : 19/08/2025.

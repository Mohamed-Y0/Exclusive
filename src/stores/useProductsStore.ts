import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { getProductById, getProducts } from "@/services/productsApi";
import type { ProductTypes } from "@/types/products";

type ProductState = {
  products: ProductTypes[];
  selectedProduct: ProductTypes | null;
  loading: boolean;
  error: string | null;
  fetchProducts: (limit?: number) => Promise<void>;
  fetchProductById: (id: number) => Promise<void>;
};

export const useProductsStore = create<ProductState>()(
  devtools(
    (set) => ({
      products: [],
      selectedProduct: null,
      loading: false,
      error: null,

      // To Get All Proudcts (30 By Default) or Pass limit 0 To Get All of Them.
      fetchProducts: async (limit) => {
        set({ loading: true, error: null });
        try {
          const data = await getProducts(limit);
          set({ products: data.products });
        } catch (err) {
          set({ error: `Failed To Fetch Products ${(err as Error).message}` });
        } finally {
          set({ loading: false });
        }
      },

      // To Get Specific Product By ID
      fetchProductById: async (id) => {
        set({ loading: true, error: null });
        try {
          const product = await getProductById(id);
          set({ selectedProduct: product });
        } catch (err) {
          set({ error: `Failed To Fetch Products ${(err as Error).message}` });
        } finally {
          set({ loading: false });
        }
      },
    }),
    { name: "ProductStore" },
  ),
);

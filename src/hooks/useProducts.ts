import { useEffect, useState } from "react";
import { useProductsStore } from "@/stores/useProductsStore";
import type { ProductTypes } from "@/types/products";

type HooksReturn = {
  products: ProductTypes[];
  loading: boolean;
  error: string | null;
};

export function useProducts(limit?: number, skip?: number): HooksReturn {
  const { fetchProducts } = useProductsStore();

  const [products, setProducts] = useState<ProductTypes[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchProducts(limit, skip)
      .then((res) => setProducts(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [limit, skip, fetchProducts]);

  return { products, loading, error };
}

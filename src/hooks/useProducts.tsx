import { getProducts } from "@/services/productsApi";
import type { ProductTypes } from "@/types/products";
import { useQuery } from "@tanstack/react-query";

function useProducts(limit?: number, skip?: number) {
  return useQuery<ProductTypes[], Error>({
    queryKey: ["products", limit, skip],
    queryFn: async () => {
      const data = await getProducts(limit, skip);
      return data.products;
    },
  });
}

export default useProducts;

import { getCategoryProducts } from "@/services/productsApi";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import {
  categoryGroups as categories,
  type ProductTypes,
} from "@/types/products";
import { useMemo } from "react";

function useCategories() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const categoryName = categories.find((c) => c.slug === category);

  const { isLoading, data, error } = useQuery<ProductTypes[], Error>({
    queryKey: ["category", category],

    queryFn: () => getCategoryProducts([...(categoryName?.items ?? [])]),

    enabled: !!categoryName,
  });

  const filters = useMemo(() => searchParams.getAll("c"), [searchParams]);
  const order = useMemo(() => searchParams.get("order"), [searchParams]);

  const filtered = useMemo<ProductTypes[]>(() => {
    const list: ProductTypes[] = data ?? [];
    if (!filters.length) return list;
    return list.filter((p) => filters.includes(p.category));
  }, [data, filters]);

  const computed = useMemo<ProductTypes[]>(() => {
    if (order === "asc" || order === "desc") {
      const copy = [...filtered];
      const isDesc = order === "desc";
      copy.sort((a, b) => (isDesc ? b.price - a.price : a.price - b.price));
      return copy;
    }

    return filtered;
  }, [filtered, order]);

  return { isLoading, error, data: computed };
}

export default useCategories;

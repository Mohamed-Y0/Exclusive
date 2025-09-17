import { getCategoryProducts } from "@/services/productsApi";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import {
  categoryGroups as categories,
  type ProductTypes,
} from "@/types/products";
import { useMemo } from "react";

// Custom hook to fetch and filter products by category
function useCategories() {
  const { category } = useParams(); // current category slug from the URL
  const [searchParams] = useSearchParams(); // current query params (?c=...&order=...)

  const categoryName = categories.find(
    // find the category object from our list
    (c) => c.slug === category,
  );

  // TanStack Query: fetch products whenever category changes (sorting handled client-side)
  const { isLoading, data, error } = useQuery<ProductTypes[], Error>({
    // queryKey acts like a unique cache ID → changing any value triggers a refetch
    queryKey: ["category", category],

    // queryFn is called when queryKey changes or cache is stale
    queryFn: () => getCategoryProducts([...(categoryName?.items ?? [])]),

    // avoid running until we actually have a category object
    enabled: !!categoryName,
  });

  const filters = useMemo(() => searchParams.getAll("c"), [searchParams]); // all selected category filters
  const order = useMemo(() => searchParams.get("order"), [searchParams]); // "asc" | "desc" | null

  // filter the fetched products client-side by selected sub-categories (if any)
  const filtered = useMemo<ProductTypes[]>(() => {
    const list: ProductTypes[] = data ?? [];
    if (!filters.length) return list;
    return list.filter((p) => filters.includes(p.category));
  }, [data, filters]);

  // Client-side sort by price, direction driven by URL param 'order' if provided
  const sorted = useMemo<ProductTypes[]>(() => {
    const copy = [...filtered];
    const isDesc = order === "desc";
    copy.sort((a, b) => (isDesc ? b.price - a.price : a.price - b.price));
    return copy;
  }, [filtered, order]);

  return { isLoading, error, data: sorted }; // expose filtered + sorted list
}

export default useCategories;

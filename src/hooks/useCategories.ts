import { getCategoryProducts } from "@/services/productsApi";
import type { ProductTypes } from "@/types/products";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

// Category type
export type CategoryItem = string;

export interface Category {
  name: string;
  items: CategoryItem[];
}

const categories: Category[] = [
  {
    name: "beauty",
    items: ["beauty", "skin-care", "fragrances"],
  },
  {
    name: "womens",
    items: [
      "womens-dresses",
      "womens-bags",
      "womens-shoes",
      "womens-watches",
      "womens-jewellery",
      "tops",
    ],
  },
  {
    name: "mens",
    items: ["mens-shirts", "mens-shoes", "mens-watches", "sunglasses"],
  },
  {
    name: "electronics",
    items: ["smartphones", "laptops", "tablets", "mobile-accessories"],
  },
  {
    name: "home",
    items: ["furniture", "home-decoration", "kitchen-accessories", "groceries"],
  },
  {
    name: "sports",
    items: ["sports-accessories"],
  },
  {
    name: "motors",
    items: ["motorcycle", "vehicle"],
  },
];

function useCategories(): {
  isLoading: boolean;
  error: unknown;
  data: ProductTypes[] | undefined;
} {
  const { category } = useParams();

  const categoryName: Category | undefined = categories.find(
    (c) => c.name === category,
  );

  const { isLoading, data, error }: UseQueryResult<ProductTypes[], unknown> =
    useQuery({
      queryKey: ["category", category],
      queryFn: () => getCategoryProducts([...(categoryName?.items ?? [])]),
      enabled: !!categoryName,
    });

  return { isLoading, error, data };
}

export default useCategories;

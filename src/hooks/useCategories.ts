import { getCategoryProducts } from "@/services/productsApi";
import type { ProductTypes } from "@/types/products";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";

// Category type
export type CategoryItem = string;

export interface Category {
  name: string;
  items: CategoryItem[];
}

const categories: Category[] = [
  { name: "beauty", items: ["beauty", "skin-care", "fragrances"] },
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
  { name: "sports", items: ["sports-accessories"] },
  { name: "motors", items: ["motorcycle", "vehicle"] },
];

function useCategories() {
  const { category } = useParams();
  const [searchParams] = useSearchParams();

  const categoryName: Category | undefined = categories.find(
    (c) => c.name === category,
  );

  const { isLoading, data, error }: UseQueryResult<ProductTypes[], unknown> =
    useQuery({
      queryKey: ["category", category],
      queryFn: () => getCategoryProducts([...(categoryName?.items ?? [])]),
      enabled: !!categoryName,
    });

  // اقرأ كل الفلاتر الموجودة في الـ URL
  const filters = searchParams.getAll("c"); // هيجيب Array
  // فلترة محلية بناء على القيم اللي في URL
  const filteredData = filters.length
    ? data?.filter((p) => filters.includes(p.category))
    : data;

  return { isLoading, error, data: filteredData };
}

export default useCategories;

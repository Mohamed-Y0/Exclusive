import { getCategoryProducts } from "@/services/productsApi";
import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { categoryGroups as categories } from "@/types/products";

// Category type
type CategoryItem = string;

interface Category {
  name: string;
  items: CategoryItem[];
}

// const categories: Category[] = [
//   { name: "beauty", items: ["beauty", "skin-care", "fragrances"] },
//   {
//     name: "womens",
//     items: [
//       "womens-dresses",
//       "womens-bags",
//       "womens-shoes",
//       "womens-watches",
//       "womens-jewellery",
//       "tops",
//     ],
//   },
//   {
//     name: "mens",
//     items: ["mens-shirts", "mens-shoes", "mens-watches", "sunglasses"],
//   },
//   {
//     name: "electronics",
//     items: ["smartphones", "laptops", "tablets", "mobile-accessories"],
//   },
//   {
//     name: "home",
//     items: ["furniture", "home-decoration", "kitchen-accessories", "groceries"],
//   },
//   { name: "sports", items: ["sports-accessories"] },
//   { name: "motors", items: ["motorcycle", "vehicle"] },
// ];

// Custom hook to fetch and filter products by category
function useCategories() {
  const { category } = useParams(); // current category slug from the URL
  const [searchParams] = useSearchParams(); // current query params (?sortBy=...&order=...)

  const categoryName = categories.find(
    // find the category object from our list
    (c) => c.slug === category,
  );

  const sortBy = searchParams.get("sortBy"); // e.g. "price"
  const order = searchParams.get("order"); // e.g. "asc" | "desc"

  // TanStack Query: fetch products whenever category, sortBy or order changes
  const { isLoading, data, error } = useQuery({
    // queryKey acts like a unique cache ID → changing any value triggers a refetch
    queryKey: ["category", category, sortBy, order],

    // queryFn is called when queryKey changes or cache is stale
    queryFn: () =>
      getCategoryProducts([...(categoryName?.items ?? [])], { sortBy, order }),

    // avoid running until we actually have a category object
    enabled: !!categoryName,
  });

  const filters = searchParams.getAll("c"); // all selected category filters

  // filter the fetched products client-side by selected sub-categories (if any)
  const filtered = filters.length
    ? data?.filter((p) => filters.includes(p.category))
    : data;

  return { isLoading, error, data: filtered }; // expose only filtered list
}

export default useCategories;

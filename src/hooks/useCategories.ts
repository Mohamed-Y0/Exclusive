import { getCategoryProducts } from "@/services/productsApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const categories = [
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
    items: ["sports-accessories", "motorcycle", "vehicle"],
  },
];

function useCategories() {
  const { category } = useParams();

  const categoryName = categories.find((c) => c.name === category);

  console.log(categoryName);

  const { isLoading, data, error } = useQuery({
    queryKey: [`${category}`],
    queryFn: () => getCategoryProducts([...(categoryName?.items ?? [])]),
    enabled: !!categoryName,
  });

  return { isLoading, error, data };
}

export default useCategories;

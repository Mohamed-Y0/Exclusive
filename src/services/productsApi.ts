import axios from "axios";
import type { ProductApiResponse, ProductTypes } from "@/types/products";
import { useParams } from "react-router-dom";

const axiosClient = axios.create({
  baseURL: "https://dummyjson.com",
});

// There A Limit From The API Creator, Only 30 Product - You Can Fetch Them All With {params: { limit: 0 For All } }.
export const getProducts = async function (
  limit?: number,
  skip?: number,
): Promise<ProductApiResponse> {
  const params: Record<string, number> = {};

  if (limit !== undefined) params.limit = limit;
  if (skip !== undefined) params.skip = skip;

  const res = await axiosClient.get("/products", { params });

  return res.data;
};

export const getProductById = async function (
  id: number,
): Promise<ProductTypes> {
  const res = await axiosClient.get(`/products/${id}`);

  return res.data;
};

// Function to fetch products for a list of categories (with optional sorting)
export const getCategoryProducts = async (
  urls: string[], // category slugs (beauty, laptops, ...)
  opts?: { sortBy?: string | null; order?: string | null }, // optional sorting params
) => {
  const { sortBy, order } = opts || {};

  const responses = await Promise.all(
    urls.map((url) => {
      // Build query string if sortBy + order are provided
      const query =
        sortBy && order
          ? `?sortBy=${encodeURIComponent(sortBy)}&order=${encodeURIComponent(order)}`
          : "";

      // Make the API call for each category
      return axiosClient.get(`products/category/${url}${query}`);
    }),
  );

  // Flatten all category responses into a single array of products
  return responses.flatMap((r) => r.data.products);
};

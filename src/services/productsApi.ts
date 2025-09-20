import axios from "axios";
import type { ProductApiResponse, ProductTypes } from "@/types/products";

const axiosClient = axios.create({
  baseURL: "https://dummyjson.com/products",
});

export const getProducts = async function (
  limit?: number,
  skip?: number,
): Promise<ProductApiResponse> {
  const params: Record<string, number> = {};

  if (limit !== undefined) params.limit = limit;
  if (skip !== undefined) params.skip = skip;

  const res = await axiosClient.get("/", { params });

  return res.data;
};

export const getProductById = async function (
  id: number,
): Promise<ProductTypes> {
  const res = await axiosClient.get(`/${id}`);

  return res.data;
};

export const getCategoryProducts = async function (
  urls: string[],
  opts?: { sortBy?: string | null; order?: string | null },
) {
  const { sortBy, order } = opts || {};

  const responses = await Promise.all(
    urls.map((url) => {
      const query =
        sortBy && order
          ? `?sortBy=${encodeURIComponent(sortBy)}&order=${encodeURIComponent(order)}`
          : "";

      return axiosClient.get(`/category/${url}${query}`);
    }),
  );

  return responses.flatMap((r) => r.data.products);
};

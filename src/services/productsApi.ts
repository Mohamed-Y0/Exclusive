import axios from "axios";
import type { ProductApiResponse, ProductTypes } from "@/types/products";

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

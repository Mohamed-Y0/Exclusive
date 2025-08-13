import axios from "axios";
import type { ProductApiResponse, ProductTypes } from "@/types/products";

/**
 * HTTP Requests With Axios.
 *
 * @function getProducts @param limit
 *      @returns The Array of Products (There A Limit From The API Creator, Only 30 Product)
 *      You Can Fetch Them All With {params: { limit: 0 For All } }.
 *
 * @function getProductById @param id @returns Specific Product By ID.
 */

const axiosClient = axios.create({
  baseURL: "https://dummyjson.com",
});

export const getProducts = async function (
  limit?: number,
): Promise<ProductApiResponse> {
  const res = await axiosClient.get("/products", {
    params: limit ? { limit } : {},
  });

  return res.data;
};

export const getProductById = async function (
  id: number,
): Promise<ProductTypes> {
  const res = await axiosClient.get(`/products/${id}`);

  return res.data;
};

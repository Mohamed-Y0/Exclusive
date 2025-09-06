import { getProductById } from "@/services/productsApi";
import type { ProductTypes } from "@/types/products";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

function useProductById() {
  const { id } = useParams();

  return useQuery<ProductTypes, Error>({
    queryKey: ["product", id],
    queryFn: () => getProductById(Number(id)),
    enabled: !!id,
  });
}
export default useProductById;

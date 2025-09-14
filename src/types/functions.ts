import type { ProductTypes } from "@/types/products";

export type AddToCartHandler = (
  e: React.MouseEvent<HTMLButtonElement>,
  id: ProductTypes,
) => void;

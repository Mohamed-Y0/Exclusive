import ProductImages from "@/components/products/ProductImages";
import ProductInfo from "@/components/products/ProductInfo";
import type { ProductTypes } from "@/types/products";

function Details({ data }: { data: ProductTypes }) {
  return (
    <section>
      <ProductImages data={data} />
      <ProductInfo data={data} />
    </section>
  );
}

export default Details;

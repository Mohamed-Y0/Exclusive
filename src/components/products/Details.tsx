import ProductImages from "@/components/products/ProductImages";
import ProductInfo from "@/components/products/ProductInfo";
import type { ProductTypes } from "@/types/products";

function Details({ data }: { data: ProductTypes }) {
  return (
    <section className="py-8 md:py-16">
      <div className="flex flex-col gap-5 md:flex-row">
        <ProductImages data={data} />
        <ProductInfo data={data} />
      </div>
    </section>
  );
}

export default Details;

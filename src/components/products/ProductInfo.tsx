import type { ProductTypes } from "@/types/products";
import { formatCurrency } from "@/utils/helpers";

function ProductInfo({ data }: { data: ProductTypes }) {
  return (
    <div className="w-full lg:px-10">
      <div className="flex flex-col gap-5 border-b border-b-neutral-300 py-5 md:py-10">
        <p className="text-3xl font-semibold">{data.title}</p>
        <div className="flex gap-5">
          <p className="text-neutral-400">({data.reviews.length}) Reviews</p>
          <p className="text-green-700">{data.availabilityStatus}</p>
        </div>
        <p className="text-3xl font-light">{formatCurrency(data.price)}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default ProductInfo;

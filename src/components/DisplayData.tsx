import { useProductsStore } from "@/stores/useProductsStore";
import { formatCurrency, getDiscountedPrice } from "@/utils/helpers";
import { useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";

type Props = {
  limit?: number;
  skip?: number;
};

function DisplayData({ limit, skip }: Props) {
  const { fetchProducts, products, loading, error } = useProductsStore();

  useEffect(() => {
    fetchProducts(limit, skip);
  }, [fetchProducts, limit, skip]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  console.log(products);

  return (
    <div className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 md:gap-10 md:p-0 lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative flex flex-col justify-between gap-2.5 p-2.5"
        >
          <div className="absolute top-[8%] right-[10%] flex flex-col gap-2.5">
            <button className="cursor-pointer">
              <IoMdHeartEmpty className="size-7 rounded-full bg-neutral-50 p-1 lg:size-10" />
            </button>
            <button className="cursor-pointer">
              <IoEyeOutline className="size-7 rounded-full bg-neutral-50 p-1 lg:size-10" />
            </button>
          </div>
          <img
            src={product.thumbnail}
            alt={product.title}
            className="rounded-lg bg-neutral-100"
          />
          <p>{product.title}</p>
          <div className="flex items-center gap-5">
            <p className="text-red-600">{formatCurrency(product.price)}</p>
            <p className="text-[15px] text-neutral-400 line-through">
              {getDiscountedPrice(product.price, product.discountPercentage)}
            </p>
          </div>
          <div className="flex gap-2.5">
            {Array.from({ length: product.rating }, (_, i) => (
              <FaStar key={i} className="size-6 rounded-full text-yellow-500" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default DisplayData;

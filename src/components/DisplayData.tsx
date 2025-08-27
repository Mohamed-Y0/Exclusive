import { useCutstomProducts } from "@/hooks/useCutstomProducts";
import { formatCurrency, getDiscountedPrice } from "@/utils/helpers";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

type Props = {
  limit?: number;
  skip?: number;
};

function DisplayData({ limit, skip }: Props) {
  const { products, loading, error } = useCutstomProducts(limit, skip);
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <div
      ref={ref}
      className={`${inView ? "page-animation duration-200" : "translate-y-24 opacity-0"} grid grid-cols-1 gap-5 px-5 pb-16 duration-1000 md:grid-cols-2 md:gap-10 md:px-0 lg:grid-cols-4`}
    >
      {products.map((product) => (
        <Link to="" key={product.id}>
          <div className="group relative flex h-full flex-col justify-between gap-2.5 p-1">
            <div className="absolute top-3 right-4 z-10 flex flex-col gap-2.5">
              <button className="cursor-pointer">
                <IoMdHeartEmpty className="size-7 rounded-full bg-neutral-50 p-1 lg:size-10" />
              </button>
              <button className="cursor-pointer">
                <IoEyeOutline className="size-7 rounded-full bg-neutral-50 p-1 lg:size-10" />
              </button>
            </div>

            <div className="relative overflow-hidden rounded-lg">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full bg-neutral-100 group-hover:scale-110 group-hover:rotate-2"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                className="absolute bottom-0 w-full cursor-pointer bg-black py-2.5 text-white opacity-0 transition duration-700 group-hover:opacity-100"
              >
                Add To Cart
              </button>
            </div>
            <p>{product.title}</p>
            <div className="flex items-center gap-5">
              <p className="text-red-600">
                {getDiscountedPrice(product.price, product.discountPercentage)}
              </p>
              <p className="text-[15px] text-neutral-400 line-through">
                {formatCurrency(product.price)}
              </p>
            </div>
            <div className="flex gap-2.5 pb-2">
              {Array.from({ length: product.rating }, (_, i) => (
                <FaStar
                  key={i}
                  className="size-6 rounded-full text-yellow-500"
                />
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DisplayData;

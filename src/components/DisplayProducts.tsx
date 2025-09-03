import type { ProductTypes } from "@/types/products";
import { getDiscountedPrice, formatCurrency } from "@/utils/helpers";
import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function DisplayProducts({ data }: { data: ProductTypes[] }) {
  return (
    <>
      {data?.map((item) => (
        <Link to="" key={item.id}>
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
                src={item.thumbnail}
                alt={item.title}
                className="w-full bg-neutral-100 duration-300 group-hover:scale-105 group-hover:rotate-1"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  e.preventDefault();
                }}
                className="absolute bottom-0 w-full cursor-pointer bg-black py-2.5 text-white opacity-0 duration-300 group-hover:opacity-100"
              >
                Add To Cart
              </button>
            </div>
            <p>{item.title}</p>
            <div className="flex flex-wrap items-center gap-5">
              <p className="text-red-600">
                {getDiscountedPrice(item.price, item.discountPercentage)}
              </p>
              <p className="text-[15px] text-neutral-400 line-through">
                {formatCurrency(item.price)}
              </p>
            </div>
            <div className="flex gap-2.5 pb-2">
              {Array.from({ length: item.rating }, (_, i) => (
                <FaStar
                  key={i}
                  className="size-6 rounded-full text-yellow-500"
                />
              ))}
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}

export default DisplayProducts;

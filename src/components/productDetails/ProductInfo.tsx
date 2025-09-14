import type { AddToCartHandler } from "@/types/functions";
import type { ProductTypes } from "@/types/products";
import { addToCart } from "@/components/cart/cartSlice";
import LinkButton from "@/components/ui/LinkButton";
import { formatCurrency } from "@/utils/helpers";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";

function ProductInfo({ data }: { data: ProductTypes }) {
  const dispatch = useDispatch();

  const handleAddToCart: AddToCartHandler = function (e, id) {
    e.stopPropagation();
    e.preventDefault();
    dispatch(addToCart(id));
  };

  return (
    <div className="flex w-full flex-col gap-12 capitalize lg:px-10">
      <div className="flex flex-col gap-5 border-b border-b-neutral-300 py-5 md:py-10">
        <div>
          <p className="text-3xl font-semibold">{data.title}</p>
          <span className="text-neutral-400">{data.brand}</span>
        </div>
        <div className="flex gap-5">
          <p className="text-neutral-400">({data.reviews.length}) Reviews</p>
          <p className="text-green-700">{data.availabilityStatus}</p>
        </div>
        <p className="text-3xl font-light">{formatCurrency(data.price)}</p>
        <p>{data.description}</p>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex flex-wrap items-center gap-8">
          <LinkButton to="">Buy Now</LinkButton>
          <button
            onClick={(e) => handleAddToCart(e, data)}
            className="cursor-pointer rounded-lg border border-neutral-300 px-5 py-2"
          >
            <IoCartOutline size={40} />
          </button>
        </div>
        <div className="flex flex-wrap gap-5">
          <p className="rounded-full border border-neutral-200 px-2.5">
            {data.shippingInformation}
          </p>
          <p className="rounded-full border border-neutral-200 px-2.5">
            {data.warrantyInformation}
          </p>
          <p className="rounded-full border border-neutral-200 px-2.5">
            {data.returnPolicy}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;

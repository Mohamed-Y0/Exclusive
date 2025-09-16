import { formatCurrency, getDiscountedPrice } from "@/utils/helpers";

type Props = {
  subtotal: number;
};

function CartDetails({ subtotal }: Props) {
  const afterDiscount = +getDiscountedPrice(subtotal, 10);
  const delivery = subtotal && 15;
  const total = afterDiscount + delivery;

  return (
    <div className="flex w-full flex-col gap-5 rounded-lg border border-neutral-200 p-5 font-light capitalize">
      <p className="text-2xl font-semibold tracking-wide">order summary</p>
      <div className="flex flex-col gap-5 border-b border-neutral-200 pb-7">
        <div className="flex justify-between">
          <p className="text-neutral-400">subtotal</p>
          <p className="font-semibold">{formatCurrency(subtotal)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-neutral-400">Discount (-10%)</p>
          <p className="font-semibold text-red-500">
            {formatCurrency(afterDiscount)}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-neutral-400">Delivery Fee</p>
          <p className="font-semibold">{formatCurrency(delivery)}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-[20px]">Total</p>
        <p className="font-semibold">{formatCurrency(total)}</p>
      </div>
    </div>
  );
}

export default CartDetails;

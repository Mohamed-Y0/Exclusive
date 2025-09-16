import CartDetails from "@/components/cart/CartDetails";
import { removeCartItem, updateQuantity } from "@/components/cart/cartSlice";
import PageLocation from "@/components/ui/PageLocation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { CartItem } from "@/types/products";
import { formatCurrency } from "@/utils/helpers";
import { FaRegTrashAlt } from "react-icons/fa";

function CartProducts() {
  const cart = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();
  const totalPrice = cart
    .map((item) => item.price * item.quantity)
    .reduce((prev, cur) => prev + cur, 0);

  const decrement = (item: CartItem) => {
    dispatch(
      updateQuantity({
        id: item.id,
        amount: item.quantity - 1,
      }),
    );
  };

  const increment = (item: CartItem) => {
    dispatch(
      updateQuantity({
        id: item.id,
        amount: item.quantity + 1,
      }),
    );
  };

  return (
    <>
      <div className="pb-8">
        <PageLocation />
      </div>
      <section className="flex gap-5 py-8 md:text-lg lg:pb-16">
        <div className="w-full rounded-lg border border-neutral-200">
          {cart.map((item) => (
            <div
              key={item.id}
              className="border-neutral-200 p-5 px-5 py-5 [&:not(:last-child)]:border-b"
            >
              <div className="flex items-center gap-5">
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="max-w-1/7"
                />
                <div className="flex w-full flex-col gap-5">
                  <div className="flex items-center justify-between">
                    <p>{item.title}</p>
                    <button
                      onClick={() => dispatch(removeCartItem(item.id))}
                      className="cursor-pointer rounded-full bg-red-500 p-1 text-white duration-200 md:p-2.5"
                    >
                      <FaRegTrashAlt className="size-5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="justify-self-center">
                      {formatCurrency(item.quantity * item.price)}
                    </p>
                    <div className="flex items-center justify-center gap-2.5 md:gap-5">
                      <button
                        className="cursor-pointer rounded-lg bg-white px-2.5 py-1 font-bold duration-200 hover:bg-red-500 hover:text-white"
                        onClick={() => decrement(item)}
                      >
                        -
                      </button>
                      <p className="justify-self-center">{item.quantity}</p>
                      <button
                        className="cursor-pointer rounded-lg bg-white px-2.5 py-1 font-bold duration-200 hover:bg-red-500 hover:text-white"
                        onClick={() => increment(item)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <CartDetails subtotal={totalPrice} />
        </div>
      </section>
    </>
  );
}

export default CartProducts;

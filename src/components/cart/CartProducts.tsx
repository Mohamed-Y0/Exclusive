import { removeCartItem, updateQuantity } from "@/components/cart/cartSlice";
import PageLocation from "@/components/ui/PageLocation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { CartItem } from "@/types/products";
import { formatCurrency } from "@/utils/helpers";
import { FaRegTrashAlt } from "react-icons/fa";

function CartProducts() {
  const cart = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();
  // let totalPrice = 0;

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
    <section>
      <div>
        <PageLocation />
      </div>
      <div className="flex flex-col gap-5 py-8 md:text-lg lg:pb-16">
        {cart.map((item) => (
          <div
            key={item.id}
            className="relative rounded-2xl bg-neutral-100 px-5 shadow-lg"
          >
            <div className="flex items-center gap-5">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="max-w-1/7"
              />
              <div className="flex w-full flex-col gap-7">
                <div className="flex justify-between gap-2">
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

            {/* <div>
              <p className="justify-self-center">
                {formatCurrency((totalPrice += item.price * item.quantity))}
              </p>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}

export default CartProducts;

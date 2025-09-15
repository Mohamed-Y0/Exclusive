import { removeCartItem, updateQuantity } from "@/components/cart/cartSlice";
import PageLocation from "@/components/ui/PageLocation";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import type { CartItem } from "@/types/products";
import { formatCurrency } from "@/utils/helpers";
import { FaRegTrashAlt } from "react-icons/fa";

function CartProducts() {
  const cart = useAppSelector((state) => state.cart.cartItems);
  const dispatch = useAppDispatch();
  let totalPrice = 0;

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
      <div className="flex flex-col gap-5 py-16">
        <div className="grid grid-cols-4 items-center rounded-lg bg-neutral-100 p-5 shadow-lg">
          <p className="justify-self-center">Product</p>
          <p className="justify-self-center">Price</p>
          <p className="justify-self-center">Quantity</p>
          <p className="justify-self-center">Subtotal</p>
        </div>
        <div className="flex flex-col gap-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="relative grid grid-cols-4 items-center rounded-2xl bg-neutral-100 px-5 shadow-lg"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-1/3 justify-self-center"
              />
              <p className="justify-self-center">
                {formatCurrency(item.quantity * item.price)}
              </p>
              <div className="flex items-center justify-center gap-5">
                <button
                  className="cursor-pointer rounded-lg bg-white px-2.5 py-1 font-bold"
                  onClick={() => decrement(item)}
                >
                  -
                </button>
                <p className="justify-self-center">{item.quantity}</p>
                <button
                  className="cursor-pointer rounded-lg bg-white px-2.5 py-1 font-bold"
                  onClick={() => increment(item)}
                >
                  +
                </button>
              </div>
              <div>
                <p className="justify-self-center">
                  {formatCurrency((totalPrice += item.price * item.quantity))}
                </p>
              </div>
              <button
                onClick={() => dispatch(removeCartItem(item.id))}
                className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-white p-2.5 duration-200 hover:bg-red-500 hover:text-white"
              >
                <FaRegTrashAlt size={30} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CartProducts;

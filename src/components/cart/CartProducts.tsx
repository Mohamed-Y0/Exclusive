import PageLocation from "@/components/ui/PageLocation";
import { useAppSelector } from "@/store/hooks";

function CartProducts() {
  const cart = useAppSelector((state) => state.cart.cartItems);

  return (
    <section>
      <div>
        <PageLocation />
      </div>
      <div className="flex flex-col gap-5 py-16">
        <div className="flex items-center justify-between rounded-lg bg-neutral-100 p-5 shadow-lg">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        <div className="flex flex-col gap-5">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl bg-neutral-100 pr-5 shadow-lg"
            >
              <img src={item.thumbnail} alt={item.title} className="w-1/10" />
              <p>{item.price}</p>
              {/* <p>{item.price}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CartProducts;

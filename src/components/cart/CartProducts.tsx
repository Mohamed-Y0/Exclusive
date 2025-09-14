import PageLocation from "@/components/ui/PageLocation";
import { useAppSelector } from "@/store/hooks";

function CartProducts() {
  const cart = useAppSelector((state) => state.cart.cartItems);
  console.log(cart);

  return (
    <section>
      <div>
        <PageLocation />
      </div>
      <div className="py-16">
        <div className="flex items-center justify-between rounded-lg p-5 shadow-lg">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
      </div>
    </section>
  );
}

export default CartProducts;

import PageLocation from "@/components/ui/PageLocation";

function CartProducts() {
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

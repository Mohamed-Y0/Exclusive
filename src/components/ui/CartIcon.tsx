import { IoCartOutline } from "react-icons/io5";
import { useAppSelector } from "@/store/hooks";
import { Link } from "react-router-dom";
import React from "react";

function CartIcon() {
  const cartItemsLength = useAppSelector(
    (state) => state.cart.cartItems.length,
  );

  return (
    <Link
      to="/cart"
      aria-label="Go To Your Cart"
      role="link"
      className="relative"
    >
      <IoCartOutline className="relative z-50 size-8" />
      {cartItemsLength > 0 && (
        <span className="absolute -top-1/2 -right-2/3 rounded-full bg-red-500 px-2.5 py-0.5 text-neutral-100">
          {cartItemsLength}
        </span>
      )}
    </Link>
  );
}

export default React.memo(CartIcon);

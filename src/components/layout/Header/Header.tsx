import HeaderNav from "@/components/layout/Header/HeaderNav";
import HeaderPhone from "@/components/layout/Header/HeaderPhone";
import Logo from "@/components/ui/Logo";
import { useAppSelector } from "@/store/hooks";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const cartItemsLength = useAppSelector(
    (state) => state.cart.cartItems.length,
  );

  function handleMenuToggle(): void {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <header className="relative border-b border-neutral-200 bg-neutral-50 px-5 py-5">
      <div className="container m-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <Logo color="black" />
          </Link>
        </div>

        {isOpen ? (
          <HeaderPhone handleMenuToggle={handleMenuToggle} />
        ) : (
          <HeaderNav />
        )}

        <div className="sm:hidden md:block">
          <div className="flex flex-row-reverse items-center gap-5 sm:flex-row">
            <IoMdMenu
              className="size-6 cursor-pointer sm:hidden"
              onClick={handleMenuToggle}
            />

            {/* <Link to="" aria-label="Go To Your Wishlist" role="link">
              <IoMdHeartEmpty className="size-6 lg:size-8" />
            </Link> */}
            <Link
              to="/cart"
              aria-label="Go To Your Cart"
              role="link"
              className="relative"
            >
              <IoCartOutline className="relative z-50 size-8 lg:size-8" />
              {cartItemsLength > 0 && (
                <span className="absolute -top-1/2 -right-2/3 rounded-full bg-red-500 px-2.5 py-0.5 text-neutral-100">
                  {cartItemsLength}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

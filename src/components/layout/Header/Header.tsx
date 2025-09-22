import CartIcon from "@/components/layout/Header/CartIcon";
import HeaderNav from "@/components/layout/Header/HeaderNav";
import HeaderPhone from "@/components/layout/Header/HeaderPhone";
import UserIcon from "@/components/layout/Header/UserIcon";
import Logo from "@/components/ui/Logo";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
            <UserIcon />
            <CartIcon />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

import HeaderNav from "@/components/layout/Header/HeaderNav";
import HeaderPhone from "@/components/layout/Header/HeaderPhone";
import Logo from "@/components/ui/Logo";
import { useCallback, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenuToggle = useCallback(function handleMenuToggle(): void {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <header className="relative border-b border-neutral-200 bg-neutral-50 px-5 py-5 lg:px-0">
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
            <Link to="" aria-label="Go To Your Cart" role="link">
              <IoCartOutline className="size-6 lg:size-8" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

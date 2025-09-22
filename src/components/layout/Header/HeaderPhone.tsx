import Categories from "@/components/layout/Header/Categories";
import { useAppSelector } from "@/store/hooks";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

type Props = {
  handleMenuToggle: () => void;
};

function HeaderPhone({ handleMenuToggle }: Props) {
  const isAuth = useAppSelector((state) => state.login.isAuthenticatied);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      handleMenuToggle();
    }
  };

  return (
    <nav
      className="absolute top-0 left-0 z-50 flex h-dvh w-full flex-row-reverse justify-between bg-neutral-200 p-5"
      onClick={handleOverlayClick}
    >
      <div>
        <IoClose className="size-8 cursor-pointer" onClick={handleMenuToggle} />
      </div>

      <div>
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b border-neutral-400" : ""
              }
              to="/"
              onClick={handleMenuToggle}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b border-neutral-400" : ""
              }
              to="/contact"
              onClick={handleMenuToggle}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b border-neutral-400" : ""
              }
              to="/about"
              onClick={handleMenuToggle}
            >
              About
            </NavLink>
          </li>
          {!isAuth && (
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "border-b border-neutral-400" : ""
                }
                to="/sign-in"
                onClick={handleMenuToggle}
              >
                Sign In
              </NavLink>
            </li>
          )}
        </ul>

        <p className="py-5 text-lg text-neutral-400">Browse By Categories:</p>
        <Categories col={true} handleMenuToggle={handleMenuToggle} />
      </div>
    </nav>
  );
}

export default HeaderPhone;

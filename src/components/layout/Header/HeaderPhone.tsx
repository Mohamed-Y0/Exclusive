import LeftMenu from "@/components/home/LeftMenu";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

type Props = {
  handleMenuToggle: () => void;
};

function HeaderPhone({ handleMenuToggle }: Props) {
  return (
    <nav className="absolute top-0 left-0 z-50 flex h-dvh w-full flex-row-reverse justify-between bg-neutral-200 p-5">
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
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b border-neutral-400" : ""
              }
              to="/sign-up"
            >
              Sign Up
            </NavLink>
          </li>
        </ul>

        <p className="py-5 text-lg text-neutral-400">Browse By Categories:</p>

        <LeftMenu />
      </div>
    </nav>
  );
}

export default HeaderPhone;

import Input from "@/components/ui/Input";
import Logo from "@/components/ui/Logo";
import { IoMdHeartEmpty, IoMdMenu } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-neutral-200 bg-neutral-50 px-5 py-5">
      <div className="container m-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <Logo color="black" />
          </Link>
        </div>

        <nav className="hidden sm:block">
          <ul className="flex items-center gap-5 lg:gap-10">
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
              <NavLink to="/">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/">Sign Up</NavLink>
            </li>
          </ul>
        </nav>

        <div className="sm:hidden md:block">
          <div className="flex flex-row-reverse items-center gap-5 sm:flex-row">
            <IoMdMenu className="size-6 sm:hidden lg:size-8" />
            <Input
              hidden={true}
              type="search"
              placeholder="Search.."
              id="products-search"
            />
            <Link to="">
              <IoMdHeartEmpty className="size-6 lg:size-8" />
            </Link>
            <Link to="">
              <IoCartOutline className="size-6 lg:size-8" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

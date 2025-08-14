import Input from "@/components/ui/Input";
import Logo from "@/components/ui/Logo";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="bg-neutral-50 px-5 py-5">
      <div className="container m-auto flex items-center justify-between">
        <div>
          <Link to="/">
            <Logo color="black" />
          </Link>
        </div>

        <nav className="hidden md:block">
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

        <div className="hidden md:block">
          <div className="md:flex md:items-center md:gap-5">
            <Input type="search" placeholder="Search.." id="products-search" />
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

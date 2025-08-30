import { NavLink } from "react-router-dom";

function HeaderNav() {
  return (
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
    </nav>
  );
}

export default HeaderNav;

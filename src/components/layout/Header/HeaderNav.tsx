import { useAppSelector } from "@/store/hooks";
import { NavLink } from "react-router-dom";

function HeaderNav() {
  const isAuth = useAppSelector((state) => state.login.isAuthenticatied);

  return (
    <nav className="relative z-50 hidden sm:block">
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
        {!isAuth && (
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "border-b border-neutral-400" : ""
              }
              to="/sign-in"
            >
              Sign In
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default HeaderNav;

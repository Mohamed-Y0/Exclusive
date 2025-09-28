import { NavLink } from "react-router-dom";

function LeftMenu() {
  return (
    <div className="capitalize">
      <nav>
        <p className="pb-5">Manage My Account</p>
        <ul className="flex flex-col gap-2 pl-10 font-light text-neutral-500">
          <li>
            <NavLink
              end
              className={({ isActive }) =>
                `${isActive && "text-red-500"} duration-200 hover:text-red-500`
              }
              to="/profile"
            >
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive && "text-red-500"} duration-200 hover:text-red-500`
              }
              to="change-password"
            >
              change password
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `${isActive && "text-red-500"} duration-200 hover:text-red-500`
              }
              to="PaymentSettings"
            >
              My Payment Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default LeftMenu;

import { useAppSelector } from "@/store/hooks";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { MdDashboardCustomize, MdManageAccounts } from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function UserIcon() {
  const [showMenu, setShowMenu] = useState(false);
  const isAuth = useAppSelector((state) => state.login.isAuthenticatied);
  const role = useAppSelector((state) => state.login.user?.role);

  if (!isAuth) return null;

  function handleMenu() {
    setShowMenu((v) => !v);
  }

  return (
    <div className="relative">
      <button className="cursor-pointer" onClick={handleMenu}>
        <FaRegUserCircle className={`z-50 size-8`} />
      </button>
      {showMenu && (
        <ul
          className={`absolute -right-full mt-5 flex min-w-50 flex-col gap-5 rounded-b-md bg-neutral-200 p-5 backdrop-blur-3xl`}
        >
          <li className="duration-200 hover:text-red-500">
            <Link
              className="flex items-center gap-2.5"
              to="/profile"
              onClick={handleMenu}
            >
              <MdManageAccounts size={25} />
              My Account
            </Link>
          </li>
          {role === "admin" && (
            <li className="duration-200 hover:text-red-500">
              <Link
                className="flex items-center gap-2.5"
                to="/dashboard"
                onClick={handleMenu}
              >
                <MdDashboardCustomize size={25} />
                Dashboard
              </Link>
            </li>
          )}
          <li className="border-t">
            <Link
              className="flex items-center gap-2.5 pt-2.5 text-red-500"
              to="/profile"
              onClick={handleMenu}
            >
              <RiLogoutBoxLine size={25} />
              Log out
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default UserIcon;

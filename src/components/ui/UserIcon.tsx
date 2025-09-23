import { useAppSelector } from "@/store/hooks";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function UserIcon() {
  const [showMenu, setShowMenu] = useState(false);
  const isAuth = useAppSelector((state) => state.login.isAuthenticatied);
  const role = useAppSelector((state) => state.login.user?.role);

  if (!isAuth) return null;

  return (
    <div className="relative">
      <button className="cursor-pointer" onClick={() => setShowMenu((v) => !v)}>
        <FaRegUserCircle className={`relative z-50 size-8`} />
      </button>
      <ul
        className={`${showMenu ? "block" : "hidden"} absolute -right-full mt-5 flex flex-col gap-5 rounded-b-md bg-neutral-200 p-5 backdrop-blur-3xl`}
      >
        <li className="w-30">
          <Link to="/profile">My Account</Link>
        </li>
        {role === "admin" && (
          <li className="w-30">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        )}
      </ul>
    </div>
  );
}

export default UserIcon;

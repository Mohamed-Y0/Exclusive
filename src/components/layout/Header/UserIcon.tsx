import { useAppSelector } from "@/store/hooks";
import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";

function UserIcon() {
  const isAuth = useAppSelector((state) => state.login.isAuthenticatied);

  if (!isAuth) return null;

  return (
    <button className="cursor-pointer">
      <FaRegUserCircle className={`relative z-50 size-8 lg:size-8`} />
    </button>
  );
}

export default UserIcon;

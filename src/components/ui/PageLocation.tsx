import { capitalizeFirstLetter } from "@/utils/helpers";
import { NavLink, useLocation } from "react-router-dom";

function PageLocation() {
  const location = useLocation();
  const path = location.pathname.slice(1);

  return (
    <div className="pt-16">
      <NavLink to="">Home</NavLink> / {capitalizeFirstLetter(path)}
    </div>
  );
}

export default PageLocation;

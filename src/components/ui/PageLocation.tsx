import { NavLink, useLocation } from "react-router-dom";

function Path() {
  const location = useLocation();
  const path = location.pathname.slice(1);

  return (
    <div className="pt-16">
      <NavLink to="">Home</NavLink> / {path}
    </div>
  );
}

export default Path;

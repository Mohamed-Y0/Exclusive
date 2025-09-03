import { NavLink, useParams } from "react-router-dom";

function PageLocation() {
  const { category } = useParams();

  return (
    <div className="pt-16 capitalize">
      <NavLink to="">Home</NavLink> / {category}
    </div>
  );
}

export default PageLocation;

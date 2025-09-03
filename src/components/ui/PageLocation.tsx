import { NavLink, useLocation } from "react-router-dom";

function PageLocation() {
  const location = useLocation();

  const pages = location.pathname.split("/").filter(Boolean);

  let path = "";
  const pagesNames = pages.map((n) => {
    path += `/${n}`;
    return { name: n, href: path };
  });

  return (
    <nav className="pt-16 pb-5 capitalize">
      <NavLink to="/">Home</NavLink>
      {pagesNames.map((c, idx) => (
        <span key={idx}>
          {" / "}
          <NavLink to={c.href}>{c.name}</NavLink>
        </span>
      ))}
    </nav>
  );
}

export default PageLocation;

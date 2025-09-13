import { FaAngleDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const categories = [
  {
    name: "mens",
    items: ["shirts", "shoes", "watches", "sunglasses"],
  },
  {
    name: "womens",
    items: ["dresses", "bags", "shoes", "watches", "jewellery", "tops"],
  },
  { name: "beauty", items: ["beauty", "skin-care", "fragrances"] },
  {
    name: "electronics",
    items: ["smartphones", "laptops", "tablets", "mobile-accessories"],
  },
  {
    name: "home",
    items: ["furniture", "home-decoration", "kitchen-accessories", "groceries"],
  },
  { name: "sports", items: ["sports-accessories"] },
  { name: "motors", items: ["motorcycle", "vehicle"] },
];

function HeaderNav() {
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
        <li className="group flex cursor-pointer items-center gap-2.5">
          Categories
          <FaAngleDown />
          <ul className="invisible absolute top-0 left-4 -z-10 translate-x-1/2 overflow-hidden rounded-lg bg-neutral-50 pt-13 group-hover:visible">
            {categories.map((item) => (
              <Link key={item.name} to={`/${item.name}`}>
                <li className="border-t border-neutral-200 py-2.5 capitalize hover:bg-neutral-200 sm:px-5">
                  {item.name}
                </li>
              </Link>
            ))}
          </ul>
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

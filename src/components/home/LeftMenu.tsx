import { MdOutlineKeyboardArrowRight } from "react-icons/md";
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

type Props = {
  hide?: boolean;
};

function LeftMenu({ hide }: Props) {
  return (
    <div className={`md:block ${hide && "hidden"} capitalize`}>
      <ul className="sm:flex-wrap sm:justify-center sm:px-5 md:flex lg:flex-col lg:border-r lg:border-neutral-200 lg:px-0">
        {categories.map((item) => (
          <li
            key={item.name}
            className="group relative rounded-sm px-2.5 py-2.5 duration-300 hover:bg-neutral-100 sm:px-5 lg:pr-2.5"
          >
            <div className="flex items-center justify-between">
              <Link to={`/products/${item.name}`}>{item.name}</Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftMenu;

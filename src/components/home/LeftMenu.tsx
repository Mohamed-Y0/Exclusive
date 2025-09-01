import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const categories = [
  {
    title: "Men's",
    items: ["Shirts", "Shoes", "Watches"],
  },
  {
    title: "Women's",
    items: [" Bags", " Dresses", " Jewellery", " Shoes", " Watches"],
  },
  {
    title: "Electronics",
    items: ["smartphones", "tablets", "laptops", "Accessories"],
  },
  {
    title: "Home",
    items: ["furniture", "decoration", "kitchen"],
  },
  {
    title: "Beauty",
    items: ["skin care", "beauty", "fragrances"],
  },
  {
    title: "Sports",
    items: ["sports-accessories"],
  },
  {
    title: "Automotive",
    items: ["motorcycle", "vehicle"],
  },
  {
    title: "Groceries & Pets",
    items: ["groceries"],
  },
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
            key={item.title}
            className="group relative rounded-sm px-2.5 py-2.5 duration-300 hover:bg-neutral-100 sm:px-5 lg:pr-2.5"
          >
            <div className="flex items-center justify-between">
              <Link to="/">{item.title}</Link>
              {item.items.length > 1 && (
                <MdOutlineKeyboardArrowRight className="" />
              )}
            </div>

            <ul className="absolute top-0 right-0 z-10 flex translate-x-full flex-col rounded-br-sm bg-neutral-100">
              {item.items.length > 1 &&
                item.items.map((category) => (
                  <NavLink to="/" key={category}>
                    <li className="hidden px-2.5 py-2.5 group-hover:block hover:text-neutral-500 sm:px-5 lg:pr-2.5">
                      {category}
                    </li>
                  </NavLink>
                ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftMenu;

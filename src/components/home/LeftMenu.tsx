import { Link } from "react-router-dom";

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
    <div className={`sm:block ${hide && "hidden"} capitalize`}>
      <ul className="sm:flex sm:flex-wrap sm:justify-center lg:flex-col lg:border-r lg:border-neutral-200">
        {categories.map((item) => (
          <Link key={item.name} to={`/products/${item.name}`}>
            <li className="rounded-sm py-2.5 hover:bg-neutral-100 sm:px-5">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default LeftMenu;

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
  col?: boolean;
  handleMenuToggle: () => void;
};

function Categories({ col, handleMenuToggle }: Props) {
  return (
    <div>
      <ul
        className={`${col ? "flex-col" : "flex-wrap items-center py-5"} flex justify-center gap-2.5`}
      >
        {categories.map((item) => (
          <Link key={item.name} to={`/${item.name}`} onClick={handleMenuToggle}>
            <li className="rounded-lg border border-neutral-200 px-2.5 py-1 capitalize duration-200 hover:bg-neutral-100 sm:px-5 sm:py-2.5">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

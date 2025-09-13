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

function Categories() {
  return (
    <div>
      <ul className="flex flex-wrap items-center justify-center gap-2.5 bg-neutral-50 py-5">
        {categories.map((item) => (
          <Link key={item.name} to={`/${item.name}`}>
            <li className="rounded-lg border border-neutral-200 px-2.5 py-2.5 capitalize hover:bg-neutral-100 sm:px-5">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

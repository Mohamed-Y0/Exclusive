import { Link } from "react-router-dom";

const categories = [
  {
    title: "Men's Fashion",
    items: ["mens-shirts", "mens-shoes", "mens-watches"],
  },
  {
    title: "Women's Fashion",
    items: [
      "womens-bags",
      "womens-dresses",
      "womens-jewellery",
      "womens-shoes",
      "womens-watches",
    ],
  },
  {
    title: "Electronics",
    items: ["smartphones", "tablets", "laptops", "mobile-accessories"],
  },
  {
    title: "Home & Lifestyle",
    items: ["furniture", "home-decoration", "kitchen-accessories"],
  },
  {
    title: "Beauty & Personal Care",
    items: ["skin-care", "beauty", "fragrances"],
  },
  {
    title: "Sports & Outdoors",
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
    <div className={`md:block ${hide && "hidden"} `}>
      <ul className="sm:flex-wrap sm:justify-center sm:px-5 md:flex lg:flex-col lg:border-r lg:border-neutral-200 lg:px-0 lg:pr-2.5">
        {categories.map((item) => (
          <li
            key={item.title}
            className="rounded-sm px-2.5 py-2.5 duration-300 hover:bg-neutral-100 sm:px-5 lg:pr-2.5"
          >
            <Link to="/">{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftMenu;

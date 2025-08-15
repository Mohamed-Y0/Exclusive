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

function LeftMenu() {
  return (
    <div className="">
      <ul className="md:flexwr hidden px-5 sm:flex sm:flex-wrap sm:justify-center lg:flex-col lg:border-r lg:border-neutral-200 lg:px-0 lg:pr-2.5">
        {categories.map((item) => (
          <li
            key={item.title}
            className="px-5 py-2.5 hover:bg-neutral-100 lg:pr-2.5"
          >
            <Link to="/">{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LeftMenu;

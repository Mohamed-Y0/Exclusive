import { useParams, useSearchParams } from "react-router-dom";

const categories = [
  { name: "beauty", items: ["beauty", "skin-care", "fragrances"] },
  {
    name: "womens",
    items: [
      "womens-dresses",
      "womens-bags",
      "womens-shoes",
      "womens-watches",
      "womens-jewellery",
      "tops",
    ],
  },
  {
    name: "mens",
    items: ["mens-shirts", "mens-shoes", "mens-watches", "sunglasses"],
  },
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

export default function ProductsMethods() {
  const { category } = useParams(); // param اللى فى الـ route
  const [searchParams, setSearchParams] = useSearchParams();

  const categoryObj = categories.find((c) => c.name === category);

  const selected = searchParams.getAll("c");

  function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    const next = new URLSearchParams(searchParams);
    const filterKey = "c";
    const value = e.target.name;

    if (e.target.checked) {
      next.append(filterKey, value);
    } else {
      const remaining = next.getAll(filterKey).filter((v) => v !== value);
      next.delete(filterKey);
      remaining.forEach((v) => next.append(filterKey, v));
    }

    setSearchParams(next);
  }

  return (
    <div className="min-w-[250px] pt-1 font-light capitalize">
      <div className="fixed h-fit rounded-sm p-2.5 shadow shadow-neutral-300">
        <fieldset>
          <legend className="w-full border-b border-neutral-200">Filter</legend>
          {categoryObj?.items.map((item) => (
            <div key={item} className="flex items-center gap-2 pt-2.5">
              <input
                className="size-5 accent-red-500"
                type="checkbox"
                name={item}
                id={item}
                checked={selected.includes(item)}
                onChange={handleCheck}
              />
              <label htmlFor={item}>{item}</label>
            </div>
          ))}
        </fieldset>
      </div>
    </div>
  );
}

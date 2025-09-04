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

  // هات الكاتيجوري اللى اتحدد من الـ route
  const categoryObj = categories.find((c) => c.name === category);

  // القيم المختارة حالياً من الـ URL
  const selected = searchParams.getAll("c");

  function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    const next = new URLSearchParams(searchParams);
    const key = "c";
    const value = e.target.name;

    if (e.target.checked) {
      next.append(key, value);
    } else {
      // شيل القيمة دى وخلى الباقى
      const all = next.getAll(key).filter((v) => v !== value);
      next.delete(key);
      all.forEach((v) => next.append(key, v));
    }
    setSearchParams(next);
  }

  return (
    <div className="col-start-1 -col-end-2 min-w-[20%] pt-1 font-light capitalize">
      <div className="h-fit rounded-sm p-2.5 shadow shadow-neutral-300">
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

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
  const { category } = useParams();
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

  function handleClearAll() {
    const next = new URLSearchParams(searchParams);
    next.delete("c");
    next.delete("order");
    next.delete("sortBy");
    setSearchParams(next);
  }

  function handleSort(e: React.ChangeEvent<HTMLInputElement>) {
    const next = new URLSearchParams(searchParams);
    const sortOrderKey = "order";
    const value = e.target.value; // "asc" | "desc"

    if (e.target.checked) {
      next.delete(sortOrderKey);
      next.set(sortOrderKey, value);
      next.set("sortBy", "price");
    } else {
      // If unchecked, remove sort completely
      next.delete(sortOrderKey);
      next.delete("sortBy");
    }

    setSearchParams(next);
  }

  return (
    <div className="min-w-fit px-5 pt-1 pb-5 font-light capitalize">
      <div className="flex h-fit flex-col gap-5 rounded-sm p-2.5 shadow shadow-neutral-300 md:justify-self-end">
        <div className="flex items-center justify-between">
          <span className="text-neutral-600">Filters & Sort</span>
        </div>
        <fieldset>
          <legend className="w-full border-b border-neutral-200 text-neutral-500">
            Filter
          </legend>
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
        <fieldset>
          <legend className="w-full border-b border-neutral-200 text-neutral-500">
            Sort By Price
          </legend>
          {(() => {
            const currentOrder = searchParams.get("order");
            const selectedFilters = searchParams.getAll("c");
            return (
              <>
                <div className="flex items-center gap-2 pt-2.5">
                  <input
                    className="size-5 accent-red-500"
                    type="radio"
                    name="order"
                    id="all"
                    value="all"
                    checked={!currentOrder && selectedFilters.length === 0}
                    onChange={(e) => {
                      if (e.target.checked) handleClearAll();
                    }}
                  />
                  <label htmlFor="all">All</label>
                </div>
                <div className="flex items-center gap-2 pt-2.5">
                  <input
                    className="size-5 accent-red-500"
                    type="radio"
                    name="order"
                    id="asc"
                    value="asc"
                    checked={currentOrder === "asc"}
                    onChange={handleSort}
                  />
                  <label htmlFor="asc">Lowest</label>
                </div>
                <div className="flex items-center gap-2 pt-2.5">
                  <input
                    className="size-5 accent-red-500"
                    type="radio"
                    name="order"
                    id="desc"
                    value="desc"
                    checked={currentOrder === "desc"}
                    onChange={handleSort}
                  />
                  <label htmlFor="desc">Highest</label>
                </div>
              </>
            );
          })()}
        </fieldset>
      </div>
    </div>
  );
}

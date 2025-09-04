import { useSearchParams } from "react-router-dom";

function ProductsMethods() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="col-start-1 -col-end-2 pt-1 font-light">
      <div className="h-fit rounded-sm p-2.5 shadow shadow-neutral-300">
        <p>Filter</p>
      </div>
    </div>
  );
}

export default ProductsMethods;

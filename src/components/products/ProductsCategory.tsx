import { useParams } from "react-router-dom";

function ProductsCategory() {
  const { type } = useParams();

  return <div>hello {type}</div>;
}

export default ProductsCategory;

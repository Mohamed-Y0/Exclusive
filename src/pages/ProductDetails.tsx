import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  return <div>Hello World {id}</div>;
}

export default ProductDetails;

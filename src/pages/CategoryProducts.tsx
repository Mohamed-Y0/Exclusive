import { useParams } from "react-router-dom";

function CategoryProducts() {
  const { category } = useParams();

  return <div>hello {category}</div>;
}

export default CategoryProducts;

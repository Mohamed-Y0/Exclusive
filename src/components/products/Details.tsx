import useCategories from "@/hooks/useCategories";
import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();

  const { data, isLoading } = useCategories();

  if (isLoading) return <p>Loading</p>;

  console.log(data);

  return <div>hello {id}</div>;
}

export default Details;

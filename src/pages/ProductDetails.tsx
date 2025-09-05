import Loading from "@/components/ui/Loading";
import useProductById from "@/hooks/useProductById";

function ProductDetails() {
  const { data, isLoading } = useProductById();

  if (isLoading) return <Loading />;

  return (
    <div>
      <h1 className="text-5xl">Hello World {data?.title}</h1>
    </div>
  );
}

export default ProductDetails;

import Details from "@/components/products/Details";
import Loading from "@/components/ui/Loading";
import useProductById from "@/hooks/useProductById";

function ProductDetails() {
  const { data, isLoading, error } = useProductById();

  if (!data) return <p>Product Not Found</p>;
  if (isLoading) return <Loading />;
  if (error) throw new Error("Somthing Went Wrong");

  return (
    <div>
      <Details data={data} />
    </div>
  );
}

export default ProductDetails;

// If Not Data <ProductNotFound />
// title, description, category, price, rating, stock, brand, warrantyInformation, shippingInformation, availabilityStatus, returnPolicy, thumbnail, images

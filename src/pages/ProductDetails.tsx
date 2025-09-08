import Details from "@/components/products/Details";
import Loading from "@/components/ui/Loading";
import PageLocation from "@/components/ui/PageLocation";
import ProductNotFound from "@/components/ui/ProductNotFound";
import useProductById from "@/hooks/useProductById";

function ProductDetails() {
  const { data, isLoading } = useProductById();

  if (isLoading) return <Loading />;
  if (!data) return <ProductNotFound />;
  // if (error) throw new Error("Somthing Went Wrong");

  return (
    <div className={`container m-auto p-5 lg:p-0`}>
      <PageLocation />
      <Details data={data} />
    </div>
  );
}

export default ProductDetails;

// If Not Data <ProductNotFound /> [Done]
// title, description, category, price, rating, stock, brand, warrantyInformation, shippingInformation, availabilityStatus, returnPolicy, thumbnail, images

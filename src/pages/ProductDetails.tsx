import Details from "@/components/productDetails/Details";
import ProductReviews from "@/components/productDetails/ProductReviews";
import Loading from "@/components/ui/Loading";
import PageLocation from "@/components/ui/PageLocation";
import ProductNotFound from "@/components/ui/ProductNotFound";
import useProductById from "@/hooks/useProductById";
import Error from "@/components/ui/Error";

function ProductDetails() {
  const { data, isLoading, error } = useProductById();

  if (isLoading) return <Loading />;
  if (!data) return <ProductNotFound />;
  if (error) return <Error err={error} />;

  return (
    <div className={`container m-auto px-5 2xl:p-0`}>
      <PageLocation />
      <Details data={data} />
      <ProductReviews />
    </div>
  );
}

export default ProductDetails;

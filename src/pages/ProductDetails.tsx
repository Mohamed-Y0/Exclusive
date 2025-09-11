import Details from "@/components/productDetails/Details";
import RelatedProducts from "@/components/productDetails/RelatedProducts";
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
    <div className={`container m-auto px-5 2xl:p-0`}>
      <PageLocation />
      <Details data={data} />
      <RelatedProducts />
    </div>
  );
}

export default ProductDetails;

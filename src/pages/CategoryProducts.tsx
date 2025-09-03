import Category from "@/components/category/DisplayCategory";
import ProductsMethods from "@/components/category/ProductsMethods";
import PageLocation from "@/components/ui/PageLocation";

function CategoryProducts() {
  return (
    <>
      <div className="container m-auto lg:p-0">
        <PageLocation />
        <div className="grid grid-cols-1 justify-between gap-5 py-10 sm:grid-cols-3 lg:grid-cols-5 lg:py-16">
          <Category />
          <ProductsMethods />
        </div>
      </div>
    </>
  );
}

export default CategoryProducts;

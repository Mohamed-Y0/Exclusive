import Category from "@/components/category/DisplayCategory";
import ProductsMethods from "@/components/category/ProductsMethods";
import PageLocation from "@/components/ui/PageLocation";

function CategoryProducts() {
  return (
    <>
      <div className="container m-auto p-5 lg:p-0">
        <PageLocation />
        <div className="grid grid-cols-5 gap-5 py-16">
          <ProductsMethods />
          <Category />
        </div>
      </div>
    </>
  );
}

export default CategoryProducts;

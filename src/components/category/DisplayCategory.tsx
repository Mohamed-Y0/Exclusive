import ProductsMethods from "@/components/category/ProductsMethods";
import DisplayProducts from "@/components/DisplayProducts";
import Loading from "@/components/ui/Loading";
import useCategories from "@/hooks/useCategories";
import { useInView } from "react-intersection-observer";

function Category() {
  const { data, isLoading, error } = useCategories();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  if (error) return <p>Something Went Wrong</p>;

  return (
    <div className="py-10 md:flex md:flex-row-reverse lg:py-16">
      <ProductsMethods />
      {isLoading ? (
        <Loading />
      ) : (
        <div
          ref={ref}
          className={` ${inView ? "duration-200" : "translate-y-24 opacity-0"} grid grid-cols-1 gap-5 px-5 pb-16 duration-1000 md:grid-cols-2 md:gap-10 md:px-0 lg:grid-cols-4`}
        >
          <DisplayProducts data={data ?? []} />
        </div>
      )}
    </div>
  );
}

export default Category;

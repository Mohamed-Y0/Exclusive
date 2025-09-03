import DisplayProducts from "@/components/DisplayProducts";
import Loading from "@/components/ui/Loading";
import useCategories from "@/hooks/useCategories";
import { useInView } from "react-intersection-observer";

function Category() {
  const { data, isLoading } = useCategories();
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className={`col-start-1 -col-end-2 container m-auto p-5 lg:p-0`}>
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

import DisplayProducts from "@/components/DisplayProducts";
import Loading from "@/components/ui/Loading";
import { useCutstomProducts } from "@/hooks/useCutstomProducts";
import { getWindowSize } from "@/utils/helpers";
import { useInView } from "react-intersection-observer";

type Props = {
  limit?: number;
  skip?: number;
};

function DisplayData({ limit, skip }: Props) {
  const windowSize = getWindowSize();

  const { products, loading, error } = useCutstomProducts(limit, skip);
  const { ref, inView } = useInView({
    threshold: windowSize >= 400 ? 0.2 : 0,
    triggerOnce: true,
  });

  if (error) return <p>Error...</p>;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          ref={ref}
          className={` ${inView ? "duration-200" : "translate-y-24 opacity-0"} grid grid-cols-1 gap-5 px-5 pb-16 duration-1000 md:grid-cols-2 md:gap-10 md:px-0 lg:grid-cols-4`}
        >
          <DisplayProducts data={products} />
        </div>
      )}
    </>
  );
}

export default DisplayData;

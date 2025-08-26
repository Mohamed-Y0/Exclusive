import DisplayData from "@/components/DisplayData";
import SectionIntro from "@/components/ui/SectionIntro";

function ExploreProducts() {
  return (
    <section className="py-16">
      <SectionIntro title="Explore Our Products" info="Our Products" />

      <DisplayData skip={8} limit={8} />
    </section>
  );
}

export default ExploreProducts;

import DisplayData from "@/components/DisplayCustomData";
import LinkButton from "@/components/ui/LinkButton";
import SectionIntro from "@/components/ui/SectionIntro";

function ExploreProducts() {
  return (
    <section className="py-16">
      <SectionIntro title="Explore Our Products" info="Our Products" />

      <DisplayData skip={8} limit={8} />

      <div className="py-10 text-center">
        <LinkButton to="">View All Products</LinkButton>
      </div>
    </section>
  );
}

export default ExploreProducts;

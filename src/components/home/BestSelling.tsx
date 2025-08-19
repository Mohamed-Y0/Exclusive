import DisplayData from "@/components/DisplayData";
import SectionIntro from "@/components/ui/SectionIntro";

function BestSelling() {
  return (
    <section className="py-16">
      <SectionIntro title="Best Selling Products" info="This Month" />

      <DisplayData limit={4} skip={90} />
    </section>
  );
}

export default BestSelling;

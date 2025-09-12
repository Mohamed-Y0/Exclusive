import DisplayData from "@/components/DisplayCustomData";
import SectionIntro from "@/components/ui/SectionIntro";

function FlashSales() {
  return (
    <section className="border-b-3 border-neutral-200 py-5 sm:py-8 lg:py-16">
      <SectionIntro title="Flash Sales" info="Today's" />
      <DisplayData limit={4} skip={100} />
    </section>
  );
}

export default FlashSales;

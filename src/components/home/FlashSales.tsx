import DisplayData from "@/components/DisplayData";
import SectionIntro from "@/components/ui/SectionIntro";

function FlashSales() {
  return (
    <>
      <SectionIntro title="Flash Sales" info="Today's" />
      <DisplayData limit={4} skip={100} />
    </>
  );
}

export default FlashSales;

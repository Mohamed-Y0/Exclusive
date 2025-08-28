import FlashSales from "@/components/home/FlashSales";
import ImageSlider from "@/components/home/ImageSlider";
import LeftMenu from "@/components/home/LeftMenu";

function HeroSection() {
  return (
    <section className="border-b-3 border-neutral-200 py-5 sm:py-8 lg:py-16">
      <div className="grid grid-cols-1 gap-5 pb-10 lg:grid-cols-5 lg:gap-0">
        <LeftMenu />
        <ImageSlider />
      </div>
      <FlashSales />
    </section>
  );
}

export default HeroSection;

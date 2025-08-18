import FlashSales from "@/components/home/FlashSales";
import ImageSlider from "@/components/home/ImageSlider";
import LeftMenu from "@/components/home/LeftMenu";

function HeroSection() {
  return (
    <section className="py-5 sm:py-16">
      <div className="grid grid-cols-1 pb-10 lg:grid-cols-5">
        <LeftMenu />
        <ImageSlider />
      </div>
      <FlashSales />
    </section>
  );
}

export default HeroSection;

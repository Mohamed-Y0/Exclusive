import ImageSlider from "@/components/home/ImageSlider";
import LeftMenu from "@/components/home/LeftMenu";

function HeroSection() {
  return (
    <section className="grid grid-cols-1 py-5 sm:py-16 lg:grid-cols-5">
      <LeftMenu />
      <ImageSlider />
    </section>
  );
}

export default HeroSection;

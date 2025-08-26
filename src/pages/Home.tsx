import BestSelling from "@/components/home/BestSelling";
import ExploreProducts from "@/components/home/ExploreProducts";
import HeroSection from "@/components/home/HeroSection";

function Home() {
  return (
    <div className="container m-auto">
      <HeroSection />
      <BestSelling />
      <ExploreProducts />
    </div>
  );
}

export default Home;

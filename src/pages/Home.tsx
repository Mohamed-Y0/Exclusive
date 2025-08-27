import BestSelling from "@/components/home/BestSelling";
import ExploreProducts from "@/components/home/ExploreProducts";
import HeroSection from "@/components/home/HeroSection";
import NewArrival from "@/components/home/NewArrival";

function Home() {
  return (
    <div className={`container m-auto`}>
      <HeroSection />
      <BestSelling />
      <ExploreProducts />
      <NewArrival />
    </div>
  );
}

export default Home;

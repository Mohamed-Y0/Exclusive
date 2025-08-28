import BestSelling from "@/components/home/BestSelling";
import ExploreProducts from "@/components/home/ExploreProducts";
import HeroSection from "@/components/home/HeroSection";
import NewArrival from "@/components/home/NewArrival";
import StoreBenefits from "@/components/home/StoreBenefits";

function Home() {
  return (
    <div className={`container m-auto p-5`}>
      <HeroSection />
      <BestSelling />
      <ExploreProducts />
      <NewArrival />
      <StoreBenefits />
    </div>
  );
}

export default Home;

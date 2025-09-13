import BestSelling from "@/components/home/BestSelling";
import ExploreProducts from "@/components/home/ExploreProducts";
import FlashSales from "@/components/home/FlashSales";
import HeroSection from "@/components/home/HeroSection";
import NewArrival from "@/components/home/NewArrival";
import StoreBenefits from "@/components/home/StoreBenefits";
import Categories from "@/components/layout/Header/Categories";

function Home() {
  return (
    <div className={`container m-auto px-5 2xl:p-0`}>
      <Categories />
      <HeroSection />
      <FlashSales />
      <BestSelling />
      <ExploreProducts />
      <NewArrival />
      <StoreBenefits />
    </div>
  );
}

export default Home;

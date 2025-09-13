import image from "@/assets/hero-img.webp";

function HeroSection() {
  return (
    <section className="flex flex-col items-center gap-10 border-b-3 border-neutral-200 py-8 md:flex-row md:gap-16 lg:py-20">
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl font-semibold tracking-wide md:text-5xl">
          <span className="text-red-500">Exclusive</span> - Your Online
          Marketplace
        </h1>
        <p className="font-light tracking-wide">
          A diverse selection of fashion, beauty, electronics, home décor, and
          everyday essentials — all in one seamless shopping experience.
        </p>
      </div>
      <div className="md:w-4/5">
        <img className="h-full w-full" src={image} alt="Hero Image" />
      </div>
    </section>
  );
}

export default HeroSection;

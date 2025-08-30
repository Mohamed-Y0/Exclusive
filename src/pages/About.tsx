import AboutHero from "@/components/about/AboutHero";
import PageLocation from "@/components/ui/PageLocation";

function About() {
  return (
    <div className={`container m-auto p-5 lg:p-0`}>
      <PageLocation />
      <AboutHero />
    </div>
  );
}

export default About;

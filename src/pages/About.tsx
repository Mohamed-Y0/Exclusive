import AboutHero from "@/components/about/AboutHero";
import Statistics from "@/components/about/Statistics";
import PageLocation from "@/components/ui/PageLocation";

function About() {
  return (
    <div className={`container m-auto p-5 lg:p-0`}>
      <PageLocation />
      <AboutHero />
      <Statistics />
    </div>
  );
}

export default About;

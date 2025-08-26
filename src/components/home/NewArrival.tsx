import SectionIntro from "@/components/ui/SectionIntro";

import fashion from "/imgs/fashion.webp";
import playstation from "/imgs/playstation.webp";
import perf from "/imgs/perf.webp";
import speakers from "/imgs/speakers.webp";

function NewArrival() {
  return (
    <section className="py-16">
      <SectionIntro title="New Arrival" info="Featured" />

      <div className="text-neutral-50">
        <div className="grid grid-cols-2 gap-5">
          <div className="w-full justify-self-center bg-black">
            <img
              className="h-full w-full self-center justify-self-center"
              src={playstation}
              alt=""
            />
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="col-span-full">
              <img src={fashion} alt="" />
            </div>
            <div className="bg-black p-3">
              <img className="justify-self-center" src={speakers} alt="" />
            </div>
            <div className="bg-black p-3">
              <img className="justify-self-center" src={perf} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewArrival;

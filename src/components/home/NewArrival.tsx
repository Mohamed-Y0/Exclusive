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
        <div className="grid gap-5 text-shadow-lg/50 md:grid-cols-2">
          <div className="relative w-full justify-self-center bg-black">
            <img
              className="h-full w-full self-center justify-self-center"
              src={playstation}
              alt="PlayStation 5"
            />
            <div className="absolute bottom-0 flex flex-col gap-5 p-8">
              <p className="text-3xl">PlayStation 5</p>
              <p className="max-w-10/12 font-light">
                Black and White Verstion of the PS5 coming out on sale.
              </p>
            </div>
          </div>

          <div className="grid gap-2.5 md:grid-cols-2">
            <div className="relative col-span-full">
              <img
                className="h-full w-full"
                src={fashion}
                alt="Fashion Collections"
              />
              <div className="absolute bottom-0 flex flex-col gap-5 p-8">
                <p className="text-3xl">Fashion Collections</p>
                <p className="max-w-10/12 font-light">
                  Feaured Fashion Collections that give you another vibe.
                </p>
              </div>
            </div>

            <div className="relative bg-black p-3">
              <img
                className="justify-self-center"
                src={speakers}
                alt="Speakers"
              />
              <div className="absolute bottom-0 flex flex-col gap-2.5 p-5">
                <p className="text-3xl">Speakers</p>
                <p className="font-light">Amazon Wireless Speakers</p>
              </div>
            </div>
            <div className="relative bg-black p-3">
              <img className="justify-self-center" src={perf} alt="Perfume" />
              <div className="absolute bottom-0 flex flex-col gap-2.5 p-5">
                <p className="text-3xl">Perfume</p>
                <p className="font-light">GUCCI INTENSE OUD EDP </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewArrival;

import { MdOutlineLocalShipping } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { VscWorkspaceTrusted } from "react-icons/vsc";

function StoreBenefits() {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center justify-evenly gap-15 text-center md:flex-row">
        <div className="flex flex-col items-center gap-10">
          <MdOutlineLocalShipping
            color="white"
            className="size-20 rounded-full bg-black p-2.5 outline-15 outline-neutral-200"
          />
          <div className="flex flex-col items-center gap-2.5">
            <p className="text-lg font-bold uppercase xl:text-2xl">
              free and fast delivery
            </p>
            <p className="font-light capitalize">
              free delivery for all orders over 140$
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <RiCustomerService2Fill
            color="white"
            className="size-20 rounded-full bg-black p-2.5 outline-15 outline-neutral-200"
          />
          <div className="flex flex-col items-center gap-2.5">
            <p className="text-lg font-bold uppercase xl:text-2xl">
              24/7 customer service
            </p>
            <p className="font-light capitalize">
              friendly 24/7 customer support
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <VscWorkspaceTrusted
            color="white"
            className="size-20 rounded-full bg-black p-2.5 outline-15 outline-neutral-200"
          />
          <div className="flex flex-col items-center gap-2.5">
            <p className="text-lg font-bold uppercase xl:text-2xl">
              money back guarantee
            </p>
            <p className="font-light capitalize">
              we return money within 30 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoreBenefits;

import { IoBagRemoveOutline } from "react-icons/io5";
import { LuStore } from "react-icons/lu";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TbMoneybag } from "react-icons/tb";

function Statistics() {
  return (
    <section className="py-16">
      <div className="ld:gap-10 grid gap-5 font-light sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center gap-10 border border-neutral-500 px-5 py-10">
          <div className="rounded-full bg-black p-4 ring-10 ring-neutral-200">
            <LuStore className="size-12 text-neutral-100" />
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <p className="text-3xl font-bold">10.5K</p>
            <p>Sallers active or site</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 border border-neutral-500 px-5 py-10">
          <div className="rounded-full bg-black p-4 ring-10 ring-neutral-200">
            <RiMoneyDollarCircleLine className="size-12 text-neutral-100" />
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <p className="text-3xl font-bold">33K</p>
            <p>Mopnthly Produduct Sale</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 border border-neutral-500 px-5 py-10">
          <div className="rounded-full bg-black p-4 ring-10 ring-neutral-200">
            <IoBagRemoveOutline className="size-12 text-neutral-100" />
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <p className="text-3xl font-bold">45.5K</p>
            <p>Customer active in our site</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 border border-neutral-500 px-5 py-10">
          <div className="rounded-full bg-black p-4 ring-10 ring-neutral-200">
            <TbMoneybag className="size-12 text-neutral-100" />
          </div>
          <div className="flex flex-col items-center gap-2.5">
            <p className="text-3xl font-bold">25K</p>
            <p>Anual gross sale in our site</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;

import limitedOffer from "/imgs/limited-offer.webp";

function LimitedOffer() {
  return (
    <div className="px-5 py-8 text-center text-neutral-50 md:px-0 md:py-16 md:text-left">
      <div className="flex flex-col items-center justify-center gap-8 bg-black p-7 md:flex-row md:justify-between md:p-16">
        <div>
          <h4 className="text-3xl md:text-6xl">Enhance Your Music Experince</h4>
          <div className="flex justify-center gap-5 pt-8 text-black md:justify-start md:gap-10">
            <p className="flex flex-col items-center justify-center rounded-full bg-neutral-50 p-2.5 md:p-5">
              <span>23</span>
              Hours
            </p>
            <p className="flex flex-col items-center justify-center rounded-full bg-neutral-50 p-2.5 md:p-5">
              <span>59</span>
              Minutes
            </p>
            <p className="flex flex-col items-center justify-center rounded-full bg-neutral-50 p-2.5 md:p-5">
              <span>35</span>
              Seconds
            </p>
          </div>
        </div>
        <div>
          <img src={limitedOffer} alt="Limited Offer" />
        </div>
      </div>
    </div>
  );
}

export default LimitedOffer;

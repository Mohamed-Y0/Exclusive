import workspaceImg from "/imgs/workspace.webp";

function AboutHero() {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-12 lg:flex-row">
        <div className="flex flex-col gap-8 font-light">
          <h4 className="text-5xl font-bold">Our Story</h4>
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div>
          <img
            className="h-full w-full"
            src={workspaceImg}
            alt="Image of Our Work Space"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutHero;

import type { ProductTypes } from "@/types/products";

function ProductImages({ data }: { data: ProductTypes }) {
  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col items-center gap-2.5">
        {data.images.length > 1 &&
          data.images.map((img) => (
            <img
              key={img}
              className="w-60 rounded-lg bg-neutral-100"
              src={img}
              alt={img}
            />
          ))}
      </div>
      <div>
        <img
          className="rounded-lg bg-neutral-100"
          src={data.images[0]}
          alt={data.thumbnail}
        />
      </div>
    </div>
  );
}

export default ProductImages;

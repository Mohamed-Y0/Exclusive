import type { ProductTypes } from "@/types/products";
import { useState } from "react";

function ProductImages({ data }: { data: ProductTypes }) {
  const [image, setImage] = useState<string>(data.images[0]);

  return (
    <div className="flex items-center gap-5">
      <div className="flex flex-col items-center gap-2.5">
        {data.images.length > 1 &&
          data.images.map((img) => (
            <img
              onClick={() => setImage(img)}
              key={img}
              className="w-60 cursor-pointer rounded-lg bg-neutral-100"
              src={img}
              alt={img}
            />
          ))}
      </div>
      <div>
        <img
          className="rounded-lg bg-neutral-100"
          src={image}
          alt={data.thumbnail}
        />
      </div>
    </div>
  );
}

export default ProductImages;

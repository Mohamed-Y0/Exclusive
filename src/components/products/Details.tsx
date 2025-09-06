import type { ProductTypes } from "@/types/products";

function Details({ data }: { data: ProductTypes }) {
  return <div>hello {data.title}</div>;
}

export default Details;

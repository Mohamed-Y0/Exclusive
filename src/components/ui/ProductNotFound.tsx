import { useNavigate } from "react-router-dom";

function ProductNotFound() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col items-center justify-center gap-8 py-20">
      <h1 className="text-8xl">Product Not Found</h1>
      <p className="font-light">
        The product you are trying to access is not available.
      </p>
      <button
        className="cursor-pointer rounded-sm bg-red-600 px-16 py-4 text-neutral-50"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </section>
  );
}

export default ProductNotFound;

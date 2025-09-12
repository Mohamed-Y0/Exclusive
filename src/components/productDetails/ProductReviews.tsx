import useProductById from "@/hooks/useProductById";

function ProductReviews() {
  const { data } = useProductById();

  console.log(data);

  return (
    <section className="py-14 capitalize">
      <p className="text-4xl font-semibold text-red-500">reviews</p>
      <div className="flex flex-col gap-5 pt-14">
        {data?.reviews.map((review) => (
          <div
            key={review.reviewerEmail}
            className="flex w-full flex-col gap-5 rounded-lg bg-neutral-100 px-6 py-3"
          >
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-between gap-2.5">
                <p className="text-lg font-semibold tracking-wide text-neutral-800 lg:text-2xl">
                  {review.reviewerName}
                </p>
                <p className="text-sm font-light text-neutral-400">
                  {new Date(review.date).toLocaleDateString()}
                </p>
              </div>
              <p className="tracking-wide text-neutral-400">{review.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductReviews;

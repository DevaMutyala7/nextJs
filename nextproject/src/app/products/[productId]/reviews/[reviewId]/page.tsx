export default function Review({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  return (
    <h2>
      This is the {params.reviewId}th review of {params.productId}th product
    </h2>
  );
}

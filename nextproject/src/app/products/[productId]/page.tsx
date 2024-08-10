export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  return <h2>Product detail {params.productId}</h2>;
}

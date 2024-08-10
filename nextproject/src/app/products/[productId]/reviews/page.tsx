export default function Reviews({ params }: { params: { productId: string } }) {
  return <h2>Reviews of product {params.productId}</h2>;
}

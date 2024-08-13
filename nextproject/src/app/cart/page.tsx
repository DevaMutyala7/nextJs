import Link from "next/link";

export default function Cart() {
  return (
    <div>
      <h3>This is cart</h3>
      <Link href="/cart/payment">Payment</Link>
    </div>
  );
}

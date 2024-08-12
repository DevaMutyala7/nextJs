"use client";
import { useRouter } from "next/navigation";
export default function Placeorder() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>Place Order</h1>
      <button className="bg-slate-500" onClick={handleClick}>
        Place-Order
      </button>
    </div>
  );
}

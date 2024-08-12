import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Home page</h1>
      <div className="flex justify-center gap-10 m-10">
        <Link href="/products">Products</Link>
        <Link href="/docs">Docs</Link>
      </div>
    </>
  );
}

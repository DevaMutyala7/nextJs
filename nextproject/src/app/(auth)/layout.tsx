"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { link: "/register", title: "Register" },
  { link: "/login", title: "Login" },
  { link: "/forgot-password", title: "Forgot password" },
];

export default function Authlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      <div className="m-10 flex justify-center gap-10">
        {navLinks.map((item) => {
          return (
            <Link
              href={item.link}
              key={item.link}
              className={
                pathname.startsWith(item.link) ? "font-bold" : "text-blue-500"
              }
            >
              {item.title}
            </Link>
          );
        })}
      </div>
      <>{children}</>
    </div>
  );
}

"use client";
import Card from "@/components/Cards";
import wonders from "./wonders";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Photos() {
  const router = useRouter();

  return (
    <div
      style={{ display: "flex", flexFlow: "wrap", gap: "10px", margin: "10px" }}
    >
      {wonders.map((wonder) => {
        return (
          <Card key={wonder.id} width="300px" height="300px">
            <Link href={`/photo-feed/${wonder.id}`}>
              <Image
                src={wonder.source}
                alt={wonder.name}
                style={{
                  objectFit: "contain",
                  cursor: "pointer",
                  height: "90%",
                  width: "100%",
                }}
              />
            </Link>
            {wonder.name}
          </Card>
        );
      })}
    </div>
  );
}

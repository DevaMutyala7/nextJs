import Card from "@/components/Cards";
import wonders from "../wonders";
import Image from "next/image";

export default function Photo({ params }: { params: { photoId: string } }) {
  const { photoId } = params;
  const photo = wonders.find((item) => item.id === Number(photoId));
  return (
    photo && (
      <Card key={photo.id} width="300px" height="300px">
        <Image
          src={photo.source}
          alt={photo.name}
          style={{
            objectFit: "contain",
            cursor: "pointer",
            height: "100%",
            width: "100%",
          }}
        />
      </Card>
    )
  );
}

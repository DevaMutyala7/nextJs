import { NextRequest } from "next/server";
import { comments } from "../../comments";

export async function GET(
  request: NextRequest,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const data = comments.find((comment) => comment.id === parseInt(params.id));

  return Response.json(data);
}

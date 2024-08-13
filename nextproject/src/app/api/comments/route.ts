import { NextRequest } from "next/server";
import { comments } from "../comments";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  cookies().set("theme", "dark");

  const res = query
    ? comments.filter((item) =>
        item.comment.toLowerCase().includes(query.toLowerCase())
      )
    : comments;

  return Response.json(res);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const newComment = {
    id: comments.length + 1,
    comment: body.text,
  };

  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

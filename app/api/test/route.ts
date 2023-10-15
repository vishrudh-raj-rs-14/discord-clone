import { pusherServer } from "@/lib/pusher";

export const GET = () => {
  pusherServer.trigger("all", "message", { test: 123 });
  return Response.json({ data: "Hello" });
};

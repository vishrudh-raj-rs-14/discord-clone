import PusherClient from "pusher-js";
import PusherServer from "pusher";

export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.PUSHER_CLUSTER!,
  useTLS: true,
});

export const pusherClient = new PusherClient("85f5210c589eea6c91c0", {
  cluster: "ap2",
});

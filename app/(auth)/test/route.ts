import { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const GET = async (req: NextRequest) => {
  //   const cokkieStore = cookies();
  //   const token = cokkieStore.get("next-auth.session-token");
  console.log(process.env.NEXTAUTH_SECRET);
  const secret = "asasdwedw";
  const token = await getToken({ req, secret });
  console.log(token);
  //   try {
  //     const val = jwt.verify(token.value, process.env.NEXTAUTH_SECRET);
  //     console.log(val);
  //   } catch (err) {
  //     console.log(err);
  //   }
  return Response.json({ name: "working" });
};

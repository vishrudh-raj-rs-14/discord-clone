import { PrismaAdapter } from "@auth/prisma-adapter";
import { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import prisma from "./db";
import { PrismaClient } from "@prisma/client";

const authOptions: AuthOptions = {
  pages: {
    signIn: "/login",
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
      const dbUser = await prisma.user.findFirst({
        where: {
          email: user.email as string,
        },
      });
      if (!dbUser) {
        console.log("No user logged in", dbUser);
        console.log(user, "------------");
        // await prisma.user.create({
        //     // data:{
        //     //     name
        //     // }
        // })
        return true;
      }
      console.log(dbUser);
      return true;
    },
    async jwt({ token, user, account }) {
      if (account) {
        token.access_token = account.access_token;
        token.id = user.id;
      }
      return token;
    },
  },
};

export { authOptions };

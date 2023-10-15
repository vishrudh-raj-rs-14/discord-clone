import { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import prisma from "./db";

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
        const userCreated = await prisma.user.create({
          data: {
            name: user.name as string,
            email: user.email as string,
            isGoogleUer: true,
          },
        });
        user.id = userCreated.id;
        return true;
      }
      user.id = dbUser.id;
      return true;
    },
    async jwt({ token, user, account, trigger, session }) {
      if (account) {
        token.access_token = account.access_token;
        token.id = user.id;
      }
      if (trigger === "update" && session?.name) {
        // Note, that `session` can be any arbitrary object, remember to validate it!
        token.name = session.name;
      }
      return token;
    },
    async redirect({ url, baseUrl }) {
      console.log(url, baseUrl);
      return baseUrl + "/channels/@me";
    },
  },
};

export { authOptions };

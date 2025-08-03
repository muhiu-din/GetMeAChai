import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import connectDB from "@/app/db/connectDB";
import User from "@/app/models/User";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      await connectDB();
      const user = await User.findOne({ email: session.user.email });

      if (user) {
        session.user._id = user._id.toString(); // ✅ include _id
        session.user.username = user.username;
      }

      return session;
    },

    async signIn({ user }) {
      await connectDB();
      const exists = await User.findOne({ email: user.email });
      if (!exists) {
        await User.create({
          email: user.email,
          username: user.name?.replace(/\s/g, "") || user.login,
        });
      }
      return true;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

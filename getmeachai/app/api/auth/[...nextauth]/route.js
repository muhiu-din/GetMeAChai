import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/app/models/User";

// ✅ Reusable DB connection to avoid multiple connects
const connectDB = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect("mongodb://localhost:27017/GetMeAChai");
  }
};

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
 
        await connectDB();

        let currentUser = await User.findOne({ email: user.email });

        if (!currentUser) {
          currentUser = await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });
        }


        user.name = currentUser.username;

        return true;
      }
 
    },
  
  },
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

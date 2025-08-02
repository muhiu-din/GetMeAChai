import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from "@/app/models/User";
import connectDB from "@/app/db/connectDB";


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

        return true;
      }
 
    }, 
  
 
  async session({session}){
    await connectDB();
    const dbUser = await User.findOne({email: session.user.email})
     console.log(dbUser);
    
    session.user.name = dbUser.username;
    return session
  }
   },
};


const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

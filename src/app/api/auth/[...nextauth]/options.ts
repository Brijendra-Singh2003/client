import { AddUser } from "@/db/User";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
    ],
    callbacks: {
        async signIn({ account, profile, user }: any) {
            if (account?.provider === "google") {
                // console.log(user, " logged in");
                await AddUser(user);
                return profile.email_verified;
            }
            return false;
        },
        async session({ session, token }: any) {
            session.user.id = token.sub;
            return session;
        }
    }
}
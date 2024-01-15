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
        async signIn({ account, profile }: any) {
            if (account.provider === "google") {
                await AddUser({ name: profile.name, email: profile.email });
                return profile.email_verified;
            }
            return false;
        },
        async session({ session }) {
            return session;
        }
    }
}
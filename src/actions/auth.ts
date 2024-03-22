import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import { SignJWT, jwtVerify } from "jose";

const key = new TextEncoder().encode(process.env.AUTH_SECRET);

export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    })],
    jwt: {
        async encode({ token }) {
            return await new SignJWT(token)
                .setProtectedHeader({ alg: "HS256" })
                .setIssuedAt()
                .setExpirationTime("1 week")
                .sign(key);
        },
        async decode({ token }) {
            try {
                return (await jwtVerify(token as string, key, { algorithms: ["HS256"] })).payload;
            } catch (error) {
                console.error('Error decoding JWT token:', error);
                return null;
            }
        },
    },
    callbacks: {
        signIn: async ({ user }) => {
            const data = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api/auth/user", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            });
            console.log(await data.text());
            return true;
        },
        session: async ({ session, token, user }) => {
            if (token.sub) {
                session.user.id = token.sub;
            }
            return session;
        },
    }
});

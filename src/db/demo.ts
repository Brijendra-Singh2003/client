"use server";
// import { PrismaClient } from '@prisma/client/edge'
import { PrismaClient, User } from '@prisma/client'
const prisma = new PrismaClient()

export async function signInCallback({ user }: any) {
    try {
        console.log(user);
        await prisma.$connect();
        const d = await prisma.user.upsert({
            where: {
                email: user.email as string,
            },
            update: user as User,
            create: user as User,
        });
        console.log("data: ", d);
        await prisma.$disconnect();

    } catch (e: any) {
        console.log("error adding user: ", e.message);
    } finally {
        return true;
    }
}
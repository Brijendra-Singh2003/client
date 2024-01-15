import { prisma } from "./demo"

type user = {
    id?: number
    name: string
    email: string
}

export async function AddUser(user: user) {
    try {
        const new_user = await prisma.user.upsert({
            where: {
                email: user.email,
            },
            update: user,
            create: user
        });
        console.log("created user: ", new_user);
    } catch (error: any) {
        console.log("error occured while saving user: ", error.message);
    } finally {
        prisma.$disconnect();
    }
}

export async function getUser(email: string) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        return user;
    } catch (error: any) {
        console.log("error while getting the user from database: ", error.message);
    } finally {
        prisma.$disconnect();
    }
}

export type Profile = {
    userId: number,
    firstName: string,
    lastName?: string,
    phone?: string,
    gender?: 'male' | "female"
}

export async function setProfile(profile: Profile) {
    try {
        const new_profile = await prisma.profile.upsert({
            where: {
                userId: profile.userId
            },
            update: profile,
            create: profile
        });
        console.log("profile saved: ", new_profile);
        return new_profile;
    } catch (error: any) {
        console.log("error occured while saving profile: ", error.message);
    } finally {
        prisma.$disconnect();
    }
}

export async function getProfile(userId: number) {
    try {
        const profile = await prisma.profile.findUnique({
            where: {
                userId: userId
            },
        });
        return profile;
    } catch (error: any) {
        console.log("error occured while getting profile: ", error.message);
    } finally {
        prisma.$disconnect();
    }
}
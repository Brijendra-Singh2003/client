import { Image } from "@prisma/client";
import { prisma } from "./demo";

export async function getImage(id: string) {
    try {
        await prisma.$connect();
        const image = await prisma.image.findUnique({ where: { id } });
        return image;
    } catch (error) {
        console.log("error getting image: ", id, error);
        return {};
    } finally {
        await prisma.$disconnect();
    }
}

export async function addImage(image: Image) {
    try {
        await prisma.$connect();
        const img = await prisma.image.upsert({
            where: { id: image.id },
            create: image,
            update: image,
        })
        return image;
    } catch (error) {
        console.log("error saving image: ", error);
        return {};
    } finally {
        await prisma.$disconnect();
    }
}

export async function removeImage(id: string) {
    try {
        await prisma.$connect();
        const image = await prisma.image.delete({ where: { id } });
        if (image) {
            const res = await fetch(image.delete_url + "?key=" + process.env.BUCKET_KEY as string, {
                method: "DELETE"
            });
            const data = await res.json();
            console.log(data);
        }
    } catch (error) {

    } finally {
        await prisma.$disconnect();
    }
}
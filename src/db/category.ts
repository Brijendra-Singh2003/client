import { prisma } from "./demo"

export async function addCategory(category: string) {
    try {
        await prisma.$connect();
        const c = await prisma.category.create({ data: { name: category } });
        return c;
    } catch (error) {
        console.log("error while getting category: ", category, error);
        return {};
    } finally {
        await prisma.$disconnect();
    }
}

export async function getAllCategories() {
    try {
        await prisma.$connect();
        const c = await prisma.category.findMany();
        return c;
    } catch (error) {
        console.log("error while getting all categories", error);
        return [];
    } finally {
        await prisma.$disconnect();
    }
}
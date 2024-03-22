import { prisma } from "./demo";

export async function getCarts() {
    try {
        await prisma.$connect();
        const items = await prisma.item.findMany();
        return items;
    } catch (error: any) {
        console.log(error.message);
        return {};
    } finally {
        await prisma.$disconnect();
    }
}

export async function getCartSize(userId: string) {
    try {
        await prisma.$connect();
        const count = await prisma.item.count({
            where: {
                userId
            }
        });
        return count;
    } catch (error: any) {
        console.log(error.message);
        return 0;
    } finally {
        await prisma.$disconnect();
    }
}

export async function addItem(newItem: new_item) {
    try {
        await prisma.$connect();
        return await prisma.item.create({
            data: newItem
        })
    } catch (error: any) {
        console.log(error.message);
        return {};
    } finally {
        await prisma.$disconnect();
    }
}

export async function updateItem(id: number, quantity: number) {
    try {
        await prisma.$connect();
        return await prisma.item.update({
            where: { id },
            data: { quantity }
        })
    } catch (error: any) {
        console.log(error.message);
        return {};
    } finally {
        await prisma.$disconnect();
    }
}

export async function getItem(newItem: new_item) {
    try {
        await prisma.$connect();
        return await prisma.item.findFirst({
            where: {
                userId: newItem.userId,
                productId: newItem.productId,
            }
        });
    } catch (error: any) {
        console.log(error.message);
        return {};
    } finally {
        await prisma.$disconnect();
    }
}

export async function getItemById(id: number) {
    try {
        await prisma.$connect();
        return await prisma.item.findUnique({ where: { id } });
    } catch (error: any) {
        console.log(error.message);
        return {};
    } finally {
        await prisma.$disconnect();
    }
}

export async function getItemByUserId(id: string) {
    try {
        await prisma.$connect();
        return await prisma.item.findMany({ where: { userId: id }, select: { product: true, quantity: true, id: true } });
    } catch (error: any) {
        console.log(error.message);
        return [];
    } finally {
        await prisma.$disconnect();
    }
}

export async function removeItemById(id: number) {
    try {
        await prisma.$connect();
        return await prisma.item.delete({ where: { id } });
    } catch (error: any) {
        console.log(error.message);
        return {};
    } finally {
        await prisma.$disconnect();
    }
}
import { prisma } from "./demo";

export async function getAddressById(id: number) {
    try {
        await prisma.$connect();
        return await prisma.address.findUnique({ where: { id } });
    } catch (error: any) {
        console.log(error.message);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}

export async function deleteAddressById(id: number) {
    try {
        await prisma.$connect();
        return await prisma.address.delete({ where: { id } });
    } catch (error: any) {
        console.log(error.message);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}

export async function updateAddressById(id: number, data: address) {
    try {
        await prisma.$connect();
        return await prisma.address.update({ where: { id }, data });
    } catch (error: any) {
        console.log(error.message);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}

export async function createAddress(data: address) {
    try {
        await prisma.$connect();
        return await prisma.address.create({ data });
    } catch (error: any) {
        console.log(error.message);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}

export async function getAddressByUserId(id: string) {
    try {
        await prisma.$connect();
        return await prisma.address.findMany({ where: { userId: id } });
    } catch (error: any) {
        console.log(error.message);
        return [];
    } finally {
        await prisma.$disconnect();
    }
}
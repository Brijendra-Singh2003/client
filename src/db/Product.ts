import { Prisma } from "@prisma/client";
import { prisma } from "./demo";
import { DefaultArgs } from "@prisma/client/runtime/library";

export type category = "topwear" | "bottomwear" | "footwear" | "hoodie" | "mousepad" | "mug" | "cap";

export async function getAllProducts() {
    try {
        const products = await prisma.product.findMany();
        return products;
    } catch (error: any) {
        console.log("error occured while getting all products: ", error.message);
        return [];
    } finally {
        prisma.$disconnect();
    }
}

export async function getProductsByCategory(category: category, pageNo = 0, productPerPage = 10) {
    try {
        const products = await prisma.product.findMany({
            where: {
                category: {
                    name: category
                }
            },
            skip: productPerPage * pageNo,
            take: productPerPage
        });
        return products;
    } catch (error: any) {
        console.log("error occured while getting products by category: ", error.message);
        return [];
    } finally {
        prisma.$disconnect();
    }
}

export async function getProductById(id: number) {
    try {
        const product = await prisma.product.findUnique({
            where: {
                id: id
            },
        })
        return product;
    } catch (error: any) {
        console.log("error occured while getting product by id: ", error.message);
        return [];
    } finally {
        prisma.$disconnect();
    }
}

export async function getProductBySearch(searchString: string, lastId: number) {
    try {
        const product = await prisma.product.findMany({
            take: 5,
            cursor: lastId ? {
                id: lastId
            } : undefined,
            where: {
                name: {
                    contains: searchString,
                },
            },
            orderBy: {
                id: 'asc',
            },
        })
        return product;
    } catch (error: any) {
        console.log("error occured while getting product by id: ", error.message);
        return [];
    } finally {
        prisma.$disconnect();
    }
}
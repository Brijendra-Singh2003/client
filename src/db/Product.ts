import { prisma } from "./demo";

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

export async function getProductsByCategory(category: category) {
    try {
        const products = await prisma.product.findMany({
            where: {
                category: {
                    name: category
                }
            }
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
        const products = await prisma.product.findUnique({
            where: {
                id: id
            }
        })
        return products;
    } catch (error: any) {
        console.log("error occured while getting product by id: ", error.message);
        return [];
    } finally {
        prisma.$disconnect();
    }
}
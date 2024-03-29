import { prisma } from "./demo";

export type category = "topwear" | "bottomwear" | "footwear" | "hoodie" | "mousepad" | "mug" | "cap";

export async function getAllProducts() {
    try {
        await prisma.$connect();
        const products = await prisma.product.findMany();
        return products;
    } catch (error: any) {
        console.log("error occured while getting all products: ", error.message);
        return [];
    } finally {
        await prisma.$disconnect();
    }
}

export async function addProduct(product: newProduct) {
    try {
        await prisma.$connect();
        const newProduct = await prisma.product.create({ data: product });
        return newProduct;
    } catch (error: any) {
        console.log(error.message);
    } finally {
        await prisma.$disconnect();
    }
}

export async function getProductsByCategory(category: category) {
    try {
        await prisma.$connect();
        const products = await prisma.product.findMany({
            where: {
                category: {
                    name: category
                }
            },
            select: {
                id: true,
                name: true,
                price: true,
                discount: true,
                imageUrl: true,
            }
        });
        return products;
    } catch (error: any) {
        console.log("error occured while getting products by category: ", error.message);
        return [];
    } finally {
        await prisma.$disconnect();
    }
}

export async function getProductById(id: number) {
    try {
        await prisma.$connect();
        const product = await prisma.product.findUnique({
            where: {
                id: id
            },
        })
        return product;
    } catch (error: any) {
        console.log("error occured while getting product by id: ", error.message);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}

export async function getProductBySearch(searchString: string, page: number, category?: category) {
    try {
        await prisma.$connect();
        const product = await prisma.product.findMany({
            where: {
                name: {
                    contains: searchString,
                    mode: "insensitive"
                },
                category: {
                    name: category
                }
            },
            orderBy: {
                id: "desc",
            },
            select: {
                id: true,
                name: true,
                price: true,
                discount: true,
                imageUrl: true,
            }
        });
        return product;
    } catch (error: any) {
        console.log("error occured while getting product by id: ", error.message);
        return [];
    } finally {
        await prisma.$disconnect();
    }
}
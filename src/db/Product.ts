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

export async function getProductBySearch(searchString: string, page: number, category?: category) {
    try {
        const product = await prisma.product.findMany({
            take: 4,
            skip: page * 4,
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
        console.log(product);
        return product;
    } catch (error: any) {
        console.log("error occured while getting product by id: ", error.message);
        return [];
    } finally {
        prisma.$disconnect();
    }
}
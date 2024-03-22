import { auth } from "@/actions/auth";
import { prisma } from "@/db/demo";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const id = Number.parseInt(params.id);
    const session = await auth();

    if (!session?.user) {
        return new NextResponse("unauthenticated");
    }

    const addresses = await prisma.user.findUnique({ where: { id: session?.user?.id }, select: { cart: { select: { id: true } } } });

    if (!addresses || !addresses.cart.find(a => a.id === id)) {
        return new NextResponse("unauthorised");
    }

    await prisma.item.delete({ where: { id } });

    const products = await prisma.item.findMany({
        where: { userId: session.user.id },
        select: { product: true, id: true, quantity: true },
    });

    return new NextResponse(JSON.stringify(products));
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const id = Number.parseInt(params.id);
        const session = await auth();

        if (!session?.user) {
            return new NextResponse("missing required feilds");
        }

        const dbitem = await prisma.item.findMany({ where: { productId: id } });

        if (dbitem.length > 0) {
            return new NextResponse("Item already in cart")
        }

        await prisma.item.create({
            data: {
                userId: session.user.id as string,
                productId: id,
            }
        })

        return new NextResponse("success");
    } catch (error: any) {
        return new NextResponse(error.message);
    }
}
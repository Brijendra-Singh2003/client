import { auth } from "@/actions/auth";
import { prisma } from "@/db/demo";
import { NextRequest, NextResponse } from "next/server";

interface Data {
    id: number;
    quantity: number;
}

export async function POST(req: NextRequest) {
    const session = await auth();

    if (!session?.user) {
        return new NextResponse("unauthorised");
    }

    const { id, quantity }: Data = await req.json();

    if (!id || !quantity) {
        return new NextResponse("bad request");
    }
    await prisma.$connect();

    const item = await prisma.item.update({ where: { id }, data: { quantity } });

    const products = await prisma.item.findMany({
        where: { userId: session.user.id },
        select: { product: true, id: true, quantity: true },
    });

    await prisma.$disconnect();

    return new NextResponse(JSON.stringify(products));
}
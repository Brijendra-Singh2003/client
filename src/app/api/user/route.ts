import { auth } from "@/actions/auth";
import { prisma } from "@/db/demo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const session = await auth();

    if (!session?.user || !data.firstName || !data.lastName || !data.phone) {
        return new NextResponse(JSON.stringify({ firstName: "", lastName: "", phone: "", gender: "" }));
    }

    const profile = await prisma.profile.update({
        where: {
            userId: session.user.id as string
        },
        data
    });

    return new NextResponse(JSON.stringify(profile));
}
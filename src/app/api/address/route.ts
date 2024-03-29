import { auth } from "@/actions/auth";
import { createAddress } from "@/db/address";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const data = await req.json();
    const session = await auth();

    if (!session?.user || !data.address || !data.city || !data.name || !data.phone || !data.pincode || !data.state) {
        return new NextResponse("missing required feilds");
    }
    const address = await createAddress({
        name: data.name,
        address: data.address,
        city: data.city,
        state: data.state,
        pincode: data.pincode,
        locality: data.locality,
        landmark: data.landmark,
        phone: data.phone,
        userId: session.user.id as string,
    } as address);

    return new NextResponse(JSON.stringify(address));
}
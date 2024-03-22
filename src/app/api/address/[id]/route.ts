import { auth } from "@/actions/auth";
import { deleteAddressById, getAddressByUserId, updateAddressById } from "@/db/address";
import { prisma } from "@/db/demo";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
    const id = Number.parseInt(params.id);
    const session = await auth();

    if (!session?.user) {
        return new NextResponse("unauthenticated");
    }

    const addresses = await getAddressByUserId(session.user.id as string);

    if (addresses.find(a => a.id === id)) {
        return new NextResponse("unauthorised");
    }

    const address = await deleteAddressById(id);

    return new NextResponse(JSON.stringify(address));
}

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    const data = await req.json();
    const id = Number.parseInt(params.id);
    const session = await auth();

    if (!session?.user || !data.address || !data.city || !data.name || !data.phone || !data.pincode || !data.state) {
        return new NextResponse("missing required feilds");
    }

    const address = await updateAddressById(id, {
        name: data.name,
        address: data.address,
        city: data.city,
        state: data.state,
        pincode: data.pincode,
        locality: data.locality,
        landmark: data.landmark,
        phone: data.phone,
    } as address);

    return new NextResponse(JSON.stringify(address));
}
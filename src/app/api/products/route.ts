import { NextRequest, NextResponse } from "next/server"
import { data } from "./sampleData"

export async function GET(req: NextRequest, res: NextResponse) {
    const id = req.nextUrl.searchParams.get("id");

    if (id) {
        return (new NextResponse(JSON.stringify(data.find(product => product.id === id))));
    }
    else return (new NextResponse(JSON.stringify(data)));
};

import { NextRequest, NextResponse } from "next/server"
import { category, getProductsByCategory } from "@/db/Product";

export async function GET(req: NextRequest, res: NextResponse) {
    const category = req.nextUrl.searchParams.get("category") as category;
    const page = req.nextUrl.searchParams.get("page");
    if (category) {
        if (page) {
            const items = await getProductsByCategory(category, Number.parseInt(page), 4);
            return (new NextResponse(JSON.stringify(items)));
        }
        else {
            const items = await getProductsByCategory(category, 0, 4);
            return (new NextResponse(JSON.stringify(items)));
        }
    }
    else return (new NextResponse(JSON.stringify([])));
};

import { NextRequest, NextResponse } from "next/server";
import collections from "./data.json"

export function GET(req: NextRequest, res: NextResponse) {
    const title = req.nextUrl.searchParams.get("category");
    const id = req.nextUrl.searchParams.get("id");
    console.log(id, title);
    if (title) {
        const items = collections.find(e => e.title === title) as collection;
        if (id) {
            const item = items.items.find(item => item.id === id);
            return new NextResponse(JSON.stringify(item));
        }
        return new NextResponse(JSON.stringify(items));
    }
    return new NextResponse(JSON.stringify(collections));
}

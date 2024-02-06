// import { setProfile } from "@/db/User";
// import { Profile } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const profile = await req.json();
        console.log(profile);
        // const new_profile = await setProfile(profile as Profile);

        return new NextResponse(JSON.stringify({}));
    } catch (error: any) {
        console.log("error while saving profile data: ", error.message)
        return new NextResponse(JSON.stringify(error.message))
    }
}
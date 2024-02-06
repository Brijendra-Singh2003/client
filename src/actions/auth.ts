import { headers } from "next/headers";

export async function getServerSession() {
    return await (await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api/auth/user", {
        headers: headers(),
    })).json();
}
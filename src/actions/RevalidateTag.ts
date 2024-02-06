"use server";

import { revalidateTag } from "next/cache";

export default async function RevalidateAction(str: string) {
    revalidateTag(str);
}
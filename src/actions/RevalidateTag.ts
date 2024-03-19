"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export default async function RevalidateAction(str: string) {
    revalidateTag(str);
}

export async function RevalidateURL(str: string) {
    revalidatePath(str);
    redirect(str);
}
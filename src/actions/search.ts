"use server";

import { searchTop10ProductsByName } from "@/db/demo";

export async function handleSearch(data: FormData) {
    console.log(data);
    searchTop10ProductsByName(data.get("search-text") as string);
}
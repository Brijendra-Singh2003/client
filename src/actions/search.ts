"use server";

// import { searchTop10ProductsByName } from "@/db/demo";

// export async function handleSearch(data: FormData) {
//     console.log(data);
//     searchTop10ProductsByName(data.get("search-text") as string);
// }

export async function handleImageUpload(data: any) {
    console.log(data);
    const res = await fetch("https://api.imgbb.com/1/upload?key=a2378424eeaf2834eeb333bd65106d97", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: data }),
    });

    console.log(await res.text());
}
import Collection, { CollectionSkeleton } from "@/components/collection";
import App from "@/components/swiper";
import { category } from "@/db/Product";
import { headers } from "next/headers";
import Link from "next/link";
import { Suspense } from "react";

const categories: category[] = [
  "bottomwear",
  "cap",
  "footwear",
  "hoodie",
  "mousepad",
  "mug",
  "topwear",
];

export default async function Home() {
  const isMobile: boolean = headers()
    .get("user-agent")
    ?.match(/Android|iPhone|iPad|iPod|webOS|Opera Mini|IEMobile|WPDesktop/i)
    ? true
    : false;

  const res = await fetch("http://localhost:3000/api/categories");
  const collections = (await res.json()) as collection[];

  return (
    <>
      <div className="w-screen p-2 overflow-x-auto bg-gray-900">
        <ul className="w-fit flex gap-4 mx-auto">
          <li className="w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 text-nowrap">
            <Link href="/Topwear">Top wear</Link>
          </li>
          <li className="w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 text-nowrap">
            <Link href="/Bottomwear">Bottom wear</Link>
          </li>
          <li className="w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 text-nowrap">
            <Link href="/Footwear">Foot wear</Link>
          </li>
          <li className="w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 text-nowrap">
            <Link href="/Hoodies">Hoodies</Link>
          </li>
          <li className="w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 text-nowrap">
            <Link href="/Caps">Caps</Link>
          </li>
          <li className="w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 text-nowrap">
            <Link href="/Mugs">Mugs</Link>
          </li>
          <li className="w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 text-nowrap">
            <Link href="/">Mousepads</Link>
          </li>
        </ul>
      </div>
      <main>
        <section className="py-4">
          <App isMobile={isMobile} items={images} />
        </section>
        {categories.map((category) => {
          return (
            <Suspense fallback={<CollectionSkeleton category={category} />}>
              <Collection category={category} />
            </Suspense>
          );
        })}
      </main>
    </>
  );
}

const images = [
  {
    id: 71,
    lg: "https://rukminim2.flixcart.com/fk-p-flap/2048/2048/image/1055923499e1913f.jpg",
    mb: "https://rukminim2.flixcart.com/fk-p-flap/1024/1024/image/69ee89c0569e757c.jpg",
  },
  {
    id: 871,
    lg: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7f4da0f887732f8e.jpg",
    mb: "https://rukminim2.flixcart.com/fk-p-flap/1450/650/image/78980b9e33c47fc6.jpg",
  },
];

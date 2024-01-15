import Collection, { CollectionSkeleton } from "@/components/collection";
import App from "@/components/swiper";
import { category } from "@/db/Product";
import { headers } from "next/headers";
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

  return (
    <main>
      <section className="py-4">
        <App isMobile={isMobile} items={images} />
      </section>
      {categories.map((category) => {
        return (
          <Suspense
            key={category}
            fallback={<CollectionSkeleton category={category} />}
          >
            <Collection category={category} />
          </Suspense>
        );
      })}
    </main>
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

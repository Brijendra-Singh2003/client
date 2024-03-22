import Collection, { CollectionSkeleton } from "@/components/collection";
import App from "@/components/swiper";
import { prisma } from "@/db/demo";
// import { category } from "@/db/Product";
import { headers } from "next/headers";
import { Suspense } from "react";

// const categories: category[] = [
//   "topwear",
//   "bottomwear",
//   "mousepad",
//   "footwear",
//   "mug",
//   "cap",
//   "hoodie",
// ];

export default async function Home() {
  const isMobile: boolean = headers()
    .get("user-agent")
    ?.match(/Android|iPhone|iPad|iPod|webOS|Opera Mini|IEMobile|WPDesktop/i)
    ? true
    : false;

  await prisma.$connect();

  const [categories, products] = await prisma.$transaction([
    prisma.category.findMany(),
    prisma.product.findMany(),
  ]);

  await prisma.$disconnect();

  return (
    <>
      <section className="shadow-md">
        <App isMobile={isMobile} items={images} />
      </section>
      {categories.map((category) => {
        return (
          <Suspense
            key={category.id}
            fallback={
              <CollectionSkeleton category={category.name as category} />
            }
          >
            <Collection
              category={category.name as category}
              items={products.filter((p) => p.categoryId === category.id)}
            />
          </Suspense>
        );
      })}
    </>
  );
}

const images = [
  {
    id: 71,
    lg: "/1055923499e1913f.jpg",
    mb: "/69ee89c0569e757c.jpg",
  },
  {
    id: 871,
    lg: "/7f4da0f887732f8e.jpg",
    mb: "/78980b9e33c47fc6.jpg",
  },
  {
    id: 871,
    lg: "/15204918e0b8c871.jpg",
    mb: "/26811cbd61abe03f.jpg",
  },
];

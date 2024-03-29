import Filters from "@/components/filter";
// import { category } from "@/db/Product";
import React, { Suspense } from "react";
import Products, { ProductSkeleton } from "./Products";
import { getProductsByCategory } from "@/db/Product";

type prop = {
  params: {
    category: category;
  };
  searchParams: {
    page?: string;
  };
};

export default async function page({ params: { category } }: prop) {
  const items = await getProductsByCategory(category);
  return (
    <main className="lg:grid grid-cols-4 flex gap-4 max-w-7xl mx-auto">
      {/* <Filters /> */}
      <div className="col-span-4 bg-white shadow-md">
        <h1 className="px-4 pt-4 capitalize text-2xl lg:text-3xl w-fit">
          {category}
        </h1>
        <Suspense fallback={ProductSkeleton}>
          <Products items={items} />
        </Suspense>
      </div>
    </main>
  );
}

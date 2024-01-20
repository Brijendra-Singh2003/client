import Filters from "@/components/filter";
import { category } from "@/db/Product";
import React from "react";
import Products from "@/components/ProductsList";

type prop = {
  searchParams: {
    page?: string;
    q?: string;
  };
};

export default function page({ searchParams: { page, q } }: prop) {
  return (
    <main className="lg:grid grid-cols-5 gap-4 flex">
      <Filters />
      <div className="col-span-4 bg-white">
        {/* <h1 className="px-4 pt-4 capitalize text-2xl lg:text-3xl w-fit">
          {category}
        </h1>
        <Products category={category} /> */}
      </div>
    </main>
  );
}

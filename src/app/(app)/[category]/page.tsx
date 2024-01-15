import Filters from "@/components/filter";
import { category, getProductsByCategory } from "@/db/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";

export default async function page({ params }: prop) {
  const items = await getProductsByCategory(
    params.category.toLowerCase() as category
  );

  return (
    <>
      <main className="bg-gray-900 md:grid grid-cols-4 flex">
        <Filters />
        <div className="col-span-3">
          <h1 className="p-5 text-2xl w-fit">{params.category}</h1>
          <div className="flex flex-col gap-4 w-fit">
            {items?.map((item) => {
              return (
                <Link
                  href={`/product/${item.id}?category=${params.category}`}
                  key={item.id}
                  className="grid grid-cols-3 md:gap-4"
                >
                  <Image
                    height={200}
                    width={200}
                    src={item.imageUrl}
                    alt=""
                    className="w-28 sm:w-48 lg:w-56 max-h-72 object-cover col-span-1"
                  />
                  <div className="col-span-2 flex flex-col gap-1">
                    <h3 className="text-sm overflow-hidden text-gray-200">
                      {item.name.toUpperCase()}
                    </h3>
                    <h5 className="w-fit flex gap-1 px-1 py-0.5 rounded text-xs bg-green-700 items-center">
                      4.2
                      <AiFillStar />
                    </h5>
                    <p className="">
                      <b className="text-lg">₹{item.price - item.discount}</b>{" "}
                      <span className="text-gray-400 line-through">
                        {item.price}
                      </span>{" "}
                      <span className="ml-2 text-green-500 text-xs">
                        {Math.floor((item.discount / item.price) * 100)}% Off
                      </span>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

type prop = {
  params: {
    category: string;
  };
  searchParams: Object;
};

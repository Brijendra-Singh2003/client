import Filters from "@/components/filter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";

export default async function page({ params }: prop) {
  const res = await fetch(
    "http://localhost:3000/api/categories?category=" + params.category,
    { cache: "no-store" }
  );

  const collection = (await res.json()) as collection;
  // console.log(collection);

  return (
    <>
      <main className="bg-gray-900 flex">
        <Filters />
        <div>
          <h1 className="p-5 text-2xl w-fit">{params.category}</h1>
          <div className="flex flex-col gap-4 w-fit">
            {collection.items?.map((item) => {
              return (
                <Link
                  href={`/product/${item.id}?category=${params.category}`}
                  key={item.id}
                  className="grid grid-cols-3"
                >
                  <Image
                    height={200}
                    width={200}
                    src={item.image}
                    alt=""
                    className="h-32 sm:h-52 lg:h-64 object-contain col-span-1"
                  />
                  <div className=" col-span-2">
                    <h3 className="text-xs overflow-hidden text-gray-200 px-2 py-1">
                      {item.name}
                    </h3>
                    <h5 className="w-fit flex gap-1 mx-2 px-1 rounded text-xs bg-green-700 items-center">
                      {item.rating}
                      <AiFillStar />
                    </h5>
                    <p className="px-2">
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

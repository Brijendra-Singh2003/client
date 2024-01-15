import { category, getProductsByCategory } from "@/db/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";

export default async function Collection({ category }: { category: category }) {
  const items = await getProductsByCategory(category);

  return (
    <section className="flex flex-col w-screen my-1 shadow-md p-4 bg-gray-900 z-8">
      <Link
        href={"/" + category}
        className="pb-4 px-4 text-xl sm:text-3xl font-bold relative flex justify-between"
      >
        <h2>{category}</h2>
        <span className="bg-gray-200 aspect-square w-[1.8rem] sm:w-10 pl-0.5 sm:h-10 text-center text-black rounded-full">
          {">"}
        </span>
      </Link>
      <div className="flex gap-4 relative overflow-x-scroll z-9 overflow-y-clip h-fit">
        {items.map((item: item) => {
          return (
            <Link
              key={item.id}
              href={"/product/" + item.id}
              className="rounded relative transition-all"
            >
              <Image
                height={200}
                width={200}
                src={item.imageUrl}
                alt={item.name + " image"}
                className="h-48 lg:h-64 w-full object-cover"
              />
              <h3 className="text-xs w-44 lg:w-52 text-nowrap overflow-hidden text-ellipsis text-gray-200 px-2 py-1">
                {item.name}
              </h3>
              <h5 className="w-fit flex gap-1 mx-2 px-1 rounded text-xs bg-green-700 items-center">
                4.2
                <AiFillStar />
              </h5>
              <p className="px-2">
                <b className="text-lg">₹{item.price - item.discount}</b>{" "}
                <span className="text-gray-400 line-through">{item.price}</span>{" "}
                <span className="ml-2 text-green-500 text-xs">
                  {Math.floor((item.discount / item.price) * 100)}% Off
                </span>
              </p>
            </Link>
          );
        })}
        <div className="flex items-center justify-center p-4">
          <Link
            href={"/" + category}
            className={
              "rounded-full aspect-square grid place-items-center w-20 text-center cursor-pointer p-4 text-4xl bg-blue-500 mx-6 hover:bg-blue-700"
            }
          >
            <h3>{"->"}</h3>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function CollectionSkeleton({ category }: { category: category }) {
  return (
    <section className="flex flex-col w-screen my-1 shadow-md p-4 bg-gray-900 z-8">
      <Link
        href={"/" + category}
        className="pb-4 px-4 text-xl sm:text-3xl font-bold relative flex justify-between"
      >
        <h2>{category}</h2>
        <span className="bg-gray-200 aspect-square w-[1.8rem] sm:w-10 pl-0.5 sm:h-10 text-center text-black rounded-full">
          {">"}
        </span>
      </Link>
      <div className="flex gap-4 relative overflow-x-scroll z-9 overflow-y-clip h-fit">
        <div className="rounded relative flex flex-col gap-2 transition-all">
          <div className="h-48 lg:h-64 w-full bg-gray-700 animate-pulse rounded-md" />
          <h3 className="h-4 w-44 lg:w-52 bg-gray-700 animate-pulse rounded-md px-2 py-1"></h3>
          <h5 className="bg-gray-700 animate-pulse h-4 w-10 flex gap-1 mx-2 px-1 rounded items-center"></h5>
          <p className="px-2 h-4 w-32 rounded-md bg-gray-700 animate-pulse"></p>
        </div>
        <div className="rounded relative flex flex-col gap-2 transition-all">
          <div className="h-48 lg:h-64 w-full bg-gray-700 animate-pulse rounded-md" />
          <h3 className="h-4 w-44 lg:w-52 bg-gray-700 animate-pulse rounded-md px-2 py-1"></h3>
          <h5 className="bg-gray-700 animate-pulse h-4 w-10 flex gap-1 mx-2 px-1 rounded items-center"></h5>
          <p className="px-2 h-4 w-32 rounded-md bg-gray-700 animate-pulse"></p>
        </div>
        <div className="rounded relative flex flex-col gap-2 transition-all">
          <div className="h-48 lg:h-64 w-full bg-gray-700 animate-pulse rounded-md" />
          <h3 className="h-4 w-44 lg:w-52 bg-gray-700 animate-pulse rounded-md px-2 py-1"></h3>
          <h5 className="bg-gray-700 animate-pulse h-4 w-10 flex gap-1 mx-2 px-1 rounded items-center"></h5>
          <p className="px-2 h-4 w-32 rounded-md bg-gray-700 animate-pulse"></p>
        </div>
        <div className="rounded relative flex flex-col gap-2 transition-all">
          <div className="h-48 lg:h-64 w-full bg-gray-700 animate-pulse rounded-md" />
          <h3 className="h-4 w-44 lg:w-52 bg-gray-700 animate-pulse rounded-md px-2 py-1"></h3>
          <h5 className="bg-gray-700 animate-pulse h-4 w-10 flex gap-1 mx-2 px-1 rounded items-center"></h5>
          <p className="px-2 h-4 w-32 rounded-md bg-gray-700 animate-pulse"></p>
        </div>
        <div className="rounded relative flex flex-col gap-2 transition-all">
          <div className="h-48 lg:h-64 w-full bg-gray-700 animate-pulse rounded-md" />
          <h3 className="h-4 w-44 lg:w-52 bg-gray-700 animate-pulse rounded-md px-2 py-1"></h3>
          <h5 className="bg-gray-700 animate-pulse h-4 w-10 flex gap-1 mx-2 px-1 rounded items-center"></h5>
          <p className="px-2 h-4 w-32 rounded-md bg-gray-700 animate-pulse"></p>
        </div>
      </div>
    </section>
  );
}

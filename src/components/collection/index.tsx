// import { category, getProductsByCategory } from "@/db/Product";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaChevronRight } from "react-icons/fa6";

export default async function Collection({
  category,
  items,
}: {
  category: category;
  items: Product[];
}) {
  return (
    <section className="flex mt-1 flex-col w-full sm:my-4 z-8 bg-white shadow">
      <Link
        href={"/" + category}
        className="pt-4 px-4 capitalize sm:text-3xl text-xl relative flex justify-between"
      >
        <h2>{category}</h2>
        <span className="text-black p-1">
          <FaChevronRight />
        </span>
      </Link>
      <div className="flex relative p-2 gap-2 overflow-x-scroll z-9 overflow-y-clip h-fit">
        {items.map((item) => {
          return (
            <Link
              key={item.id}
              href={"/product/" + item.id}
              className="relative transition-all p-2 border"
            >
              <Image
                height={200}
                width={200}
                src={item.imageUrl}
                alt={item.name + " image"}
                className="h-36 md:h-48 lg:h-64 object-contain aspect-[3/4] "
              />
              <h3 className="w-44 text-xs capitalize md:text-sm text-nowrap overflow-hidden text-ellipsis p-1.5">
                {item.name.substring(0, 40)}
              </h3>
              <h5 className="w-fit ml-2 flex gap-1 px-1 rounded text-xs bg-green-600 text-white items-center">
                4.2
                <AiFillStar />
              </h5>
              <p className="flex px-2 flex-wrap gap-2">
                <b className="text-lg">₹{item.price - item.discount}</b>{" "}
                <span className="text-gray-400 line-through">{item.price}</span>{" "}
                <span className=" text-green-500 text-nowrap text-xs">
                  {Math.floor((item.discount / item.price) * 100)}% Off
                </span>
              </p>
            </Link>
          );
        })}
        {/* <div className="flex items-center justify-center p-4">
          <Link
            href={"/" + category}
            className={
              "rounded-full aspect-square grid place-items-center w-20 text-white cursor-pointer text-4xl bg-blue-500 mx-6 hover:bg-blue-600"
            }
          >
            <h3>{"->"}</h3>
          </Link>
        </div> */}
      </div>
    </section>
  );
}

export function CollectionSkeleton({ category }: { category: category }) {
  return (
    <section className="flex flex-col w-screen my-1 shadow-md p-4 bg-white z-8">
      <Link
        href={"/" + category}
        className="pb-4 px-4 capitalize text-xl sm:text-3xl font-bold relative flex justify-between"
      >
        <h2>{category}</h2>
        <span className="text-black">
          <FaChevronRight />
        </span>
      </Link>
      <div className="flex gap-4 relative overflow-x-scroll z-9 overflow-y-clip h-fit">
        <div className="rounded relative flex flex-col gap-2 transition-all">
          <div className="h-32 md:h-48 lg:h-64 w-full bg-gray-300 animate-pulse rounded-md" />
          <h3 className="h-4 w-32 lg:w-52 bg-gray-300 animate-pulse rounded-md px-2 py-1"></h3>
          <h5 className="bg-gray-300 animate-pulse h-4 w-10 flex gap-1 mx-2 px-1 rounded items-center"></h5>
          <p className="px-2 h-4 w-32 rounded-md bg-gray-300 animate-pulse"></p>
        </div>
        <div className="rounded relative flex flex-col gap-2 transition-all">
          <div className="h-32 md:h-48 lg:h-64 w-full bg-gray-300 animate-pulse rounded-md" />
          <h3 className="h-4 w-32 md:w-44 lg:w-52 bg-gray-300 animate-pulse rounded-md px-2 py-1"></h3>
          <h5 className="bg-gray-300 animate-pulse h-4 w-10 flex gap-1 mx-2 px-1 rounded items-center"></h5>
          <p className="px-2 h-4 w-32 rounded-md bg-gray-300 animate-pulse"></p>
        </div>
        <div className="rounded relative flex flex-col gap-2 transition-all">
          <div className="h-32 md:h-48 lg:h-64 w-full bg-gray-300 animate-pulse rounded-md" />
          <h3 className="h-4 w-32 md:w-44 lg:w-52 bg-gray-300 animate-pulse rounded-md px-2 py-1"></h3>
          <h5 className="bg-gray-300 animate-pulse h-4 w-10 flex gap-1 mx-2 px-1 rounded items-center"></h5>
          <p className="px-2 h-4 w-32 rounded-md bg-gray-300 animate-pulse"></p>
        </div>
        <div className="rounded relative flex flex-col gap-2 transition-all">
          <div className="h-32 md:h-48 lg:h-64 w-full bg-gray-300 animate-pulse rounded-md" />
          <h3 className="h-4 w-32 md:w-44 lg:w-52 bg-gray-300 animate-pulse rounded-md px-2 py-1"></h3>
          <h5 className="bg-gray-300 animate-pulse h-4 w-10 flex gap-1 mx-2 px-1 rounded items-center"></h5>
          <p className="px-2 h-4 w-32 rounded-md bg-gray-300 animate-pulse"></p>
        </div>
        <div className="rounded relative flex flex-col gap-2 transition-all">
          <div className="h-32 md:h-48 lg:h-64 w-full bg-gray-300 animate-pulse rounded-md" />
          <h3 className="h-4 w-32 md:w-44 lg:w-52 bg-gray-300 animate-pulse rounded-md px-2 py-1"></h3>
          <h5 className="bg-gray-300 animate-pulse h-4 w-10 flex gap-1 mx-2 px-1 rounded items-center"></h5>
          <p className="px-2 h-4 w-32 rounded-md bg-gray-300 animate-pulse"></p>
        </div>
      </div>
    </section>
  );
}

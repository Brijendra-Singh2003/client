// "use client";

// import { category } from "@/db/Product";
import AddToCartBtn from "@/components/btns/AddToCart";
import Image from "next/image";
import Link from "next/link";
// import { useRouter, useSearchParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

type props = {
  id: number;
  name: string;
  price: number;
  discount: number;
  imageUrl: string;
}[];

export default async function Products({ items }: { items: props }) {
  return (
    <>
      <div className="grid grid-cols-2 sm:gap-2 p-1 sm:p-4 sm:grid-cols-3 lg:grid-cols-5">
        {items?.map((item) => {
          return (
            <Link
              href={`/product/${item.id}`}
              key={item.id}
              className="flex flex-col col-span-1 gap-2 pb-2 border lg:hover:scale-105 lg:hover:-translate-y-3 lg:hover:shadow-lg transition active:scale-95"
            >
              <Image
                height={200}
                width={200}
                src={item.imageUrl}
                alt=""
                className="w-full aspect-[3/4] object-contain mx-auto bg-white"
              />
              <div className="col-span-1 h-full px-2 flex flex-col gap-1 relative">
                <h3 className="line-clamp-2 text-xs md:text-sm">
                  {item.name.toUpperCase()}
                </h3>
                <h5 className="w-fit flex gap-1 px-1 py-0.5 rounded text-xs bg-green-600 text-white items-center">
                  4.2
                  <AiFillStar />
                </h5>
                <p className="">
                  <b className="text-lg">₹{item.price - item.discount}</b>{" "}
                  <span className="text-gray-400 line-through">
                    {item.price}
                  </span>{" "}
                  <span className="ml-2 text-green-600 text-xs">
                    {Math.floor((item.discount / item.price) * 100)}% Off
                  </span>
                </p>
              </div>
              <AddToCartBtn
                item={item}
                className="grid border grid-cols-2 mx-2 bg-white text-sm"
              />
            </Link>
          );
        })}
      </div>
      {/* <div className="w-full p-4 flex justify-center items-center gap-4">
        <Link
          className="bg-blue-600 text-white rounded py-1.5 px-3 disabled:opacity-50 active:scale-95 disabled:active:scale-100"
          // disabled={!page || loading}
          href={`/${category}?page=${page - 1}`}
        >
          Prev
        </Link>
        <span>Page {page + 1}</span>
        <Link
          className="bg-blue-600 text-white rounded py-1.5 px-3 disabled:opacity-50 active:scale-95 disabled:active:scale-100"
          // disabled={items.length < 4 || loading}
          href={`/${category}?page=${page + 1}`}
        >
          Next
        </Link>
      </div> */}
    </>
  );
}

export const ProductSkeleton = (
  <>
    <div className="grid grid-cols-2 gap-1 p-1 sm:p-4 sm:grid-cols-3 lg:grid-cols-4">
      <div className="flex flex-col col-span-1 gap-2 py-2">
        <div className="w-full aspect-[3/4] mx-auto rounded-md animate-pulse bg-gray-300" />
        <div className=" col-span-2">
          <h3 className="text-xs overflow-hidden text-gray-200 px-2 py-1">
            <div className="h-4 w-48 bg-gray-300 rounded-md animate-pulse" />
          </h3>
          <div className="h-4 my-1 mx-2 w-8 bg-gray-300 rounded-md animate-pulse" />
          <div className="h-6 m-2 w-32 bg-gray-300 rounded-md animate-pulse" />
        </div>
      </div>
      <div className="flex flex-col col-span-1 gap-2 py-2">
        <div className="w-full aspect-[3/4] mx-auto rounded-md animate-pulse bg-gray-300" />
        <div className=" col-span-2">
          <h3 className="text-xs overflow-hidden text-gray-200 px-2 py-1">
            <div className="h-4 w-48 bg-gray-300 rounded-md animate-pulse" />
          </h3>
          <div className="h-4 my-1 mx-2 w-8 bg-gray-300 rounded-md animate-pulse" />
          <div className="h-6 m-2 w-32 bg-gray-300 rounded-md animate-pulse" />
        </div>
      </div>
      <div className="flex flex-col col-span-1 gap-2 py-2">
        <div className="w-full aspect-[3/4] mx-auto rounded-md animate-pulse bg-gray-300" />
        <div className=" col-span-2">
          <h3 className="text-xs overflow-hidden text-gray-200 px-2 py-1">
            <div className="h-4 w-48 bg-gray-300 rounded-md animate-pulse" />
          </h3>
          <div className="h-4 my-1 mx-2 w-8 bg-gray-300 rounded-md animate-pulse" />
          <div className="h-6 m-2 w-32 bg-gray-300 rounded-md animate-pulse" />
        </div>
      </div>
      <div className="flex flex-col col-span-1 gap-2 py-2">
        <div className="w-full aspect-[3/4] mx-auto rounded-md animate-pulse bg-gray-300" />
        <div className=" col-span-2">
          <h3 className="text-xs overflow-hidden text-gray-200 px-2 py-1">
            <div className="h-4 w-48 bg-gray-300 rounded-md animate-pulse" />
          </h3>
          <div className="h-4 my-1 mx-2 w-8 bg-gray-300 rounded-md animate-pulse" />
          <div className="h-6 m-2 w-32 bg-gray-300 rounded-md animate-pulse" />
        </div>
      </div>
    </div>
    <div className="w-full p-4 flex justify-center items-center gap-4">
      <button
        className="bg-blue-600 text-white rounded py-1.5 px-3 disabled:opacity-50 active:scale-95 disabled:active:scale-100"
        // disabled={!page || loading}
        // href={`/${category}?page=${page - 1}`}
      >
        Prev
      </button>
      <span>Page 1</span>
      <button
        className="bg-blue-600 text-white rounded py-1.5 px-3 disabled:opacity-50 active:scale-95 disabled:active:scale-100"
        // disabled={items.length < 4 || loading}
        // href={`/${category}?page=${page + 1}`}
      >
        Next
      </button>
    </div>
  </>
);

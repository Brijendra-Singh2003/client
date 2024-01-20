"use client";

import { category } from "@/db/Product";
import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";

type ProductsProps = {
  category: category;
};

export default function Products({ category }: ProductsProps) {
  const [loading, setLoading] = useState<boolean>(true);
  const [items, setItems] = useState<Product[]>([]);
  const router = useRouter();
  const params = useSearchParams();
  const page = params.get("page")
    ? Number.parseInt(params.get("page") as string)
    : 0;

  useEffect(() => {
    setLoading(true);
    fetch(`/api/products?category=${category}&page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
  }, [page]);

  return (
    <>
      <div className="grid grid-cols-2 gap-1 p-1 sm:p-4 sm:grid-cols-3 lg:grid-cols-4">
        {loading
          ? ProductSkeleton
          : items?.map((item: Product) => {
              return (
                <Link
                  href={`/product/${item.id}`}
                  key={item.id}
                  className="flex flex-col col-span-1 gap-2 py-2"
                >
                  <Image
                    height={200}
                    width={200}
                    src={item.imageUrl}
                    alt=""
                    className="w-full aspect-[3/4] object-cover mx-auto"
                  />
                  <div className="col-span-1 px-2 flex flex-col gap-1">
                    <h3 className="overflow-hidden text-xs md:text-sm">
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
                </Link>
              );
            })}
      </div>
      <div className="w-full p-4 flex justify-center items-center gap-4">
        <button
          className="bg-blue-600 text-white rounded py-1.5 px-3 disabled:opacity-50 active:scale-95 disabled:active:scale-100"
          disabled={!page || loading}
          onClick={() => router.push(`/${category}?page=${page - 1}`)}
        >
          Prev
        </button>
        <span>Page {page + 1}</span>
        <button
          className="bg-blue-600 text-white rounded py-1.5 px-3 disabled:opacity-50 active:scale-95 disabled:active:scale-100"
          disabled={items.length < 4 || loading}
          onClick={() => router.push(`/${category}?page=${page + 1}`)}
        >
          Next
        </button>
      </div>
    </>
  );
}

const ProductSkeleton = (
  <>
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
  </>
);

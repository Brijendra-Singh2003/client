import Filters from "@/components/filter";
// import { category, getProductBySearch } from "@/db/Product";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

type Product = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
  discount: number;
};

type prop = {
  searchParams: {
    page?: string;
    q?: string;
    category?: category;
  };
};

export default async function page({
  searchParams: { page, q, category },
}: prop) {
  const currPage = page ? Number.parseInt(page) : 0;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/search?q=${q}&page=${page}` +
      (category ? "&category=" + category : ""),
    { cache: "no-store" }
  );
  const products: Product[] = await res.json();
  console.log(products);
  // await getProductBySearch(
  //   q as string,
  //   currPage,
  //   category
  // );
  return (
    <main className="lg:grid grid-cols-5 gap-4 flex">
      <Filters q={q} category={category} />
      <div className="col-span-4 bg-white">
        <h1 className="px-4 pt-4 capitalize text-2xl lg:text-3xl w-fit">{q}</h1>
        <div className="grid grid-cols-2 gap-1 p-1 sm:p-4 sm:grid-cols-4 w-full">
          {products?.length > 0 ? (
            products?.map((item) => (
              <Link
                href={`/product/${item.id}`}
                key={item.id}
                className="flex flex-col col-span-1 gap-2 py-2"
              >
                <Image
                  height={200}
                  width={200}
                  src={item.imageUrl}
                  alt="product image"
                  className="w-full aspect-[3/4] object-cover mx-auto"
                />
                <div className="col-span-1 px-2 flex flex-col gap-1">
                  <h3 className="text-sm overflow-hidden">
                    {item.name.toUpperCase()}
                  </h3>
                  <h5 className="w-fit text-white flex gap-1 px-1 py-0.5 rounded text-xs bg-green-600 items-center">
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
            ))
          ) : (
            <div className="col-span-2 h-48 sm:col-span-4 ">faltu content</div>
          )}
        </div>
        <div className="w-full p-4 flex justify-center items-center gap-4">
          {currPage <= 0 ? (
            <button
              className="bg-blue-600 rounded cursor-not-allowed py-1.5 px-3 disabled:opacity-50 active:scale-95 disabled:active:scale-100"
              disabled
            >
              Prev
            </button>
          ) : (
            <button className="bg-blue-600 rounded py-1.5 px-3 disabled:opacity-50 active:scale-95 disabled:active:scale-100">
              <a
                href={
                  "/search?q=" +
                  q +
                  "&page=" +
                  (currPage - 1) +
                  (category ? "&category=" + category : "")
                }
              >
                Prev
              </a>
            </button>
          )}
          <span>Page {page}</span>
          {products.length < 4 ? (
            <button
              className="bg-blue-600 rounded cursor-not-allowed py-1.5 px-3 disabled:opacity-50 active:scale-95 disabled:active:scale-100"
              disabled
            >
              Next
            </button>
          ) : (
            <button className="bg-blue-600 rounded py-1.5 px-3 disabled:opacity-50 active:scale-95 disabled:active:scale-100">
              <a
                href={
                  "/search?q=" +
                  q +
                  "&page=" +
                  (currPage + 1) +
                  (category ? "&category=" + category : "")
                }
              >
                Next
              </a>
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

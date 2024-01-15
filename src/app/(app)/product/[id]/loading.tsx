import React, { FC } from "react";
import { AiFillStar } from "react-icons/ai";

export default async function page() {
  return (
    <main className="product-main bg-gray-800 md:grid grid-cols-3">
      <div className="md:sticky top-16 col-span-1 h-64 md:h-96" />
      <div className="bg-gray-900 col-span-2 flex flex-col gap-2">
        <h1 className="font-bold px-4 pt-4 w-full ">
          <div className="h-4 w-full bg-gray-600 rounded animate-pulse"></div>
        </h1>
        <div className="h-4 ml-4 w-10 bg-gray-600 rounded animate-pulse"></div>
        <p className="flex ml-4 gap-4 items-center">
          <div className="h-6 w-32 bg-gray-600 rounded animate-pulse"></div>
        </p>

        <div className="mt-6 px-4 items-center">
          <p className="text-gray-600 font-bold mb-1 dark:text-gray-100">
            <div className="h-8 w-32 bg-gray-600 rounded animate-pulse"></div>
          </p>
          <ul className="text-gray-600 dark:text-gray-400">
            <li className="flex items-center p-1 leading-relaxed text-xs md:text-[14px]">
              <TagIcon />
              <span className="w-[240px] md:w-full">
                <div className="h-4 w-full bg-gray-600 rounded animate-pulse"></div>
              </span>
            </li>
            <li className="flex items-center p-1 leading-relaxed text-xs md:text-[14px]">
              <TagIcon />
              <span className="w-[240px] md:w-full">
                <div className="h-4 w-full bg-gray-600 rounded animate-pulse"></div>
              </span>
            </li>
            <li className="flex items-center p-1 leading-relaxed text-xs md:text-[14px]">
              <TagIcon />
              <span className="w-[240px] md:w-full">
                <div className="h-4 w-full bg-gray-600 rounded animate-pulse"></div>
              </span>
            </li>
            <li className="flex items-center p-1 leading-relaxed text-xs md:text-[14px]">
              <TagIcon />
              <span className="w-[240px] md:w-full">
                <div className="h-4 w-full bg-gray-600 rounded animate-pulse"></div>
              </span>
            </li>
          </ul>
        </div>

        <div className="p-4">
          <h2 className="text-gray-600 font-bold mb-1 dark:text-gray-100">
            <div className="h-8 w-32 bg-gray-600 rounded animate-pulse"></div>
          </h2>
          <ul className="max-w-md px-4 py-2 list-disc text-gray-400">
            <li>
              <div className="h-4 w-full bg-gray-600 rounded animate-pulse"></div>
            </li>
            <li>
              <div className="h-4 w-full bg-gray-600 rounded animate-pulse"></div>
            </li>
            <li>
              <div className="h-4 w-full bg-gray-600 rounded animate-pulse"></div>
            </li>
            <li>
              <div className="h-4 w-full bg-gray-600 rounded animate-pulse"></div>
            </li>
          </ul>
        </div>

        <div className="p-4">
          <h2 className="text-gray-600  font-bold py-2 dark:text-gray-100">
            <div className="h-8 w-36 bg-gray-600 rounded animate-pulse"></div>
          </h2>
          <div className="h-4 my-2 w-full bg-gray-600 rounded animate-pulse"></div>
          <div className="h-4 my-2 w-full bg-gray-600 rounded animate-pulse"></div>
          <div className="h-4 my-2 w-full bg-gray-600 rounded animate-pulse"></div>
          <div className="h-4 my-2 w-full bg-gray-600 rounded animate-pulse"></div>
        </div>

        <div className="grid grid-cols-2 gap-4 p-4 sticky bottom-0 bg-gray-900">
          <button className="bg-teal-600 opacity-50 p-3 text-xl rounded-xl">
            Add To Cart
          </button>
          <button className="bg-teal-600 opacity-50 p-3 text-xl rounded-xl">
            Buy Now
          </button>
        </div>
      </div>
    </main>
  );
}

const TagIcon: FC = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 24 24"
    className="text-green-500 mr-2"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"></path>
  </svg>
);

import Filters from "@/components/filter";
import React from "react";

export default async function page() {
  return (
    <main className="lg:grid grid-cols-5 gap-4 flex">
      <Filters />
      <div className="col-span-4 bg-white">
        <h1 className="px-4 pt-4 capitalize text-2xl lg:text-3xl w-fit">
          <div className="h-8 w-48 bg-gray-300 rounded-md animate-pulse" />
        </h1>
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
            className="bg-blue-600 rounded py-1.5 px-3 disabled:opacity-50 active:scale-95 disabled:active:scale-100"
            disabled
          >
            Prev
          </button>
          <span>Page 1</span>
          <button
            className="bg-blue-600 rounded py-1.5 px-3 disabled:opacity-50 active:scale-95 disabled:active:scale-100"
            disabled
          >
            Next
          </button>
        </div>
      </div>
    </main>
  );
}

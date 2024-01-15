import Filters from "@/components/filter";
import React from "react";

export default async function page() {
  return (
    <>
      <main className="bg-gray-900 md:grid grid-cols-4 flex">
        <Filters />
        <div className="gap-4 col-span-3 flex flex-col">
          <h1 className="p-5 text-2xl w-fit">
            <div className="h-8 w-32 bg-gray-600 rounded-md animate-pulse" />
          </h1>
          <div className="flex flex-col gap-4 w-fit">
            <div className="grid grid-cols-3">
              <div className="h-32 ml-2 aspect-[3/4] rounded-md animate-pulse sm:h-52 bg-gray-600 lg:h-64 object-contain col-span-1" />
              <div className=" col-span-2">
                <h3 className="text-xs overflow-hidden text-gray-200 px-2 py-1">
                  <div className="h-4 w-48 bg-gray-600 rounded-md animate-pulse" />
                </h3>
                <div className="h-4 my-1 mx-2 w-8 bg-gray-600 rounded-md animate-pulse" />
                <div className="h-6 m-2 w-32 bg-gray-600 rounded-md animate-pulse" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-fit">
            <div className="grid grid-cols-3">
              <div className="h-32 ml-2 aspect-[3/4] rounded-md animate-pulse sm:h-52 bg-gray-600 lg:h-64 object-contain col-span-1" />
              <div className=" col-span-2">
                <h3 className="text-xs overflow-hidden text-gray-200 px-2 py-1">
                  <div className="h-4 w-48 bg-gray-600 rounded-md animate-pulse" />
                </h3>
                <div className="h-4 my-1 mx-2 w-8 bg-gray-600 rounded-md animate-pulse" />
                <div className="h-6 m-2 w-32 bg-gray-600 rounded-md animate-pulse" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-fit">
            <div className="grid grid-cols-3">
              <div className="h-32 ml-2 aspect-[3/4] rounded-md animate-pulse sm:h-52 bg-gray-600 lg:h-64 object-contain col-span-1" />
              <div className=" col-span-2">
                <h3 className="text-xs overflow-hidden text-gray-200 px-2 py-1">
                  <div className="h-4 w-48 bg-gray-600 rounded-md animate-pulse" />
                </h3>
                <div className="h-4 my-1 mx-2 w-8 bg-gray-600 rounded-md animate-pulse" />
                <div className="h-6 m-2 w-32 bg-gray-600 rounded-md animate-pulse" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-fit">
            <div className="grid grid-cols-3">
              <div className="h-32 ml-2 aspect-[3/4] rounded-md animate-pulse sm:h-52 bg-gray-600 lg:h-64 object-contain col-span-1" />
              <div className=" col-span-2">
                <h3 className="text-xs overflow-hidden text-gray-200 px-2 py-1">
                  <div className="h-4 w-48 bg-gray-600 rounded-md animate-pulse" />
                </h3>
                <div className="h-4 my-1 mx-2 w-8 bg-gray-600 rounded-md animate-pulse" />
                <div className="h-6 m-2 w-32 bg-gray-600 rounded-md animate-pulse" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-fit">
            <div className="grid grid-cols-3">
              <div className="h-32 ml-2 aspect-[3/4] rounded-md animate-pulse sm:h-52 bg-gray-600 lg:h-64 object-contain col-span-1" />
              <div className=" col-span-2">
                <h3 className="text-xs overflow-hidden text-gray-200 px-2 py-1">
                  <div className="h-4 w-48 bg-gray-600 rounded-md animate-pulse" />
                </h3>
                <div className="h-4 my-1 mx-2 w-8 bg-gray-600 rounded-md animate-pulse" />
                <div className="h-6 m-2 w-32 bg-gray-600 rounded-md animate-pulse" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-fit">
            <div className="grid grid-cols-3">
              <div className="h-32 ml-2 aspect-[3/4] rounded-md animate-pulse sm:h-52 bg-gray-600 lg:h-64 object-contain col-span-1" />
              <div className=" col-span-2">
                <h3 className="text-xs overflow-hidden text-gray-200 px-2 py-1">
                  <div className="h-4 w-48 bg-gray-600 rounded-md animate-pulse" />
                </h3>
                <div className="h-4 my-1 mx-2 w-8 bg-gray-600 rounded-md animate-pulse" />
                <div className="h-6 m-2 w-32 bg-gray-600 rounded-md animate-pulse" />
              </div>
            </div>
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

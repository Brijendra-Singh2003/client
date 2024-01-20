import React from "react";

export default function loading() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="p-4 md:px-8 max-w-4xl w-full mx-auto bg-white shadow-md rounded-xl">
        <h1 className="text-xl py-4 md:text-2xl">My Profile</h1>
        <div className="flex flex-col gap-4 md:grid grid-cols-2 xl:gap-14">
          <div className="flex flex-col">
            <h3 className="py-2 text-gray-400">First name</h3>
            <div className="h-6 my-2 w-full bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="flex flex-col">
            <h3 className="py-2 text-gray-400">Last name</h3>
            <div className="h-6 my-2 w-full bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="flex flex-col">
            <h3 className="py-2 text-gray-400">Mobile Number</h3>
            <div className="h-6 my-2 w-full bg-gray-200 rounded animate-pulse" />
          </div>

          <div className="flex flex-col">
            <h3 className="py-2 text-gray-400">Gender</h3>
            <div className="h-6 my-2 w-full bg-gray-200 rounded animate-pulse" />
          </div>

          <button className="col-span-2 py-1.5 focus:scale-95 disabled:cursor-not-allowed transition-all hover:bg-blue-700 px-8 rounded-md ml-auto mt-4 bg-blue-600 text-white w-fit disabled:opacity-40">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaRegTrashCan } from "react-icons/fa6";

export default function loading() {
  return (
    <main className="w-full lg:grid grid-cols-3 gap-4 p-4 mx-auto max-w-6xl">
      <div className="w-full col-span-2 rounded-md flex flex-col gap-4 mb-4">
        {/* cart item */}
        <div className="grid grid-cols-subgrid bg-white rounded shadow md:shadow-md relative transition-all p-2">
          <div className="col-span-1">
            <div className="aspect-square w-full p-4 object-contain mx-auto bg-gray-200 rounded" />
          </div>
          <div className="col-span-2 overflow-x-hidden text-ellipsis">
            <p className="h-8 w-auto mx-2 bg-gray-200 rounded" />
            <p className="h-6 w-auto m-2 bg-gray-200 rounded" />
            <p className="h-8 w-auto max-w-36 m-2 bg-gray-200 rounded" />
          </div>
          <div className="col-span-3 bottom-4 right-4 flex gap-2 justify-end px-1">
            <button
              disabled
              className="px-3 flex disabled:opacity-40 justify-center transition-all active:scale-95 py-1.5 bg-red-500 active:bg-red-600 border rounded text-white"
            >
              <FaRegTrashCan />
            </button>
            <button className="px-3 opacity-40 transition-all active:scale-95 py-1.5 bg-blue-600 active:bg-blue-700 rounded text-white">
              Buy Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-subgrid bg-white rounded shadow md:shadow-md relative transition-all p-2">
          <div className="col-span-1">
            <div className="aspect-square w-full p-4 object-contain mx-auto bg-gray-200 rounded" />
          </div>
          <div className="col-span-2 overflow-x-hidden text-ellipsis">
            <p className="h-8 w-auto mx-2 bg-gray-200 rounded" />
            <p className="h-6 w-auto m-2 bg-gray-200 rounded" />
            <p className="h-8 w-auto max-w-36 m-2 bg-gray-200 rounded" />
          </div>
          <div className="col-span-3 bottom-4 right-4 flex gap-2 justify-end px-1">
            <button
              disabled
              className="px-3 flex disabled:opacity-40 justify-center transition-all active:scale-95 py-1.5 bg-red-500 active:bg-red-600 border rounded text-white"
            >
              <FaRegTrashCan />
            </button>
            <button className="px-3 opacity-40 transition-all active:scale-95 py-1.5 bg-blue-600 active:bg-blue-700 rounded text-white">
              Buy Now
            </button>
          </div>
        </div>
        <div className="grid grid-cols-subgrid bg-white rounded shadow md:shadow-md relative transition-all p-2">
          <div className="col-span-1">
            <div className="aspect-square w-full p-4 object-contain mx-auto bg-gray-200 rounded" />
          </div>
          <div className="col-span-2 overflow-x-hidden text-ellipsis">
            <p className="h-8 w-auto mx-2 bg-gray-200 rounded" />
            <p className="h-6 w-auto m-2 bg-gray-200 rounded" />
            <p className="h-8 w-auto max-w-36 m-2 bg-gray-200 rounded" />
          </div>
          <div className="col-span-3 bottom-4 right-4 flex gap-2 justify-end px-1">
            <button
              disabled
              className="px-3 flex disabled:opacity-40 justify-center transition-all active:scale-95 py-1.5 bg-red-500 active:bg-red-600 border rounded text-white"
            >
              <FaRegTrashCan />
            </button>
            <button className="px-3 opacity-40 transition-all active:scale-95 py-1.5 bg-blue-600 active:bg-blue-700 rounded text-white">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 flex flex-col gap-2 h-fit sticky top-14 rounded-md shadow-md">
        <h1 className="text-zinc-600 font-bold text-xl">PRICE DETAILS</h1>
        <hr />
        <ul>
          <li className="p-2 capitalize flex justify-between">
            <span>Price: </span> <span>₹0</span>
          </li>
          <li className="p-2 capitalize flex justify-between">
            <span>Discount: </span> <span className="text-green-600">- ₹0</span>
          </li>
          <li className="p-2 capitalize flex justify-between">
            <span>Delivery Charges: </span>{" "}
            <span className="text-red-600">+ ₹0</span>
          </li>
        </ul>
        <hr />
        <h2 className="flex font-bold text-lg justify-between p-2">
          <span>Total Amount</span> <span>₹0</span>
        </h2>
        <button className="p-3 rounded bg-orange-500 active:bg-orange-600 active:scale-95 active:shadow-none transition-all shadow-md text-white text-xl">
          Place Order
        </button>
      </div>
    </main>
  );
}

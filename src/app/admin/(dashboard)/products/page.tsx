"use client";

import TableHOC from "@/components/Table";
import Image from "next/image";
import React, { useState } from "react";
import { ColumnHelper, createColumnHelper } from "@tanstack/react-table";
import data from "./sampleData.json";

interface dataType {
  photo: string;
  name: string;
  price: number;
  stock: number;
}

const columnHelper: ColumnHelper<dataType> = createColumnHelper();

const columns = [
  columnHelper.accessor("photo", {
    header: "Picture",
    cell: (props) => (
      <Image
        className="mx-auto"
        src={props.getValue()}
        height={50}
        width={50}
        alt="product image"
      />
    ),
    enableSorting: false,
  }),
  columnHelper.accessor("name", { header: "Name" }),
  columnHelper.accessor("price", { header: "Price" }),
  columnHelper.accessor("stock", { header: "Stock" }),
  columnHelper.display({
    header: "Action",
    cell: () => <button>manage</button>,
    enableSorting: false,
  }),
];

export default function Page() {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [items, setItems] = useState(data);

  function handleSubmit(e: any) {
    e.preventDefault();
    setOpen(false);

    const formData = new FormData(e.target as HTMLFormElement);
    const item = Object.fromEntries(formData.entries()) as {
      image: string;
      name: string;
      price: string;
      stock: string;
    };

    setItems((prev) => [
      ...prev,
      {
        photo: item.image,
        name: item.name,
        price: Number.parseInt(item.price),
        stock: Number.parseInt(item.stock),
      },
    ]);

    e.target.reset();
  }

  return (
    <>
      <div className="bg-zinc-900 w-full p-4 overflow-x-auto">
        <div className="flex justify-between items-center h-16 p-2">
          <h1 className="text-xl ml-4">Products</h1>
          <button
            className="h-12 w-12 pb-1 rounded-3xl grid place-items-center bg-red-600"
            onClick={() => setOpen((prev) => !prev)}
          >
            <span className="text-4xl">+</span>
          </button>
        </div>
        <TableHOC columns={columns} data={items} className="w-full" />
      </div>
      <div
        onClick={() => setOpen(false)}
        hidden={!isOpen}
        className="absolute left-0 top-0 h-screen w-screen bg-zinc-900 opacity-50"
      ></div>
      <dialog
        open={isOpen}
        className="fixed bg-zinc-800 mx-auto border border-zinc-600 rounded-xl top-1/2 -translate-y-1/2 h-96 w-72"
      >
        <form
          onSubmit={handleSubmit}
          className="h-full w-full flex flex-col justify-evenly gap-4 p-4"
        >
          <input
            className="p-2 bg-transparent text-white border border-zinc-600 bg-gray-200 rounded-md"
            required
            type="text"
            placeholder="name"
            name="name"
          />
          <input
            className="p-2 bg-transparent text-white border border-zinc-600 bg-gray-200 rounded-md"
            required
            type="text"
            placeholder="image"
            name="image"
          />
          <input
            className="p-2 bg-transparent text-white border border-zinc-600 bg-gray-200 rounded-md"
            required
            type="text"
            placeholder="price"
            name="price"
          />
          <input
            className="p-2 bg-transparent text-white border border-zinc-600 bg-gray-200 rounded-md"
            required
            type="text"
            placeholder="stock"
            name="stock"
          />
          <div className="grid grid-cols-2 gap-4">
            <button
              type="submit"
              className="bg-blue-600 p-3 rounded-lg text-white"
            >
              ADD
            </button>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="border-blue-600 border-2 p-3 rounded-lg text-white"
            >
              CANCEL
            </button>
          </div>
        </form>
      </dialog>
    </>
  );
}

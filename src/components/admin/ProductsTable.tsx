"use client";

import React from "react";
import Image from "next/image";
import { ColumnHelper, createColumnHelper } from "@tanstack/react-table";
import TableHOC from "./Table";
import Link from "next/link";
import { BsPencilFill } from "react-icons/bs";

const columnHelper: ColumnHelper<product> = createColumnHelper();

const columns = [
  columnHelper.accessor("photo", {
    header: "Picture",
    cell: (props) => (
      <Image
        className="mx-auto h-12 w-12 object-contain"
        src={props.getValue()}
        height={48}
        width={48}
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
    cell: (prop) => {
      const item = prop.row.original;
      return (
        <Link
          className="w-full py-4 grid place-items-center"
          href={"/admin/products/" + item.id}
        >
          <BsPencilFill />
        </Link>
      );
    },
    enableSorting: false,
  }),
];

export default function ProductsTable({ data }: { data: product[] }) {
  return <TableHOC columns={columns} data={data} className="w-full" />;
}

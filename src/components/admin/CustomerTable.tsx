"use client";

import React from "react";
import Image from "next/image";
import { ColumnHelper, createColumnHelper } from "@tanstack/react-table";
import TableHOC from "./Table";
import { BsTrash3Fill } from "react-icons/bs";

const columnHelper: ColumnHelper<customer> = createColumnHelper();

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
  columnHelper.accessor("gender", { header: "Gender" }),
  columnHelper.accessor("email", { header: "Email" }),
  columnHelper.accessor("role", { header: "Role" }),
  columnHelper.display({
    header: "Action",
    cell: (prop) => {
      const item = prop.row.original;
      return (
        <button className="w-full py-4 grid place-items-center">
          <BsTrash3Fill />
        </button>
      );
    },
    enableSorting: false,
  }),
];

export default function CustomerTable({ data }: { data: customer[] }) {
  return <TableHOC columns={columns} data={data} className="w-full" />;
}

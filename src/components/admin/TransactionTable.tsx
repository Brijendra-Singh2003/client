"use client";

import React from "react";
import { ColumnHelper, createColumnHelper } from "@tanstack/react-table";
import TableHOC from "./Table";
import { BsPencilFill } from "react-icons/bs";

const columnHelper: ColumnHelper<transaction> = createColumnHelper();
const map = {
  Processing: "text-red-400",
  Shipped: "text-yellow-400",
  Delivered: "text-green-400",
};

const columns = [
  columnHelper.accessor("name", { header: "Name" }),
  columnHelper.accessor("amount", { header: "Amount" }),
  columnHelper.accessor("discount", { header: "Discount" }),
  columnHelper.accessor("quantity", { header: "Quantity" }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (prop) => {
      const status = prop.getValue();
      return <span className={map[status]}>{status}</span>;
    },
  }),
  columnHelper.display({
    header: "Action",
    cell: (prop) => (
      <button className="w-full py-4 grid place-items-center">
        <BsPencilFill />
      </button>
    ),
    enableSorting: false,
  }),
];

export default function TransactionTable({ data }: { data: transaction[] }) {
  return <TableHOC columns={columns} data={data} className="w-full" />;
}

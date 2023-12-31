import { ColumnHelper, createColumnHelper } from "@tanstack/react-table";
import TableHOC from "./Table";

interface DataType {
  id: string;
  quantity: number;
  discount: number;
  amount: number;
  status: string;
}
const columnHelper: ColumnHelper<DataType> = createColumnHelper();

const columns = [
  columnHelper.accessor("id", { header: "ID", enableSorting: false }),
  columnHelper.accessor("quantity", { header: "Quantity" }),
  columnHelper.accessor("discount", { header: "Discount" }),
  columnHelper.accessor("amount", { header: "Amount" }),
  columnHelper.accessor("status", { header: "Status", enableSorting: false }),
];

const DashboardTable = ({
  data = [],
  className,
}: {
  data: DataType[];
  className?: string;
}) => {
  return TableHOC<DataType>({ columns, data, className });
};

export default DashboardTable;

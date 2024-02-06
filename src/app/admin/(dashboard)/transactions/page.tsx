import TransactionTable from "@/components/admin/TransactionTable";
import data from "./data";

export default async function Page() {
  return (
    <div className="bg-white p-4 h-screen overflow-y-auto pb-14 ">
      <div className="flex justify-between items-center h-16 p-4">
        <h1 className="text-xl font-bold ml-4">Customers</h1>
      </div>
      <div className="overflow-x-auto max-w-[100vw]">
        <TransactionTable data={data} />
      </div>
      <div className="w-full h-32 flex items-center justify-center gap-4">
        <button
          disabled={true}
          className="px-4 py-2 disabled:opacity-50 rounded-lg bg-blue-600"
        >
          Prev
        </button>
        <span>Page 1 of 1</span>
        <button
          disabled={false}
          className="px-4 py-2 disabled:opacity-50 rounded-lg bg-blue-600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

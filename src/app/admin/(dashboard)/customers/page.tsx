import data from "./data";
import CustomerTable from "@/components/admin/CustomerTable";

export default async function Page() {
  return (
    <div className="bg-gray-900 h-screen overflow-y-auto pb-14 p-4">
      <div className="flex justify-between items-center h-16 p-4">
        <h1 className="text-xl font-bold ml-4">Customers</h1>
      </div>
      <div className="overflow-x-auto max-w-[100vw]">
        <CustomerTable data={data} />
      </div>
      <div className="w-full h-32 flex items-center justify-center gap-4">
        <button className="px-4 py-2 rounded-lg bg-blue-600">Prev</button>
        <span>Page 1 of 1</span>
        <button className="px-4 py-2 rounded-lg bg-blue-600">Next</button>
      </div>
    </div>
  );
}

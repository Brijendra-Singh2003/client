import ProductsTable from "@/components/admin/ProductsTable";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
import { Suspense } from "react";
import { headers } from "next/headers";

export default async function Page() {
  return (
    <div className="bg-white shadow-md pb-14 p-4 rounded-md">
      <div className="flex justify-between items-center h-16 p-4">
        <h1 className="text-xl ml-4">Products</h1>
        <Link
          className="h-12 w-12 p-2 text-white rounded-3xl grid place-items-center bg-blue-600 active:scale-95 transition-all"
          href="/admin/products/new"
        >
          <IoMdAdd />
        </Link>
      </div>
      <div className="overflow-x-auto max-w-[100vw]">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Table />
        </Suspense>
      </div>
      <div className="w-full h-32 flex items-center justify-center gap-4">
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
          Prev
        </button>
        <span>
          Page
          <input
            className="w-12 border rounded"
            type="number"
            defaultValue={1}
          />
          of 1
        </span>
        <button className="px-4 py-2 rounded-lg bg-blue-600 text-white">
          Next
        </button>
      </div>
    </div>
  );
}

const Table = async () => {
  const r = await fetch(
    process.env.NEXT_PUBLIC_SERVER_URL + "/api/user/products",
    {
      headers: headers(),
      cache: "no-store",
    }
  );
  const products = await r.json();
  return <ProductsTable data={products} />;
};

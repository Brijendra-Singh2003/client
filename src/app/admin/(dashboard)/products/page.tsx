import ProductsTable from "@/components/admin/ProductsTable";
import Link from "next/link";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="bg-gray-900 h-screen overflow-y-auto pb-14 p-4">
      <div className="flex justify-between items-center h-16 p-4">
        <h1 className="text-xl ml-4">Products</h1>
        <Link
          className="h-12 w-12 rounded-3xl grid place-items-center bg-red-600"
          href="/admin/products/new"
        >
          <span className="text-4xl">+</span>
        </Link>
      </div>
      <div className="overflow-x-auto max-w-[100vw]">
        <Suspense fallback={<h1>Loading...</h1>}>
          <Table />
        </Suspense>
      </div>
      <div className="w-full h-32 flex items-center justify-center gap-4">
        <button className="px-4 py-2 rounded-lg bg-blue-600">Prev</button>
        <span>
          Page
          <input
            className="w-12 bg-gray-800 border rounded"
            type="number"
            defaultValue={1}
          />
          of 1
        </span>
        <button className="px-4 py-2 rounded-lg bg-blue-600">Next</button>
      </div>
    </div>
  );
}

const Table = async () => {
  const data = await (
    await fetch("http://localhost:3000/api/products", { cache: "no-store" })
  ).json();
  return <ProductsTable data={data} />;
};

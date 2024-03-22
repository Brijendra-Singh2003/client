import Link from "next/link";
import React from "react";
import DeleteBtn from "./DeleteBtn";
import { prisma } from "@/db/demo";
import { auth } from "@/actions/auth";
import { Address } from "@prisma/client";

export default async function page() {
  const session = await auth();

  let addresses: Address[] = [];

  if (session?.user) {
    addresses = await prisma.address.findMany({
      where: {
        userId: session.user.id as string,
      },
    });
  }

  return (
    <main className="min-h-screen pt-4 bg-slate-150">
      <div className="bg-white max-w-2xl w-full mx-auto p-2 xl:p-8">
        <div className="p-4 flex items-center justify-between bg-white w-full mb-4 mx-auto">
          <h1 className="text-xl text-ellipsis text-nowrap overflow-hidden">
            My Addresses
          </h1>
          <Link
            href="/address/edit"
            className="bg-blue-600 text-sm text-white px-3 py-1.5 rounded active:scale-95 transition"
          >
            ADD NEW
          </Link>
        </div>
        <div className="w-full mx-auto py-2 flex flex-col">
          {addresses?.map((address) => (
            <div key={address.id} className="border bg-white p-4">
              <div className="flex justify-between">
                <h1 className="font-semibold uppercase">
                  {address.name} - {address.phone}
                </h1>
                <div className="flex gap-2">
                  <Link
                    className="text-blue-600"
                    href={"/address/edit?id=" + address.id}
                  >
                    Edit
                  </Link>
                  <DeleteBtn id={address.id} />
                </div>
              </div>
              <p className="mt-2">
                <span>{address.locality}</span>
                <span> {address.landmark}</span>
                <span> {address.address}</span>
                <span> {address.city}</span>
                <span>, {address.state} - </span>
                <span className="font-semibold"> {address.pincode}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const dummyData = {
  addresses: [
    {
      id: 1,
      createdAt: "2024-03-08T07:29:14.350Z",
      updatedAt: "2024-03-08T07:31:27.550Z",
      name: "Home",
      phone: "9098775412",
      pincode: "484551",
      locality: "",
      address: "Ward no 14, House no. 114, Pali Birsinghpur",
      city: "Umariya",
      state: "Madhya Pradesh",
      landmark: "",
      work: false,
      userId: "117894805345599166360",
    },
  ],
};

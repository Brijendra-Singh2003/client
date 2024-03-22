import React from "react";
import Form from "./form";
import { redirect } from "next/navigation";
import { prisma } from "@/db/demo";

export default async function page({
  searchParams,
}: {
  searchParams: { id?: string | number };
}) {
  const id = Number.parseInt(searchParams.id as string);

  if (!id) {
    return (
      <main className="w-screen flex justify-center py-4">
        <Form
          id={searchParams.id as string}
          defaultData={dummyData as address}
        />
      </main>
    );
  }

  const addresses = await prisma.address.findUnique({ where: { id: id } });
  if (!addresses) {
    redirect("/address");
  }

  return (
    <main className="w-screen flex justify-center py-4">
      <Form id={searchParams.id as string} defaultData={addresses as any} />
    </main>
  );
}

const dummyData = {
  name: "",
  phone: "",
  pincode: "",
  locality: "",
  address: "",
  city: "",
  state: "",
  landmark: "",
};

import React from "react";
import Form from "./form";
import { headers } from "next/headers";

export default async function page(params: { searchParams: { id?: string } }) {
  const addresses = params.searchParams.id
    ? await fetch(
        process.env.NEXT_PUBLIC_SERVER_URL +
          "/api/address/" +
          params.searchParams.id,
        { headers: headers() }
      )
        .then((res) => res.json())
        .catch((err) => {
          return dummyData;
        })
    : dummyData;
  return (
    <main className="w-screen flex justify-center py-4">
      <Form id={params.searchParams.id} defaultData={addresses} />
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

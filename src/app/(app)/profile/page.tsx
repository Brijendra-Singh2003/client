import React from "react";
import Form from "./Form";
import { auth } from "@/actions/auth";
import { headers } from "next/headers";

export type formData = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  gender?: "male" | "female";
};

export default async function Page() {
  const session = await auth();
  let profile: formData = {
    firstName: "",
    lastName: "",
    phone: "",
  };

  if (session) {
    profile = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api/user/", {
      headers: headers(),
    })
      .then((res) => res.json())
      .catch((e) => {
        console.log(e.message);
        return {};
      });
  } else {
    return (
      <div className="flex flex-col gap-4 p-4">
        <div className="p-4 md:px-8 max-w-4xl w-full mx-auto bg-white shadow-md rounded-xl">
          <h1 className="text-xl py-4 md:text-2xl">Please Login</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="p-4 md:px-8 max-w-4xl w-full mx-auto bg-white shadow-md rounded-xl">
        <h1 className="text-xl py-4 md:text-2xl">My Profile</h1>
        <Form profile={profile} />
      </div>
    </div>
  );
}

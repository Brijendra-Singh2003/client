import React from "react";
import Form from "./Form";
import { auth } from "@/actions/auth";
import { getProfile } from "@/db/User";

export type formData = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  gender?: "male" | "female";
};

const defaultData = {
  firstName: "",
  lastName: "",
  phone: "",
};

export default async function Page() {
  const session = await auth();

  if (!session?.user) {
    return (
      <div className="flex flex-col gap-4 p-4">
        <div className="p-4 md:px-8 max-w-4xl w-full mx-auto bg-white shadow-md rounded-xl">
          <h1 className="text-xl py-4 md:text-2xl">Please Login</h1>
        </div>
      </div>
    );
  }

  const profile = (await getProfile(session.user.id as string)) || defaultData;

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="p-4 md:px-8 max-w-4xl w-full mx-auto bg-white shadow-md rounded-xl">
        <h1 className="text-xl py-4 md:text-2xl">My Profile</h1>
        <Form profile={profile as formData} />
      </div>
    </div>
  );
}

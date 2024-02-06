// import { options } from "@/app/api/auth/[...nextauth]/options";
// import { getProfile } from "@/db/User";
// import { getServerSession } from "next-auth";
// import { redirect } from "next/navigation";
import React from "react";
import Form from "./Form";
import { getServerSession } from "@/actions/auth";

export type formData = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  gender?: "male" | "female";
};

export default async function Page() {
  const session = (await getServerSession()) as mySession;
  let profile: formData = {
    firstName: "",
    lastName: "",
    phone: "",
  };

  if (session && session?.id) {
    const res = await fetch(
      process.env.NEXT_PUBLIC_SERVER_URL + "/api/user/" + session.id
    );
    profile = await res.json();
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
        <Form profile={profile} userId={session.id as string} />
      </div>
    </div>
  );
}

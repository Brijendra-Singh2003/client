import { options } from "@/app/api/auth/[...nextauth]/options";
import { getProfile } from "@/db/User";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import Form from "./Form";

export type formData = {
  firstName?: string;
  lastName?: string;
  phone?: string;
  gender?: "male" | "female";
};

export default async function Page() {
  const session = (await getServerSession(options)) as mySession;
  console.log("server session: ", session);
  let profile: formData = {
    firstName: "",
    lastName: "",
    phone: "",
  };

  if (session && session.user?.id) {
    profile = (await getProfile(session.user.id)) as formData;
    console.log("user profile: ", profile, session.user);
  } else {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="p-4 md:px-8 max-w-4xl w-full mx-auto bg-white shadow-md rounded-xl">
        <h1 className="text-xl py-4 md:text-2xl">My Profile</h1>
        <Form profile={profile} userId={session.user.id as string} />
      </div>
    </div>
  );
}

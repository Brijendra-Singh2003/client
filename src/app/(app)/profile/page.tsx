import { options } from "@/app/api/auth/[...nextauth]/options";
import { Profile, getProfile, getUser, setProfile } from "@/db/User";
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
  const session = await getServerSession(options);
  console.log("server session: ", session);
  let profile: formData = {
    firstName: "",
    lastName: "",
    phone: "",
  };
  let user:
    | {
        id: number;
        email: string;
        name: string | null;
        role: string;
      }
    | null
    | undefined;

  if (session && session.user?.email) {
    user = await getUser(session.user?.email);
    console.log("gat user from db: ", user);
    if (user) {
      profile = (await getProfile(user?.id as number)) as Profile;
      console.log("user profile: ", profile);
    }
  } else {
    redirect("/api/auth/signin");
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="p-4 md:px-8 max-w-4xl w-full mx-auto bg-gray-900 rounded-xl">
        <h1 className="text-xl py-4 md:text-2xl">My Profile</h1>
        <Form profile={profile} userId={user?.id as number} />
      </div>
    </div>
  );
}

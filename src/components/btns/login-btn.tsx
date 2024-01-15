"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SigninBtn({ session }: { session: Session }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((a) => !a);
  const close = () => setIsOpen(false);
  if (session) {
    return (
      <>
        <Image
          className="h-10 w-10 object-cover "
          height={100}
          width={100}
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
          alt=""
          onClick={toggle}
        />
        {isOpen && (
          <>
            <div
              className="fixed top-0 left-0 h-screen w-screen"
              onClick={() => close()}
            />
            <div
              onClick={close}
              className="fixed right-4 lg:right-auto top-16 rounded-lg pt-3 px-2 w-44 bg-gray-800 shadow-md shadow-black"
            >
              <Link className="py-3 px-4" href="/profile">
                My Profile
              </Link>
              <button onClick={() => signOut()} className="py-3 px-4">
                Logout
              </button>
            </div>
          </>
        )}
      </>
    );
  }
  return (
    <button
      className="px-3 py-2 bg-teal-600 hover:bg-teal-700 active:scale-95 transition-all rounded-lg"
      onClick={() => signIn("google")}
    >
      Signin
    </button>
  );
}

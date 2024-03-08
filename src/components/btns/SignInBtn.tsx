import Link from "next/link";
import React from "react";

export default function SignInBtn() {
  return (
    <a
      className="px-2 py-1 text-black bg-white active:scale-95 transition-all rounded-lg"
      href={process.env.NEXT_PUBLIC_SERVER_URL + "/api/auth/signin/google"}
    >
      Sign In
    </a>
  );
}

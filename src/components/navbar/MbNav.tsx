import { headers } from "next/headers";
import React from "react";
import Nav from "./Nav";
import BackBtn from "../btns/BackBtn";
import { SearchBox } from ".";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { getCartSize } from "@/db/item";
import { auth } from "@/actions/auth";

export default async function MbNav() {
  const session = await auth();
  let count: string | number = "0";
  if (session?.user) {
    count = await getCartSize(session.user.id as string);
  }
  return (
    <Nav className="flex sticky bg-white transition-all z-10 gap-4 p-2 lg:px-[10%] justify-between h-14 items-center">
      <BackBtn className="text-2xl aspect-square p-2 rounded-full active:bg-zinc-300 transition-all" />
      <SearchBox className="flex h-full w-full sm-w-56 lg:w-64 border focus-within:shadow xl:w-96 md:border md:px-2 rounded" />
      <div className="flex gap-6">
        {session?.user ? (
          <Link className="mr-3 w-6  h-6 relative rounded-3xl" href="/cart">
            <span className="absolute -top-3 -right-3 text-sm text-white bg-red-600 h-5 px-1 rounded-xl font-mono">
              {count}
            </span>
            <AiOutlineShoppingCart />
          </Link>
        ) : (
          <Link
            className="px-3 py-2 active:scale-95 text-nowrap transition-all rounded-lg"
            href={
              process.env.NEXT_PUBLIC_SERVER_URL + "/api/auth/signin/google"
            }
          >
            Login
          </Link>
        )}
      </div>
    </Nav>
  );
}

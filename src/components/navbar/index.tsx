import Link from "next/link";
import React, { FormHTMLAttributes } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MyAccount from "@/components/btns/Account";
import { headers } from "next/headers";
import Nav from "./Nav";
import SignInBtn from "../btns/SignInBtn";

const Navbar = async ({ session }: { session: mySession }) => {
  let count = "0";
  if (session) {
    const res = await fetch(
      process.env.NEXT_PUBLIC_SERVER_URL + "/api/cart/size",
      {
        headers: headers(),
        next: {
          tags: ["cart"],
        },
        cache: "no-store",
      }
    );
    count = await res.text();
  }
  return (
    <nav className="bg-blue-600 w-full sticky -top-12 transition-all shadow z-10">
      <div className="py-2 px-4 text-white max-w-6xl mx-auto flex flex-wrap w-full z-10 gap-4 justify-between">
        <Link href="/" className="text-2xl font-bold">
          Logo.
        </Link>

        <SearchBox className="hidden sm:flex w-fit flex-grow-[0.5] gap-4 bg-white text-black px-2 focus-within:outline focus-within:outline-1 focus-within:shadow-lg" />

        <div className="flex gap-6 relative pr-2">
          {session?.id ? (
            <MyAccount count={count} image={session.image} />
          ) : (
            <SignInBtn />
          )}
        </div>

        <SearchBox className="flex sm:hidden text-black w-full h-8 focus-within:shadow flex-grow-[0.5] gap-4 bg-white px-2" />
      </div>
      <div className="w-screen p-1 overflow-x-auto bg-white">
        <ul className="w-fit flex gap-2 mx-auto py-1">
          <li className="active:scale-90 transition-all">
            <Link
              className="w-fit border cursor-pointer px-2 rounded py-1 text-nowrap"
              href="/topwear"
            >
              Topwear
            </Link>
          </li>
          <li className="active:scale-90 transition-all">
            <Link
              className="w-fit border cursor-pointer px-2 rounded py-1 text-nowrap"
              href="/bottomwear"
            >
              Bottomwear
            </Link>
          </li>
          <li className="active:scale-90 transition-all">
            <Link
              className="w-fit border cursor-pointer px-2 rounded py-1 text-nowrap"
              href="/footwear"
            >
              Footwear
            </Link>
          </li>
          <li className="active:scale-90 transition-all">
            <Link
              className="w-fit border cursor-pointer px-2 rounded py-1 text-nowrap"
              href="/hoodie"
            >
              Hoodies
            </Link>
          </li>
          <li className="active:scale-90 transition-all">
            <Link
              className="w-fit border cursor-pointer px-2 rounded py-1 text-nowrap"
              href="/cap"
            >
              Caps
            </Link>
          </li>
          <li className="active:scale-90 transition-all">
            <Link
              className="w-fit border cursor-pointer px-2 rounded py-1 text-nowrap"
              href="/mug"
            >
              Mugs
            </Link>
          </li>
          <li className="active:scale-90 transition-all">
            <Link
              className="w-fit border cursor-pointer px-2 rounded py-1 text-nowrap"
              href="/mousepad"
            >
              Mousepads
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export function SearchBox(props: FormHTMLAttributes<any>) {
  return (
    <form action="/search" {...props}>
      <input
        autoComplete="off"
        className="bg-transparent w-full outline-none px-2"
        type="text"
        required
        name="q"
        placeholder="search products..."
      />
      <button className="h-full p-1 flex-grow">
        <AiOutlineSearch />
      </button>
    </form>
  );
}

export default Navbar;

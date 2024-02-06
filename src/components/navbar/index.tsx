import Link from "next/link";
import React, { FormHTMLAttributes } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SigninBtn from "@/components/btns/login-btn";
import { headers } from "next/headers";

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
      }
    );
    count = await res.text();
  }
  return (
    <>
      <div className="py-2 px-4 lg:px-[10%] bg-blue-600 text-white flex flex-wrap w-full z-10 gap-4 justify-between sticky -top-14 sm:top-0">
        <Link href="/" className="text-3xl font-bold">
          Logo.
        </Link>

        <SearchBox className="hidden sm:flex w-fit flex-grow-[0.5] gap-4 bg-white text-black rounded-lg px-2 focus-within:outline focus-within:outline-1 focus-within:shadow-lg" />

        <div className="flex gap-6 relative">
          {session?.id ? (
            <SigninBtn count={count} />
          ) : (
            <Link
              className="px-3 py-2 text-black bg-white active:scale-95 transition-all rounded-lg"
              href={
                process.env.NEXT_PUBLIC_SERVER_URL + "/api/auth/signin/google"
              }
            >
              Sign In
            </Link>
          )}
        </div>

        <SearchBox className="flex sm:hidden text-black w-full h-10 focus-within:shadow flex-grow-[0.5] gap-4 bg-white px-2" />
      </div>
      <div className="w-screen p-2 overflow-x-auto bg-white">
        <ul className="w-fit flex gap-2 mx-auto">
          <li className="w-fit border active:scale-90 transition-all cursor-pointer px-3 rounded-lg py-1.5 text-nowrap">
            <Link href="/topwear">Top wear</Link>
          </li>
          <li className="w-fit border active:scale-90 transition-all cursor-pointer px-3 rounded-lg py-1.5 text-nowrap">
            <Link href="/bottomwear">Bottom wear</Link>
          </li>
          <li className="w-fit border active:scale-90 transition-all cursor-pointer px-3 rounded-lg py-1.5 text-nowrap">
            <Link href="/footwear">Foot wear</Link>
          </li>
          <li className="w-fit border active:scale-90 transition-all cursor-pointer px-3 rounded-lg py-1.5 text-nowrap">
            <Link href="/hoodie">Hoodies</Link>
          </li>
          <li className="w-fit border active:scale-90 transition-all cursor-pointer px-3 rounded-lg py-1.5 text-nowrap">
            <Link href="/cap">Caps</Link>
          </li>
          <li className="w-fit border active:scale-90 transition-all cursor-pointer px-3 rounded-lg py-1.5 text-nowrap">
            <Link href="/mug">Mugs</Link>
          </li>
          <li className="w-fit border active:scale-90 transition-all cursor-pointer px-3 rounded-lg py-1.5 text-nowrap">
            <Link href="/mousepad">Mousepads</Link>
          </li>
        </ul>
      </div>
    </>
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
      <button className="h-full p-2 flex-grow">
        <AiOutlineSearch />
      </button>
    </form>
  );
}

export default Navbar;

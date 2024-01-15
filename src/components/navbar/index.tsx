import Link from "next/link";
import React, { FC } from "react";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import SigninBtn from "../btns/login-btn";
import { handleSearch } from "@/actions/search";
import { Session } from "next-auth";

const Navbar = ({ session }: { session: Session }) => {
  return (
    <div className="p-4 lg:px-[10%] bg-gray-900 flex flex-wrap w-full z-10 gap-4 justify-between shadow-md sticky -top-16 sm:top-0">
      <Link href="/" className="text-3xl font-bold">
        Logo.
      </Link>

      {/* search bar */}
      <form
        action={handleSearch}
        className="hidden sm:flex w-fit flex-grow-[0.5] gap-4 bg-gray-700 focus-within:shadow-zinc-900 rounded-lg px-2 focus-within:outline focus-within:outline-1 focus-within:shadow-lg"
      >
        <input
          className="bg-transparent w-full outline-none px-2"
          type="text"
          name="search-product"
          required
          autoComplete="kcvluyc"
          placeholder="search products..."
        />
        <button className="h-full p-2 flex-grow">
          <AiOutlineSearch />
        </button>
      </form>

      <div className="flex gap-4">
        <Link
          className="p-2 relative hover:bg-gray-700 rounded-3xl"
          href="/cart"
        >
          <span className="absolute -top-1 -right-1 text-sm bg-red-600 h-5 px-1 rounded-xl font-mono">
            0
          </span>
          <AiOutlineShoppingCart />
        </Link>
        <SigninBtn session={session} />
      </div>

      <div className="flex sm:hidden w-[calc(100vw-32px)] mx-auto h-10 flex-grow-[0.5] gap-4 bg-gray-700 focus-within:shadow-zinc-900 focus-within:outline rounded-lg px-2 focus-within:shadow-lg">
        <input
          autoComplete="off"
          className="bg-transparent w-full outline-none px-2"
          type="text"
          required
          name="search-product"
        />
        <button className="h-full p-2 flex-grow">
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

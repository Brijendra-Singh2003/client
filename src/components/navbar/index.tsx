import Link from "next/link";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SigninBtn from "../btns/login-btn";
import { handleSearch } from "@/actions/search";
import { Session } from "next-auth";
import { getUser } from "@/db/User";

const Navbar = async ({ session }: { session: Session | null }) => {
  let count = 0;
  if (session?.user?.email) {
    const user: any = await getUser(session.user?.email, {
      cart: {
        select: { id: true },
      },
    });
    count = user?.cart?.length || 0;
  }
  return (
    <div className="pt-4 pb-2 px-4 lg:px-[10%] bg-blue-600 text-white flex flex-wrap w-full z-10 gap-4 justify-between sticky -top-16 sm:-top-2">
      <Link href="/" className="text-3xl font-bold">
        Logo.
      </Link>

      {/* search bar */}
      <form
        action="/search"
        className="hidden sm:flex w-fit flex-grow-[0.5] gap-4 bg-white text-black rounded-lg px-2 focus-within:outline focus-within:outline-1 focus-within:shadow-lg"
      >
        <input
          className="bg-transparent w-full outline-none px-2"
          type="text"
          name="q"
          required
          autoComplete="kcvluyc"
          placeholder="search products..."
        />
        <button className="h-full p-2 flex-grow">
          <AiOutlineSearch />
        </button>
      </form>

      <div className="flex gap-6">
        <SigninBtn session={session} count={count} />
      </div>

      <div className="flex sm:hidden text-black w-full h-10 focus-within:shadow flex-grow-[0.5] gap-4 bg-white px-2">
        <input
          autoComplete="off"
          className="bg-transparent w-full outline-none px-2"
          type="text"
          required
          name="search-product"
          placeholder="search products..."
        />
        <button className="h-full p-2 flex-grow">
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
};

export default Navbar;

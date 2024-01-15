import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";
import Footer from "@/components/footer";
import { Session, getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Link from "next/link";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(options);
  return (
    <>
      <Navbar session={session as Session} />
      <div className="w-screen p-2 overflow-x-auto bg-gray-900">
        <ul className="w-fit flex gap-4 mx-auto">
          <li className="w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 pb-0.5 text-nowrap">
            <Link href="/Topwear">Top wear</Link>
          </li>
          <li className="w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 pb-0.5 text-nowrap">
            <Link href="/Bottomwear">Bottom wear</Link>
          </li>
          <li className="w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 pb-0.5 text-nowrap">
            <Link href="/footwear">Foot wear</Link>
          </li>
          <li className="w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 pb-0.5 text-nowrap">
            <Link href="/hoodie">Hoodies</Link>
          </li>
          <li className="w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 pb-0.5 text-nowrap">
            <Link href="/caps">Caps</Link>
          </li>
          <li className="w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 pb-0.5 text-nowrap">
            <Link href="/mug">Mugs</Link>
          </li>
          <li className="w-fit hover:bg-gray-700 bg-gray-700 sm:bg-transparent rounded-xl cursor-pointer px-3 pb-0.5 text-nowrap">
            <Link href="/mousepad">Mousepads</Link>
          </li>
        </ul>
      </div>
      {children}
      <Footer />
    </>
  );
};

export default layout;

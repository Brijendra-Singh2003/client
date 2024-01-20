import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";
import Footer from "@/components/footer";
import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import Link from "next/link";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(options);
  return (
    <>
      <Navbar session={session} />
      <div className="w-screen p-2 overflow-x-auto bg-white">
        <ul className="w-fit flex gap-4 mx-auto">
          <li className="w-fit hover:underline cursor-pointer px-3 pb-0.5 text-nowrap">
            <Link href="/topwear">Top wear</Link>
          </li>
          <li className="w-fit hover:underline cursor-pointer px-3 pb-0.5 text-nowrap">
            <Link href="/bottomwear">Bottom wear</Link>
          </li>
          <li className="w-fit hover:underline cursor-pointer px-3 pb-0.5 text-nowrap">
            <Link href="/footwear">Foot wear</Link>
          </li>
          <li className="w-fit hover:underline cursor-pointer px-3 pb-0.5 text-nowrap">
            <Link href="/hoodie">Hoodies</Link>
          </li>
          <li className="w-fit hover:underline cursor-pointer px-3 pb-0.5 text-nowrap">
            <Link href="/cap">Caps</Link>
          </li>
          <li className="w-fit hover:underline cursor-pointer px-3 pb-0.5 text-nowrap">
            <Link href="/mug">Mugs</Link>
          </li>
          <li className="w-fit hover:underline cursor-pointer px-3 pb-0.5 text-nowrap">
            <Link href="/mousepad">Mousepads</Link>
          </li>
        </ul>
      </div>
      <main className="p-2 md:p-4">{children}</main>
      <Footer />
    </>
  );
};

export default layout;

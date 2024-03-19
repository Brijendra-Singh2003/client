"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cartState, useCartStore } from "@/context/UserContext";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./login-btn.css";
import { SignOut } from "../Auth-Components";

export default function Account({
  count,
  image,
}: {
  count: string;
  image?: string;
}) {
  const [isOpen, setIsOpen] = useState("scale-0");
  const { setCartSize, cartSize } = useCartStore((state) => state) as cartState;

  useEffect(() => {
    setCartSize(0);
  }, [setCartSize]);

  const open = () => setIsOpen("open");
  const close = () => setIsOpen("close");

  return (
    <>
      <Link
        className="p-1 relative rounded-3xl active:scale-95 transition-all"
        href="/cart"
      >
        {count !== "0" && (
          <span className="absolute -top-1 -right-1 text-sm bg-red-600 h-5 px-1 rounded-xl font-mono">
            {count}
          </span>
        )}
        <AiOutlineShoppingCart />
      </Link>
      <Image
        className="h-8 w-8 object-cover rounded-full"
        height={100}
        width={100}
        src={
          image ||
          "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
        }
        alt=""
        onClick={open}
      />
      {isOpen == "open" && (
        <div className="fixed top-0 left-0 h-screen w-screen" onClick={close} />
      )}
      <div
        onClick={close}
        className={
          "absolute flex flex-col right-4 border lg:right-auto rounded h-fit w-44 bg-white py-1 text-black shadow-md " +
          isOpen
        }
      >
        <Link
          className="px-4 py-2 hover:bg-zinc-100 transition-all"
          href="/profile"
        >
          My Profile
        </Link>
        <Link
          className="px-4 py-2 hover:bg-zinc-100 transition-all"
          href="/address"
        >
          My Addresses
        </Link>
        <Link
          className="px-4 py-2 hover:bg-zinc-100 transition-all"
          href="/admin"
        >
          My Dashbord
        </Link>
        <SignOut className="px-4 py-2 hover:bg-zinc-100 transition-all" />
      </div>
    </>
  );
}

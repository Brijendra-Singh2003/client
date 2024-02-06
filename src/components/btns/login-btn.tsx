"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { cartState, useCartStore } from "@/context/UserContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRouter } from "next/navigation";

import "./login-btn.css";

export default function SigninBtn({ count }: { count: string }) {
  const [isOpen, setIsOpen] = useState("scale-0");
  const { setCartSize, cartSize } = useCartStore((state) => state) as cartState;
  const router = useRouter();

  useEffect(() => {
    setCartSize(0);
  }, [setCartSize]);

  const open = () => setIsOpen("open");
  const close = () => setIsOpen("close");

  async function signOut() {
    await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api/auth/signout", {
      credentials: "include",
    });
    router.refresh();
  }
  return (
    <>
      <Link
        className="p-2 relative rounded-3xl active:bg-blue-800 transition-all"
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
        className="h-10 w-10 object-cover"
        height={100}
        width={100}
        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
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
          href="/admin"
        >
          My Dashbord
        </Link>
        <button
          onClick={signOut}
          className="px-4 py-2 text-left text-red-600 hover:bg-zinc-100 transition-all"
        >
          Logout
        </button>
      </div>
    </>
  );
}

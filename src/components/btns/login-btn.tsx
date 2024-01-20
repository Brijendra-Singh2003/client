"use client";

import { Session } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cartState, useCartStore } from "@/context/UserContext";
import { AiOutlineShoppingCart, AiOutlineLogout } from "react-icons/ai";

export default function SigninBtn({
  session,
  count,
}: {
  session: Session | null;
  count: number;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((a) => !a);
  const close = () => setIsOpen(false);
  const { setCartSize, cartSize } = useCartStore((state) => state) as cartState;

  useEffect(() => {
    setCartSize(count);
  }, [count]);

  if (session) {
    return (
      <>
        <Link className="p-2 relative rounded-3xl" href="/cart">
          <span className="absolute -top-1 -right-1 text-sm bg-red-600 h-5 px-1 rounded-xl font-mono">
            {cartSize}
          </span>
          <AiOutlineShoppingCart />
        </Link>
        <Image
          className="h-10 w-10 object-cover "
          height={100}
          width={100}
          src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/profile-pic-male_4811a1.svg"
          alt=""
          onClick={toggle}
        />
        {isOpen && (
          <>
            <div
              className="fixed top-0 left-0 h-screen w-screen"
              onClick={() => close()}
            />
            <div
              onClick={close}
              className="absolute flex flex-col right-4 lg:right-auto top-20 rounded h-fit w-44 bg-white py-1 text-black shadow-md"
            >
              <Link className="px-4 py-2" href="/profile">
                My Profile
              </Link>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 text-left text-red-600"
              >
                Logout
              </button>
            </div>
          </>
        )}
      </>
    );
  }
  return (
    <button
      className="px-3 py-2 text-black bg-white active:scale-95 transition-all rounded-lg"
      onClick={() => signIn("google")}
    >
      Signin
    </button>
  );
}

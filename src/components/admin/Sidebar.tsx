"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { RiShoppingBag3Fill, RiDashboardFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";

const SidebarLink = ({
  href,
  path,
  children,
}: {
  href: string;
  path: string;
  children: ReactNode;
}) => {
  return (
    <Link
      className={
        "flex lg:flex-row p-2 lg:border flex-col lg:gap-2 items-center lg:px-5 lg:py-3 rounded " +
        (path === href
          ? "bg-blue-100 border-blue-400"
          : "hover:border-blue-400")
      }
      href={href}
    >
      {children}
    </Link>
  );
};

export default function AdminSidebar() {
  const path: string = usePathname();

  return (
    <aside className="bg-white lg:order-1 w-full lg:w-full lg:px-4 py-1.5 col-span-1 shadow lg:h-[calc(100vh-56px)] sticky lg:top-14 bottom-0 lg:z-0 h-14">
      {/* DASHBOARD */}
      <h5 className="hidden lg:block text-xl p-2">Dashboard</h5>
      <ul className="flex lg:flex-col gap-1 w-full lg:w-auto justify-around">
        <SidebarLink path={path} href="/admin">
          <RiDashboardFill />
          <span className="text-[2.5vw] sm:text-base">Dashboard</span>
        </SidebarLink>

        <SidebarLink path={path} href="/admin/products">
          <RiShoppingBag3Fill />
          <span className="text-[2.5vw] sm:text-base">Products</span>
        </SidebarLink>

        <SidebarLink path={path} href="/admin/customers">
          <IoIosPeople />
          <span className="text-[2.5vw] sm:text-base">Customers</span>
        </SidebarLink>

        <SidebarLink path={path} href="/admin/transactions">
          <AiFillFileText />
          <span className="text-[2.5vw] sm:text-base">Transactions</span>
        </SidebarLink>
      </ul>
    </aside>
  );
}

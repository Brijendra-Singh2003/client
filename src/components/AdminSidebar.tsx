"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { BsSearch, BsBellFill } from "react-icons/bs";
import Image from "next/image";
import {
  RiShoppingBag3Fill,
  RiDashboardFill,
  RiCoupon3Fill,
} from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import {
  FaChartBar,
  FaChartPie,
  FaChartLine,
  FaStopwatch,
  FaGamepad,
} from "react-icons/fa";

const SidebarLink = ({
  href,
  path,
  children,
}: {
  href: string;
  path: string;
  children: ReactNode;
}) => (
  <Link
    className={
      "flex gap-2 items-center px-5 py-3 rounded " +
      (path === href
        ? "text-white bg-zinc-700"
        : "text-zinc-400 hover:bg-zinc-700 hover:text-white")
    }
    href={href}
  >
    {children}
  </Link>
);

export default function AdminSidebar({ children }: { children: ReactNode }) {
  const path: string = usePathname();

  return (
    <>
      <aside className="bg-zinc-900 w-60 hidden lg:block h-screen overflow-y-auto scroll sticky top-0 shadow-md shadow-black">
        <h2 className="text-2xl font-bold px-2 py-4 sticky top-0 bg-zinc-900">
          Logo.
        </h2>

        {/* DASHBOARD */}
        <div className="px-4 py-2">
          <h5 className="text-gray-300 w-full">Dashboard</h5>
          <ul className="m-2 flex flex-col gap-1">
            <SidebarLink path={path} href="/admin">
              <RiDashboardFill />
              Dashboard
            </SidebarLink>

            <SidebarLink path={path} href="/admin/products">
              <RiShoppingBag3Fill />
              Products
            </SidebarLink>

            <SidebarLink path={path} href="/admin/customers">
              <IoIosPeople />
              Customers
            </SidebarLink>

            <SidebarLink path={path} href="/admin/transactions">
              <AiFillFileText />
              Transactions
            </SidebarLink>
          </ul>
        </div>

        {/* CHARTS */}
        <div className="px-4 py-2">
          <h5 className="text-gray-300 w-full">Charts</h5>
          <ul className="m-2 flex flex-col gap-1">
            <SidebarLink path={path} href="/admin/charts/bar">
              <FaChartBar />
              Bar
            </SidebarLink>

            <SidebarLink path={path} href="/admin/charts/pie">
              <FaChartPie />
              Pie
            </SidebarLink>

            <SidebarLink path={path} href="/admin/charts/line">
              <FaChartLine />
              Line
            </SidebarLink>
          </ul>
        </div>

        {/* APPS */}
        <div className="px-4 py-2">
          <h5 className="text-gray-300 w-full">Apps</h5>
          <ul className="m-2 flex flex-col gap-1">
            <SidebarLink path={path} href="/admin/apps/stopwatch">
              <FaStopwatch />
              Stopwatch
            </SidebarLink>

            <SidebarLink path={path} href="/admin/apps/coupon">
              <RiCoupon3Fill />
              Coupon
            </SidebarLink>

            <SidebarLink path={path} href="/admin/apps/toss">
              <FaGamepad />
              Toss
            </SidebarLink>
          </ul>
        </div>
      </aside>

      <div className="z-10">
        <div className="bg-zinc-900 flex items-center h-14 shadow-md shadow-black sticky top-0 nav">
          <BsSearch />
          <input
            className="h-full bg-transparent flex-grow outline-none"
            type="text"
            placeholder="search product, user"
          />
          <BsBellFill />
          <Image
            className="h-8 w-8 rounded-2xl mr-4"
            height={49}
            width={49}
            src="/assets/default-avatar.png"
            alt="user image"
          />
        </div>
        {children}
      </div>
    </>
  );
}

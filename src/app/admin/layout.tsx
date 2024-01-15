"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import { BsSearch, BsBellFill } from "react-icons/bs";
import Image from "next/image";
import { RiShoppingBag3Fill, RiDashboardFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";
import { FaChartBar } from "react-icons/fa";
import Footer from "@/components/footer";

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
        "flex gap-2 items-center px-5 py-3 rounded " +
        (path === href
          ? "text-white bg-gray-700"
          : "text-gray-400 hover:bg-gray-700 hover:text-white")
      }
      href={href}
    >
      {children}
    </Link>
  );
};

export default function AdminSidebar({ children }: { children: ReactNode }) {
  const path: string = usePathname();

  return (
    <html>
      <body className=" bg-gray-800">
        <aside className="bg-gray-900 w-60 hidden lg:block h-screen overflow-y-auto scroll fixed top-0 border-r border-gray-600">
          <h2 className="text-2xl font-bold px-2 py-4 sticky top-0 bg-gray-900">
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
            </ul>
          </div>
        </aside>

        <div className="lg:pl-[240px]">
          <div className=" bg-gray-900 z-10 flex items-center h-14 shadow-md shadow-black sticky top-0 nav">
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
          <Footer />
        </div>
      </body>
    </html>
  );
}

import React, { ReactNode } from "react";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import AdminSidebar from "@/components/admin/Sidebar";

export default async function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="lg:grid grid-cols-5 xl:grid-cols-6">
        <main className="col-span-4 lg:order-2 xl:col-span-5 bg-zinc-100 p-4">
          {children}
        </main>
        <AdminSidebar />
      </div>
      <Footer />
    </>
  );
}

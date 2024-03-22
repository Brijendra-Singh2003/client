import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";
import Footer from "@/components/footer";

const layout = async ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="sm:p-2 md:p-4">{children}</main>
      <Footer />
    </>
  );
};

export default layout;

import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";
import Footer from "@/components/footer";
import { auth } from "@/actions/auth";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();

  return (
    <>
      <Navbar session={session?.user as mySession} />
      <main className="sm:p-2 md:p-4">{children}</main>
      <Footer />
    </>
  );
};

export default layout;

import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";
import Footer from "@/components/footer";
import { getServerSession } from "@/actions/auth";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession();
  console.log(session);

  return (
    <>
      <Navbar session={session} />
      <main className="sm:p-2 md:p-4">{children}</main>
      <Footer />
    </>
  );
};

export default layout;

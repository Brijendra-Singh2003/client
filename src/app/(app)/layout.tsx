import Navbar from "@/components/navbar";
import React, { ReactNode } from "react";
import Footer from "@/components/footer";
import { Session, getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";

const layout = async ({ children }: { children: ReactNode }) => {
  const session = await getServerSession(options);
  return (
    <>
      <Navbar session={session as Session} />
      {children}
      <Footer />
    </>
  );
};

export default layout;

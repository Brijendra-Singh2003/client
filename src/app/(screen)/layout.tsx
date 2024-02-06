import { getServerSession } from "@/actions/auth";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import MbNav from "@/components/navbar/MbNav";
import { headers } from "next/headers";
import React, { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
  const isMobile: boolean = headers()
    .get("user-agent")
    ?.match(/Android|iPhone|iPad|iPod|webOS|Opera Mini|IEMobile|WPDesktop/i)
    ? true
    : false;
  const session = (await getServerSession()) as mySession;
  return (
    <>
      {isMobile ? <MbNav session={session} /> : <Navbar session={session} />}
      {children}
      <Footer />
    </>
  );
}

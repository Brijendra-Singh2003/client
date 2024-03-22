import { auth } from "@/actions/auth";
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
  return (
    <>
      {isMobile ? <MbNav /> : <Navbar />}
      {children}
      <Footer />
    </>
  );
}

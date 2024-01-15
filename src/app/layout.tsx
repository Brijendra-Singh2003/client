import React, { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthSession from "@/context/AuthSession";

const inter = Inter({ weight: "400", subsets: ["latin"] });

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body className={inter.className + " bg-gray-800"}>
        <AuthSession>{children}</AuthSession>
      </body>
    </html>
  );
};

export default layout;

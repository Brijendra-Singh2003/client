import React, { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthSession from "@/context/AuthSession";
import "react-toastify/dist/ReactToastify.css";
import { Metadata } from "next";

const inter = Inter({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: "/manifest.json",
  title: "Ecommerce App",
  description: "Generated by create next app",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "64x64 32x32 24x24 16x16",
      url: "/favicon.ico",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "192x192",
      url: "/logo192.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "512x512",
      url: "/logo512.png",
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      url: "/logo192.png",
    },
  ],
};

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body className={inter.className + " bg-zinc-100"}>
        {children}
        <AuthSession />
      </body>
    </html>
  );
};

export default layout;

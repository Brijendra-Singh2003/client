"use client";

import { useRouter } from "next/navigation";
import React, { ButtonHTMLAttributes } from "react";
import { IoArrowBack } from "react-icons/io5";

export default function BackBtn(props: ButtonHTMLAttributes<any>) {
  const router = useRouter();
  return (
    <button {...props} onClick={() => router.back()}>
      <IoArrowBack />
    </button>
  );
}

import { headers } from "next/headers";
import React from "react";
import CartItem from "./CartItem";
import { auth } from "@/actions/auth";
import { prisma } from "@/db/demo";
import { getItemByUserId } from "@/db/item";

export default async function page() {
  const session = await auth();

  if (!session?.user) {
    return <h1>Please Signin to view cart</h1>;
  }

  const products = await getItemByUserId(session.user.id as string);

  products.reverse();

  return <CartItem list={products} />;
}

const product: Product[] = [
  {
    id: 14,
    name: "Dr.Ortho Orthopedic Slippers | Acupressure Slippers | Flip-Flops | For Men & Women's Slippers",
    description:
      "Effective Pain Relief Dr. Ortho Acupressure Slippers\u202femploy the science of acupressure to bring a healthy dose of walking experience into our everyday lives. With regular wear of a minimum of 30 minutes, these orthopaedic slippers can help improve our blood circulation, which in turn will lead to better and more comfortable movement of our bodies. However, Dr. Ortho slippers can be worn all day long",
    price: 495,
    discount: 148,
    imageUrl: "https://i.ibb.co/MBPbbjZ/c036387acfc5.jpg",
    stock: 42,
    createdAt: new Date(),
    updatedAt: new Date(),
    brandId: null,
    categoryId: 1,
    userId: "117894805345599166360",
    imageId: "z6P11LQ",
  },
];

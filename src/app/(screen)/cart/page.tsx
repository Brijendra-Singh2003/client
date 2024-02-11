import { headers } from "next/headers";
import React from "react";
import CartItem from "./CartItem";

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

export default async function page() {
  let products = await fetch(process.env.NEXT_PUBLIC_SERVER_URL + "/api/cart", {
    headers: headers(),
    next: {
      tags: ["cart"],
    },
  })
    .then((data) => data.json())
    .catch((err) => {
      console.log(err);
      return [];
    });

  products.reverse();
  // console.log("products: ", products);

  let price = 0;
  let discount = 0;

  products =
    products.length > 0
      ? products.map(({ id, product }: any) => {
          price += product.price as number;
          discount += product.discount as number;
          return <CartItem id={id} product={product} key={product.id} />;
        })
      : "";

  return (
    <main className="w-full lg:grid grid-cols-3 gap-4 p-4 mx-auto max-w-6xl">
      <div className="w-full col-span-2 rounded-md flex flex-col gap-4 mb-4">
        {products}
      </div>
      <div className="bg-white p-4 flex flex-col gap-2 h-fit sticky top-16 rounded-md shadow-md">
        <h1 className="text-zinc-600 font-bold text-xl">PRICE DETAILS</h1>
        <hr />
        <ul>
          <li className="p-2 capitalize flex justify-between">
            <span>Price: </span> <span>{price}</span>
          </li>
          <li className="p-2 capitalize flex justify-between">
            <span>Discount: </span>{" "}
            <span className="text-green-600">{discount}</span>
          </li>
          <li className="p-2 capitalize flex justify-between">
            <span>Delivery Charges: </span> <span>50</span>
          </li>
        </ul>
        <hr />
        <h2 className="flex font-bold text-lg justify-between p-2">
          <span>Total Amount</span> <span>{price - discount + 50}</span>
        </h2>
        <button className="p-3 rounded bg-orange-500 active:bg-orange-600 active:scale-95 active:shadow-none transition-all shadow-md text-white text-xl">
          Place Order
        </button>
      </div>
    </main>
  );
}

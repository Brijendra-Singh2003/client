"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { toast } from "react-toastify";

import React from "react";

type props = {
  list: {
    product: item;
    id: number;
    quantity: number;
  }[];
};

export default function CartItem({ list }: props) {
  const [products, setProducts] = useState(list);
  const [total, setTotal] = useState({ price: 0, discount: 0 });

  async function setCount(id: number, quantity: number) {
    console.log("upadting: ", { id: id, quantity: quantity });
    const res = await fetch(
      process.env.NEXT_PUBLIC_SERVER_URL + "/api/cart/update",
      {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id, quantity: quantity }),
      }
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data);
      setProducts(data.reverse());
      init(data);
      toast.success("Quantuty updated");
    } else {
      toast.success("Failed to update");
    }
  }

  async function RemoveItem(id: number) {
    const res = await fetch(
      process.env.NEXT_PUBLIC_SERVER_URL + "/api/cart/" + id,
      {
        method: "DELETE",
        credentials: "include",
      }
    );
    if (res.ok) {
      const data = await res.json();
      setProducts(data.reverse());
      init(data);
      toast.success("Item removed From Cart");
    } else {
      toast.success("Failed to removed Item");
    }
  }

  function init(products: any) {
    const newTotal = { price: 0, discount: 0 };
    products.forEach((e: any) => {
      newTotal.price += e.product.price * e.quantity;
      newTotal.discount += e.product.discount * e.quantity;
      return e;
    });
    setTotal(newTotal);
  }

  useEffect(() => {
    init(list);
  }, []);

  return (
    <main className="w-full lg:grid grid-cols-3 gap-4 p-4 mx-auto max-w-6xl">
      <div className="w-full col-span-2 rounded-md flex flex-col gap-4 mb-4">
        {products.map((props) => (
          <Item
            key={props.id}
            {...props}
            setCount={setCount}
            RemoveItem={RemoveItem}
          />
        ))}
      </div>
      <div className="bg-white p-4 flex flex-col gap-2 h-fit sticky top-14 rounded-md shadow-md">
        <h1 className="text-zinc-600 font-bold text-xl">PRICE DETAILS</h1>
        <hr />
        <ul>
          <li className="p-2 capitalize flex justify-between">
            <span>Price: </span> <span>₹{total.price}</span>
          </li>
          <li className="p-2 capitalize flex justify-between">
            <span>Discount: </span>{" "}
            <span className="text-green-600">- ₹{total.discount}</span>
          </li>
          <li className="p-2 capitalize flex justify-between">
            <span>Delivery Charges: </span>{" "}
            <span className="text-red-600">+ ₹50</span>
          </li>
        </ul>
        <hr />
        <h2 className="flex font-bold text-lg justify-between p-2">
          <span>Total Amount</span>{" "}
          <span>₹{total.price - total.discount + 50}</span>
        </h2>
        <button className="p-3 rounded bg-orange-500 active:bg-orange-600 active:scale-95 active:shadow-none transition-all shadow-md text-white text-xl">
          Place Order
        </button>
      </div>
    </main>
  );
}

function Item({
  id,
  product,
  quantity,
  setCount,
  RemoveItem,
}: {
  product: item;
  id: number;
  quantity: number;
  setCount: (id: number, count: number) => Promise<void>;
  RemoveItem: (id: number) => Promise<void>;
}) {
  const [loading, setloading] = useState(false);

  async function update(count: number) {
    setloading(true);
    await setCount(id, count);
    setloading(false);
  }

  return (
    <div
      key={product.id}
      className="grid grid-cols-subgrid bg-white rounded shadow md:shadow-md relative transition-all p-2"
    >
      <Link href={"/product/" + product.id} className="col-span-1">
        <Image
          height={600}
          width={600}
          src={product.imageUrl}
          alt={product.name + " image"}
          className="aspect-square w-full md:p-4 object-contain mx-auto"
        />
      </Link>
      <div className="col-span-2 overflow-x-hidden text-ellipsis py-2">
        <Link
          href={"/product/" + product.id}
          className="px-2 uppercase lg:w-52 text-nowrap py-1"
        >
          {product.name}
        </Link>
        <h5 className="w-fit ml-2 flex gap-1 px-1 rounded text-xs bg-green-600 text-white items-center">
          4.2
          <AiFillStar />
        </h5>
        <p className="flex items-center px-2 gap-1">
          <b className="text-lg">
            ₹{(product.price - product.discount) * quantity}
          </b>
          <span className="text-gray-400 line-through">
            {product.price * quantity}
          </span>
          <span className=" text-green-500 text-nowrap">
            {Math.floor((product.discount / product.price) * 100)}% Off
          </span>
        </p>
        <div className="flex w-fit m-4 items-center border h-fit border-blue-600">
          <button
            disabled={quantity == 1 || loading}
            onClick={() => update(quantity - 1)}
            className="w-8 h-8 disabled:opacity-40 bg-blue-600 active:bg-blue-600 text-white transition-all"
          >
            -
          </button>
          <pre className="px-2 min-w-8 text-center text-xl">{quantity}</pre>
          <button
            disabled={loading}
            onClick={() => update(quantity + 1)}
            className="w-8 h-8 disabled:opacity-40 bg-blue-600 active:bg-blue-600 text-white transition-all"
          >
            +
          </button>
        </div>
      </div>
      <div className="col-span-3 bottom-4 right-4 flex gap-2 justify-end px-1">
        <button
          onClick={async () => {
            setloading(true);
            await RemoveItem(id);
            setloading(false);
          }}
          disabled={loading}
          className="px-3 flex disabled:opacity-40 justify-center transition-all active:scale-95 py-1.5 bg-red-500 active:bg-red-600 border rounded text-white"
        >
          <FaRegTrashCan />
        </button>
        <button className="px-3 transition-all active:scale-95 py-1.5 bg-blue-600 active:bg-blue-700 rounded text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function CartItem({ id, product }: any) {
  const [count, setCount] = useState<number>(1);
  const [loading, setloading] = useState(false);
  const router = useRouter();

  async function RemoveItem() {
    setloading(true);
    const res = await fetch(
      process.env.NEXT_PUBLIC_SERVER_URL + "/api/cart/" + id,
      {
        method: "DELETE",
      }
    );
    const data = await res.text();
    setloading(false);
    console.log(data);
    toast.success("Item removed From Cart");
    router.refresh();
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
          className="aspect-square w-full p-4 object-contain mx-auto"
        />
      </Link>
      <div className="col-span-2 overflow-x-hidden text-ellipsis py-4">
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
          <b className="text-lg">₹{product.price - product.discount}</b> ;
          <span className="text-gray-400 line-through">{product.price}</span>{" "}
          <span className=" text-green-500 text-nowrap">
            {Math.floor((product.discount / product.price) * 100)}% Off
          </span>
        </p>
        <div className="flex w-fit m-4 items-center border h-fit border-blue-600">
          <button
            disabled={count == 1}
            onClick={() => setCount((p) => p - 1)}
            className="w-8 h-8 disabled:opacity-40 bg-blue-600 active:bg-blue-600 text-white transition-all"
          >
            -
          </button>
          <pre className="px-2 min-w-8 text-center text-xl">{count}</pre>
          <button
            onClick={() => setCount((p) => p + 1)}
            className="w-8 h-8 disabled:opacity-40 bg-blue-600 active:bg-blue-600 text-white transition-all"
          >
            +
          </button>
        </div>
      </div>
      <div className="col-span-3 bottom-4 right-4 flex gap-2 justify-end px-1">
        <button
          onClick={RemoveItem}
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

export default CartItem;

"use client";

import RevalidateAction from "@/actions/RevalidateTag";
import { cartState, useCartStore } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

type prop = {
  item: Product;
  session: mySession;
};

export default function AddToCartBtn({ item, session }: prop) {
  const { setCartSize, cartSize } = useCartStore((state) => state) as cartState;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function addItemToCart() {
    setLoading(true);
    setCartSize(cartSize + 1);
    const res = await fetch(
      process.env.NEXT_PUBLIC_SERVER_URL + "/api/cart/" + item.id,
      {
        credentials: "include",
        method: "POST",
      }
    );
    const data = await res.text();
    if (data === "success") {
      RevalidateAction("cart");
      toast.success("Item Added To Cart");
    }
    setLoading(false);
    router.push("/cart");
  }

  return (
    <div className="grid border shadow-md grid-cols-2 sticky bottom-0 bg-white">
      <button
        disabled={loading}
        className="bg-white disabled:opacity-40 py-3 active:scale-95 text-xl"
        onClick={addItemToCart}
      >
        Add To Cart
      </button>
      <button
        disabled={loading}
        className="bg-yellow-500 disabled:opacity-40 py-3 text-xl"
      >
        Buy Now
      </button>
    </div>
  );
}

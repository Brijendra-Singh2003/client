"use client";

import { RevalidateURL } from "@/actions/RevalidateTag";
import { cartState, useCartStore } from "@/context/UserContext";
import { useState } from "react";
import { toast } from "react-toastify";

type prop = {
  item: {
    id: number;
    name: string;
    price: number;
    discount: number;
    imageUrl: string;
  };
  className?: string;
};

export default function AddToCartBtn({ item, className }: prop) {
  const { setCartSize, cartSize } = useCartStore((state) => state) as cartState;
  const [loading, setLoading] = useState(false);

  async function addItemToCart() {
    setLoading(true);
    setCartSize(cartSize + 1);
    const data = await fetch("/api/cart/" + item.id, {
      credentials: "include",
      method: "POST",
    })
      .then((data) => data.text())
      .catch((err) => console.log(err));
    if (data === "success") {
      RevalidateURL("/cart");
      toast.success("Item Added To Cart");
    } else {
      toast.error(data || "Failed to add Item to Cart");
    }
    setLoading(false);
  }

  return (
    <div className={className}>
      <button
        disabled={loading}
        className="bg-white disabled:opacity-40 py-3 active:scale-95"
        onClick={addItemToCart}
      >
        Add To Cart
      </button>
      <button
        disabled={loading}
        className="bg-yellow-500 disabled:opacity-40 py-3"
      >
        Buy Now
      </button>
    </div>
  );
}

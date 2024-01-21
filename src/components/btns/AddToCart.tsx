"use client";

import { cartState, useCartStore } from "@/context/UserContext";
import { Product } from "@prisma/client";

type prop = {
  item: Product;
  session: mySession;
};

export default function AddToCartBtn({ item, session }: prop) {
  const { setCartSize, cartSize } = useCartStore((state) => state) as cartState;

  return (
    <div className="grid grid-cols-2 gap-4 p-4 sticky bottom-0 bg-white">
      <button
        className="bg-blue-600 text-white p-3 active:scale-95 text-xl rounded-xl"
        onClick={() => setCartSize(cartSize + 1)}
      >
        Add To Cart
      </button>
      <button className="bg-blue-600 text-white p-3 text-xl rounded-xl">
        Buy Now
      </button>
    </div>
  );
}

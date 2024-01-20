"use client";

import { create } from "zustand";

export type cartState = {
  cartSize: number;
  setCartSize: (newSize: number) => void;
};

export const useCartStore = create((set) => ({
  cartSize: 0,
  setCartSize: (size: number) =>
    set((state: cartState) => ({ cartSize: size })),
}));

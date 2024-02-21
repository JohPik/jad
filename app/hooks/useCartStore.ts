import { CartProduct } from "@/utils/constants";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CartState {
  cart: CartProduct[];
  addToCart: (product: CartProduct) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product) =>
        set((state) => {
          const currentCart = [...state.cart];
          currentCart.push(product);
          return { cart: currentCart };
        }),
      clearCart: () => set(() => ({ cart: [] })),
    }),
    { name: "cartStore" }
  )
);

'use client'
import { create } from 'zustand'
import { CartState } from '../types/CartState'
import { persist } from 'zustand/middleware'
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],

      addToCart: (product) => {
        const existing = get().cart.find((item) => item.id === product.id)
        if (existing) {
          set({
            cart: get().cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
          })
        } else {
          set({ cart: [...get().cart, { ...product, quantity: 1 }] })
        }
      },

      removeFromCart: (id) =>
        set({ cart: get().cart.filter((item) => item.id !== id) }),

      clearCart: () => set({ cart: [] }),

      increaseQuantity: (id) =>
        set({
          cart: get().cart.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }),

      decreaseQuantity: (id) =>
        set({
          cart: get()
            .cart.map((item) =>
              item.id === id
                ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
                : item
            )
            .filter((item) => item.quantity > 0),
        }),
    }),
    {
      name: 'cart-storage', 
    }
  )
)

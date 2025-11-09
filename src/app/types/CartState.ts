import { CartItem } from './CartItem '
import { Product } from './Product'

export interface CartState {
  cart: CartItem[]
  addToCart: (product: Product) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
  increaseQuantity: (id: number) => void
  decreaseQuantity: (id: number) => void
}

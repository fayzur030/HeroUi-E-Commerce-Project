import { Product } from './Product'

export interface CartItem extends Product {
  name: string
  quantity: number
}

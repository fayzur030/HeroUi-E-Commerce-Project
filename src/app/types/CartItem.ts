import { Product } from './Product'

export interface CartItem extends Product {
  id: number
  title: string
  price: number
  image: string
  description?: string
  quantity: number
}

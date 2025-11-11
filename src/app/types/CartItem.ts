import { Product } from './Product'

export interface CartItem extends Product {
  id: number
  title: string
  price: number
  name: string
  image: string
  description: string
  quantity: number
}

'use client'

import { useCartStore } from '../store/useCartStore'
import Link from 'next/link'
import { Button, Card } from '@heroui/react'
import Image from 'next/image'
import { CartItem } from '../types/CartItem'

const Cart = () => {
  const { cart, removeFromCart, addToCart } = useCartStore()
  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2)

  return (
    <div className='max-w-7xl mx-auto min-h-screen p-6 bg-gray-50'>
      {/* Header */}
      <div className='text-center font-semibold mb-8 gap-4'>
        <h1 className='text-3xl font-bold text-gray-900'>🛒 Your Cart</h1>
      </div>

      {cart.length === 0 ? (
        <div className='flex flex-col items-center justify-center mt-20'>
          <p className='text-gray-600 text-lg mb-4'>Your cart is empty</p>
          <Link href='/'>
            <Button color='primary'>Shop Now</Button>
          </Link>
        </div>
      ) : (
        <div className='space-y-6'>
          {cart.map((item: CartItem) => (
            <Card
              key={item.id}
              className='p-6 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-lg hover:shadow-2xl transition-shadow rounded-2xl bg-white'
            >
              {/* Image & Info */}
              <div className='flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className='rounded-xl object-cover shadow-md'
                />
                <div className='text-center sm:text-left'>
                  <h3 className='text-lg font-semibold text-gray-900'>
                    {item.name}
                  </h3>
                  <p className='text-gray-500 mt-1'>
                    ${item.price} x {item.quantity}
                  </p>
                  <p className='text-gray-600 mt-1'>
                    Subtotal: ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className='flex justify-center sm:flex-col sm:justify-start gap-3 mt-4 sm:mt-0'>
                <Button
                  color='primary'
                  onClick={() => addToCart(item)}
                  className='w-full sm:w-auto shadow-sm hover:shadow-md'
                >
                  Add
                </Button>
                <Button
                  color='danger'
                  onClick={() => removeFromCart(item.id)}
                  className='w-full sm:w-auto shadow-sm hover:shadow-md'
                >
                  Remove
                </Button>
              </div>
            </Card>
          ))}

          {/* Total & Checkout */}
          <Card className='p-6 mt-6 flex flex-col sm:flex-row justify-between items-center shadow-lg rounded-2xl bg-white'>
            <h2 className='text-2xl font-semibold text-gray-900'>
              Total: ${total}
            </h2>
            <Button
              color='success'
              size='sm'
              className='mt-4 sm:mt-0 shadow-md hover:shadow-lg'
              onClick={() => alert('Proceed to checkout')}
            >
              Checkout
            </Button>
          </Card>
        </div>
      )}
    </div>
  )
}

export default Cart

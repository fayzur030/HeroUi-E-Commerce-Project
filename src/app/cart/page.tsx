'use client'

import { useCartStore } from '../store/useCartStore'
import Link from 'next/link'
import { Button, Card } from '@heroui/react'
import Image from 'next/image'

const Cart = () => {
  const { cart, removeFromCart } = useCartStore()
  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2)

  return (
    <div className='max-w-7xl mx-auto min-h-screen'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4'>
        <h1 className='text-3xl font-bold text-gray-800'>🛒 Your Cart</h1>
        <Link href='/'>
          <Button color='secondary' className='whitespace-nowrap'>
            Back to Shop
          </Button>
        </Link>
      </div>

      {cart.length === 0 ? (
        <p className='text-center text-gray-600 text-lg mt-20'>Cart is empty</p>
      ) : (
        <div className='space-y-4'>
          {/* Cart Items */}
          {cart.map((item) => (
            <Card
              key={item.id}
              className='p-4 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-md hover:shadow-lg transition-shadow rounded-xl'
            >
              <div className='flex items-center gap-4 w-full sm:w-auto'>
                <Image
                  src={item.image}
                  alt={item.name}
                  width={80}
                  height={80}
                  className='rounded-lg object-cover'
                />
                <div>
                  <h3 className='font-semibold text-gray-800'>{item.name}</h3>
                  <p className='text-gray-600'>
                    ${item.price} x {item.quantity}
                  </p>
                </div>
              </div>
              <Button
                color='danger'
                onPress={() => removeFromCart(item.id)}
                className='mt-2 sm:mt-0'
              >
                Remove
              </Button>
            </Card>
          ))}

          {/* Total & Checkout */}
          <Card className='p-6 mt-4 text-right shadow-md rounded-xl'>
            <h2 className='text-xl font-semibold text-gray-800'>
              Total: ${total}
            </h2>
            <Button color='success' className='mt-3'>
              Checkout
            </Button>
          </Card>
        </div>
      )}
    </div>
  )
}

export default Cart

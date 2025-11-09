'use client'

import { useCartStore } from '../store/useCartStore'
import { Button, Card } from '@heroui/react'
import { products } from '../data/products'
import Image from 'next/image'

export default function Home() {
  const { addToCart } = useCartStore()

  return (
    <div className='max-w-7xl mx-auto p-6'>
      {/* Products Grid */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {products.map((p) => (
          <Card
            key={p.id}
            className='p-4 shadow-lg hover:shadow-xl transition-shadow duration-200'
          >
            <Image
              src={p.image}
              alt={p.name}
              width={400}
              height={300}
              className='rounded-xl mb-3 w-full object-cover'
            />
            <h2 className='font-semibold text-lg mb-1'>{p.name}</h2>
            <p className='text-gray-600 mb-2'>${p.price.toFixed(2)}</p>
            <p className='text-sm text-gray-500 line-clamp-2 mb-3'>
              {p.description}
            </p>
            <Button color='success' onPress={() => addToCart(p)}>
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

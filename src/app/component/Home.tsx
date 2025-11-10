'use client'

import { useState, useEffect } from 'react'
import { useCartStore } from '../store/useCartStore'
import { Button, Card } from '@heroui/react'
import Image from 'next/image'
import { Product } from '../types/Product'
import ProductDropdown from './ProductDropdown'

export default function Home() {
  const { addToCart } = useCartStore()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data)
        setLoading(false)
      })
      .catch((err) => console.error(err))
  }, [])

  if (loading)
    return <p className='text-center mt-20 text-lg font-medium'>Loading...</p>

  return (
    <div className='max-w-7xl mx-auto p-6'>
      <div>
        <ProductDropdown />
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {products.map((p) => (
          <Card
            key={p.id}
            className='flex flex-col p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl'
          >
            <div className='relative w-full h-64 mb-4'>
              <Image
                src={p.image}
                alt={p.title}
                fill
                className='object-contain rounded-lg'
              />
            </div>

            <h2 className='font-semibold text-lg mb-1 line-clamp-2'>
              {p.title}
            </h2>
            <p className='text-gray-600 font-medium mb-2'>
              ${p.price.toFixed(2)}
            </p>
            <p className='text-sm text-gray-500 line-clamp-3 mb-4'>
              {p.description}
            </p>

            <Button
              color='success'
              className='mt-auto'
              onPress={() => addToCart(p)}
            >
              Add to Cart
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}

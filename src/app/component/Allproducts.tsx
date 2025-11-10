'use client'

import { useState, useEffect } from 'react'
import { useCartStore } from '../store/useCartStore'
import { Button, Card } from '@heroui/react'
import Image from 'next/image'
import { Product } from '../types/Product'
import { motion } from 'framer-motion'

import Link from 'next/link'

export default function Allproducts() {
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
      {/* Sign-in Modal */}
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {products.map((p, index) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className='flex flex-col p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-xl'>
              <Link href={`/product-details/${p.id}`}>
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
              </Link>

              <div className='flex gap-2 mt-auto '>
                <Button
                  color='success'
                  className='flex-1'
                  onPress={() => addToCart(p)}
                >
                  Add to Cart
                </Button>
                <Button color='primary' className='flex-1'>
                  Buy Now
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

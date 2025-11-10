'use client'
import { useParams } from 'next/navigation'
import { useCartStore } from '../store/useCartStore'
import { useEffect, useState } from 'react'
import { Product } from '../types/Product'
import Image from 'next/image'
import { Button, Card } from '@heroui/react'
import Link from 'next/link'

const ProductDeatails = () => {
  const params = useParams()
  const { addToCart } = useCartStore()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (params.id) {
      fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then((res) => res.json())
        .then((data: Product) => {
          setProduct(data)
          setLoading(false)
        })
        .catch((err) => console.error(err))
    }
  }, [params.id])
  if (loading) return <p className='text-center mt-20 text-lg'>Loading...</p>
  if (!product)
    return <p className='text-center mt-20 text-lg'>Product not found</p>
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <Card className='flex flex-col md:flex-row gap-6 p-6 shadow-lg rounded-xl'>
        <div className='relative w-full md:w-1/2 h-80'>
          <Image
            src={product.image}
            alt={product.title}
            fill
            className='object-contain rounded-lg'
          />
        </div>
        <div className='flex-1 flex flex-col'>
          <h1 className='text-2xl font-bold mb-4'>{product.title}</h1>
          <p className='text-gray-600 font-semibold mb-2'>
            ${product.price.toFixed(2)}
          </p>
          <p className='text-gray-500 mb-4'>{product.description}</p>
          <div className='flex gap-2 mt-auto'>
            <Button
              color='success'
              className='flex-1'
              onPress={() => addToCart(product)}
            >
              Add to Cart
            </Button>
            <Button color='primary' className='flex-1'>
              Buy Now
            </Button>
            <Link href={'/'}>
              <Button color='primary' className='flex-1'>
                Go to Shop
              </Button>
            </Link>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ProductDeatails

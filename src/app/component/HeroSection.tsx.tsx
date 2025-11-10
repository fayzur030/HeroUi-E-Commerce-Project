'use client'
import hero from '../assets/hero2.jpg'
import { Button } from '@heroui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className='max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 items-center gap-10'>
      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 className='text-4xl md:text-5xl font-bold leading-tight mb-4'>
          Discover the Latest Trends in{' '}
          <span className='text-primary'>Fashion & Tech</span>
        </h1>
        <p className='text-gray-600 dark:text-gray-400 mb-6 text-lg'>
          Shop the most stylish and high-quality products at unbeatable prices.
          Make every day extraordinary with HeroShop.
        </p>
        <div className='flex gap-3'>
          <Link href='/product-details/1'>
            <Button color='primary' size='lg'>
              Shop Now
            </Button>
          </Link>
          <Link href='/about'>
            <Button variant='bordered' size='lg'>
              Learn More
            </Button>
          </Link>
        </div>
      </motion.div>

      {/* Right image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className='flex justify-center md:justify-end'
      >
        <Image
          src={hero}
          alt='Featured Product'
          priority
          className='object-contain drop-shadow-lg rounded-lg'
        />
      </motion.div>
    </section>
  )
}

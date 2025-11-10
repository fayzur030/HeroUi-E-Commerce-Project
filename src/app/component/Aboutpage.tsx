'use client'
import aboutHero from '../assets/about-hero.jpg'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@heroui/react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className='max-w-7xl mx-auto px-6 py-20 space-y-20'>
      {/* Hero Section */}
      <section className='grid md:grid-cols-2 items-center gap-10'>
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            About <span className='text-primary'>HeroShop</span>
          </h1>
          <p className='text-gray-600 dark:text-gray-400 mb-6 text-lg'>
            HeroShop is dedicated to providing the latest trends in fashion and
            tech products. Our mission is to bring high-quality items to our
            customers with a seamless shopping experience.
          </p>
          <Link href='/contact'>
            <Button color='primary' size='lg'>
              Contact Us
            </Button>
          </Link>
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
            src={aboutHero}
            alt='About HeroShop'
            className='object-contain rounded-lg drop-shadow-lg'
            priority
          />
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className='space-y-6 text-center'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='text-3xl font-bold'
        >
          Our Mission
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg'
        >
          We strive to offer the best shopping experience with quality products,
          amazing customer service, and quick delivery. Your satisfaction is our
          top priority.
        </motion.p>
      </section>

      {/* Story / Team Section */}
      <section className='grid md:grid-cols-3 gap-10'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center'
        >
          <h3 className='text-xl font-bold mb-2'>Our Story</h3>
          <p className='text-gray-600 dark:text-gray-400'>
            Started in 2025, HeroShop has grown to be a trusted brand for tech
            and fashion lovers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center'
        >
          <h3 className='text-xl font-bold mb-2'>Our Vision</h3>
          <p className='text-gray-600 dark:text-gray-400'>
            To make shopping fun, easy, and accessible for everyone around the
            world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center'
        >
          <h3 className='text-xl font-bold mb-2'>Our Team</h3>
          <p className='text-gray-600 dark:text-gray-400'>
            A passionate team of designers, developers, and customer service
            experts dedicated to giving you the best.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

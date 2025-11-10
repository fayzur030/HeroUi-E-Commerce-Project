'use client'

import { Divider, Link } from '@heroui/react'
import { Facebook, Instagram, Twitter, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='mt-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 text-gray-700 dark:text-gray-300'>
      <div className='max-w-7xl mx-auto px-6 py-10'>
        {/* top section */}
        <div className='grid md:grid-cols-3 gap-10'>
          {/* brand */}
          <div>
            <h2 className='text-2xl font-semibold text-primary mb-3'>
              MyShop 🛍️
            </h2>
            <p className='text-sm'>
              The best place to shop your favorite products with ease and joy.
            </p>
          </div>

          {/* links */}
          <div>
            <h3 className='text-lg font-semibold mb-3'>Quick Links</h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link href='/' className='hover:underline'>
                  Home
                </Link>
              </li>
              <li>
                <Link href='/about' className='hover:underline'>
                  About Us
                </Link>
              </li>
              <li>
                <Link href='/cart' className='hover:underline'>
                  Cart
                </Link>
              </li>
              <li>
                <Link href='/contact' className='hover:underline'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* social icons */}
          <div>
            <h3 className='text-lg font-semibold mb-3'>Follow Us</h3>
            <div className='flex gap-4'>
              <Link
                href='https://facebook.com'
                target='_blank'
                aria-label='Facebook'
                className='hover:text-blue-500 transition'
              >
                <Facebook size={22} />
              </Link>
              <Link
                href='https://twitter.com'
                target='_blank'
                aria-label='Twitter'
                className='hover:text-sky-500 transition'
              >
                <Twitter size={22} />
              </Link>
              <Link
                href='https://instagram.com'
                target='_blank'
                aria-label='Instagram'
                className='hover:text-pink-500 transition'
              >
                <Instagram size={22} />
              </Link>
              <Link
                href='https://github.com/fayzur030'
                target='_blank'
                aria-label='GitHub'
                className='hover:text-gray-400 transition'
              >
                <Github size={22} />
              </Link>
            </div>
          </div>
        </div>

        <Divider className='my-6' />

        {/* bottom section */}
        <div className='flex flex-col sm:flex-row justify-between items-center text-sm'>
          <p>© {new Date().getFullYear()} HeroShop. All rights reserved.</p>
          <p>
            Made with ❤️ by{' '}
            <Link
              href='https://github.com/yourusername'
              target='_blank'
              className='font-semibold hover:underline text-primary'
            >
              Md. Fayzur Rahman
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

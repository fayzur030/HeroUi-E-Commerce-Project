'use client'
import Link from 'next/link'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
} from '@heroui/react'

export default function NavBar() {
  return (
    <Navbar className='bg-amber-50'>
      <NavbarBrand>
        <p className='font-bold text-inherit'>🛍️ HeroShop</p>
      </NavbarBrand>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link href='/'>Home</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/about'>About</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/contact'>Contact</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href='/cart'>Cart</Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='/login'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} href='/signup' color='primary' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}

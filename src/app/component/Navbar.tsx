'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../app/assets/Logo.jpg'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Avatar,
  Badge,
  useDisclosure,
  Button,
} from '@heroui/react'
import { useCartStore } from '../store/useCartStore'
import { ShoppingCart, Menu } from 'lucide-react'
import CartModal from './CartModal'

export const AcmeLogo = () => (
  <Image src={logo} alt='logo' width={40} height={40} />
)

export default function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cart } = useCartStore()
  const [user, setUser] = useState<{ name: string; email: string } | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Navbar isBordered>
        {/* Left */}
        <NavbarContent justify='start' className='gap-2'>
          <NavbarBrand className='flex items-center gap-2'>
            <AcmeLogo />
            <span className='hidden sm:block font-bold text-inherit'>
              MyShop
            </span>
          </NavbarBrand>

          {/* Desktop Menu */}
          <NavbarItem className='hidden sm:flex gap-3'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/contact'>Contact</Link>
          </NavbarItem>
        </NavbarContent>

        {/* Right */}
        <NavbarContent justify='end' className='flex items-center gap-3'>
          {/* Desktop Search */}
          <div className='hidden sm:block'>
            <Input
              placeholder='Search...'
              size='sm'
              classNames={{
                base: 'max-w-full sm:max-w-[12rem] h-10',
                mainWrapper: 'h-full',
                input: 'text-small',
                inputWrapper:
                  'h-full font-normal bg-default-400/20 dark:bg-default-500/20',
              }}
            />
          </div>

          {/* Cart */}
          <Badge
            color='danger'
            content={cart.length}
            shape='rectangle'
            isInvisible={cart.length === 0}
          >
            <Button isIconOnly color='warning' variant='faded' onPress={onOpen}>
              <ShoppingCart size={20} />
            </Button>
          </Badge>

          {/* User / Sign In */}
          {user ? (
            <Dropdown placement='bottom-end'>
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as='button'
                  className='transition-transform'
                  color='secondary'
                  name={user.name}
                  size='sm'
                  src='https://i.pravatar.cc/150?u=a042581f4e29026704d'
                />
              </DropdownTrigger>
              <DropdownMenu aria-label='Profile Actions' variant='flat'>
                <DropdownItem key='user' className='h-14 gap-2'>
                  <p className='font-semibold'>Signed in as</p>
                  <p className='font-semibold'>{user.email}</p>
                </DropdownItem>
                <DropdownItem key='my setting'>My Settings</DropdownItem>
                <DropdownItem key='team setting'>Team Settings</DropdownItem>
                <DropdownItem key='analytics'>Analytics</DropdownItem>
                <DropdownItem key='system'>System</DropdownItem>
                <DropdownItem key='Configurations'>Configurations</DropdownItem>
                <DropdownItem key='Help & Feedback'>Help & Feedback</DropdownItem>
                <DropdownItem
                  key='logout'
                  color='danger'
                  onPress={() => setUser(null)}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <NavbarItem className='hidden sm:block'>
              <Link href='/sign-in' passHref>
                <Button color='primary' variant='flat'>
                  Sign In
                </Button>
              </Link>
            </NavbarItem>
          )}

          {/* Mobile Hamburger */}
          <Button
            className='sm:hidden'
            variant='flat'
            onPress={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={20} />
          </Button>
        </NavbarContent>
      </Navbar>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='sm:hidden bg-default-100 dark:bg-default-900 p-4 flex flex-col gap-3'>
          {/* Mobile Search */}
          <Input
            placeholder='Search...'
            size='sm'
            classNames={{
              base: 'w-full h-10',
              mainWrapper: 'h-full',
              input: 'text-small',
              inputWrapper:
                'h-full font-normal bg-default-400/20 dark:bg-default-500/20',
            }}
          />

          {/* Menu Links */}
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/contact'>Contact</Link>

          {/* Sign In for mobile */}
          {!user && (
            <Link href='/sign-in'>
              <Button color='primary' variant='flat' className='w-full'>
                Sign In
              </Button>
            </Link>
          )}
        </div>
      )}

      {/* Cart Modal */}
      <CartModal isOpen={isOpen} onClose={onClose} />
    </>
  )
}

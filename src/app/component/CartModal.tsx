'use client'

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Card,
  Image,
} from '@heroui/react'
import { useCartStore } from '../store/useCartStore'
import { CartItem } from '../types/CartItem'
import Link from 'next/link'

type CartModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cart, removeFromCart, addToCart } = useCartStore()
  const total = cart
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
    .toFixed(2)

  return (
    <Modal size="3xl" isOpen={isOpen} onClose={onClose} scrollBehavior="inside">
      <ModalContent>
        <ModalHeader className="text-2xl font-bold text-center">
          🛒 Your Cart
        </ModalHeader>

        <ModalBody className="bg-gray-50 p-4 space-y-5">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center mt-6 mb-8">
              <p className="text-gray-600 text-lg mb-4">Your cart is empty 😢</p>
              <Link href="/" onClick={onClose}>
                <Button color="primary">Shop Now</Button>
              </Link>
            </div>
          ) : (
            <>
              {cart.map((item: CartItem) => (
                <Card
                  key={item.id}
                  className="p-4 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-sm hover:shadow-md transition-shadow rounded-xl bg-white"
                >
                  {/* Image & Info */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={100}
                      height={100}
                      className="rounded-xl object-cover shadow"
                    />
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-gray-500 mt-1">
                        ${item.price} × {item.quantity}
                      </p>
                      <p className="text-gray-600 mt-1">
                        Subtotal: ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-center sm:flex-col sm:justify-start gap-2 mt-3 sm:mt-0">
                    <Button
                      color="primary"
                      size="sm"
                      onClick={() => addToCart(item)}
                      className="shadow-sm hover:shadow-md"
                    >
                      +
                    </Button>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="shadow-sm hover:shadow-md"
                    >
                      −
                    </Button>
                  </div>
                </Card>
              ))}
            </>
          )}
        </ModalBody>

        {/* Footer */}
        {cart.length > 0 && (
          <ModalFooter className="flex justify-between items-center bg-white rounded-b-2xl p-4 border-t">
            <h2 className="text-lg font-semibold text-gray-900">
              Total: ${total}
            </h2>
            <Button
              color="success"
              onPress={() => {
                alert('Proceed to checkout')
                onClose()
              }}
              className="shadow-md hover:shadow-lg"
            >
              Checkout
            </Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  )
}

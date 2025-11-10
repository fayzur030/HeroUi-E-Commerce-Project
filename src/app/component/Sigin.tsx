// app/sign-in/page.tsx
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Card, Input, Button } from '@heroui/react'

export default function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault()
    //Api Call
    console.log('Email:', email, 'Password:', password)
    alert(`Signed in as ${email}`)
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4'>
      <Card className='p-8 w-full max-w-md shadow-lg'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Sign In</h2>
        <form onSubmit={handleSignIn} className='flex flex-col gap-4'>
          <Input
            placeholder='Email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            classNames={{
              inputWrapper: 'h-10',
              input: 'text-sm',
            }}
            required
          />
          <Input
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            classNames={{
              inputWrapper: 'h-10',
              input: 'text-sm',
            }}
            required
          />
          <Button type='submit' color='primary' className='mt-2'>
            Sign In
          </Button>
        </form>
        <p className='mt-4 text-center text-sm text-gray-600'>
          {"Don't have an account? "}
          <Link href='/sign-up' className='text-blue-600 font-medium'>
            Sign Up
          </Link>
        </p>
      </Card>
    </div>
  )
}

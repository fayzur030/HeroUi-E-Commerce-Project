'use client'

import { Geist, Geist_Mono } from 'next/font/google'

import NavBar from './component/Navbar'
import Footer from './component/Footer'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const darkMode = useThemeStore((state) => state.darkMode)

  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add('dark')
  //   } else {
  //     document.body.classList.remove('dark')
  //   }
  // }, [darkMode])

  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased transition-colors duration-300`}
      >
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

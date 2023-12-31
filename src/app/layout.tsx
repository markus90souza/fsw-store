import '@/styles/globals.css'
import { FC, ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Header } from '@/components/shared/header'
import { AuthProvider } from '@/providers/auth-provider'
import { Footer } from '@/components/shared/footer'
import CartProvider from '@/contexts/cart-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <AuthProvider>
        <body className={inter.className}>
          <CartProvider>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </CartProvider>
        </body>
      </AuthProvider>
    </html>
  )
}

export default RootLayout

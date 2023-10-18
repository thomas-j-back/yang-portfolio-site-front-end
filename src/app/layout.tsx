import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './ui_components/navigation/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Yang Liu\'s Design Portfolio',
  description: 'Designed by Yang Liu, Implemented by Thomas Back',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-neue">
        {children}
      </body>
    </html>
  )
}

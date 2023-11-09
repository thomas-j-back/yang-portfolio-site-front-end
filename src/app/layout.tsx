import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './ui_components/navigation/navbar'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

const inter = Inter({ subsets: ['latin'] })

config.autoAddCss = false

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
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className="font-neue">
        <NavBar />
        {children}
      </body>
    </html>
  )
}

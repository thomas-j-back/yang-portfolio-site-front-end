import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavBar from './ui_components/navigation/navbar'
import Footer from './ui_components/navigation/footer'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import localFont from 'next/font/local'
const inter = Inter({ subsets: ['latin'] })

config.autoAddCss = false


export const metadata: Metadata = {
  title: 'Yang Liu\'s Design Portfolio',
  description: 'Designed by Yang Liu, Implemented by Thomas Back',
}

const myFont = localFont({ src: '../../public/fonts/general-sans/GeneralSans-Variable.woff' })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={myFont.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

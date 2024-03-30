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

const generalSans = localFont(
  {
    src: [
      {
        path: '../../public/fonts/general-sans/GeneralSans-Regular.woff',
        weight: '400',
        style: 'normal'
      },
      {
        path: '../../public/fonts/general-sans/GeneralSans-Medium.woff',
        weight: '500',
        style: 'normal'
      },
      {
        path: '../../public/fonts/general-sans/GeneralSans-Semibold.woff',
        weight: '600',
        style: 'normal'
      },
      {
        path: '../../public/fonts/general-sans/GeneralSans-Italic.woff',
        weight: '400',
        style: 'italic'
      },
      {
        path: '../../public/fonts/general-sans/GeneralSans-Bold.woff',
        weight: '700',
        style: 'normal'
      },
      {
        path: '../../public/fonts/general-sans/GeneralSans-BoldItalic.woff',
        weight: '700',
        style: 'italic'
      },
      {
        path: '../../public/fonts/general-sans/GeneralSans-Light.woff',
        weight: '300',
        style: 'normal'
      },
      {
        path: '../../public/fonts/general-sans/GeneralSans-Extralight.woff',
        weight: '200',
        style: 'normal'
      },
    ]
  }
)


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={generalSans.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}

import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Shared/Navbar/Navbar'
import Footer from '@/components/Shared/Footer/Footer'
import Toaster from '@/components/Shared/Toaster'
import CursorTracker from '@/components/Shared/CursorTracker'

// import NextTopLoader from 'nextjs-toploader';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home - Digimatric',
  description: 'Best digital agency in Dhaka Bangladesh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NextTopLoader
          color="#2ECC71"
          height={3}
          showSpinner={false}
          crawl={true}
          speed={200}
          easing="ease"
        /> */}
        <Navbar />
        <main>
          {children}
        </main>
        <Footer></Footer>
        <Toaster></Toaster>
        <CursorTracker></CursorTracker>
      </body>
    </html>
  )
}

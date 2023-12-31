import './globals.css'
import { Inter } from 'next/font/google'
import TopNav from './TopNav'
import BottomBar from './BottomBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google Clone',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-zinc-900 text-zinc-50`}>
        <div className="flex flex-col h-screen">
          <TopNav />
          <div className="flex-1">
          {children}
          </div>
          <BottomBar />
        </div>
      </body>
    </html>
  )
}

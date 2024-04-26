import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import './globals.css'
import { SocketProvider } from '@/components/providers/socket-provider'
import { QueryProvider } from '@/components/providers/query-provider'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Evently',
  description: 'Evently is a platform for event management.',
  icons: {
    icon: '/assets/images/logo.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={poppins.variable}>
          <SocketProvider>
            <QueryProvider>
              {children}
            </QueryProvider>
          </SocketProvider>
        </body>
      </html>
  </ClerkProvider>
  )
}
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OyeCommerz | Shopify App Development and Design Agency',
  description: 'We are a Shopify Development Agency dedicated to empowering growing brands.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}
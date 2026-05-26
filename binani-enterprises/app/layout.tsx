import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import WhatsAppFloat from '@/components/WhatsAppFloat'

export const metadata: Metadata = {
  title: {
    default: 'Binani Enterprises — Financial Solutions for Modern India',
    template: '%s | Binani Enterprises',
  },
  description: 'Payment gateway integration, credit card applications, and personal loans — all in one place. Trusted by 500+ businesses across India.',
  keywords: ['payment gateway India', 'credit card apply online', 'personal loan apply', 'Binani Enterprises', 'PayU partner', 'Razorpay integration'],
  authors: [{ name: 'Binani Enterprises' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://binanienterprises.in',
    siteName: 'Binani Enterprises',
    title: 'Binani Enterprises — Financial Solutions for Modern India',
    description: 'Payment gateways, credit cards, and personal loans — premium fintech services for individuals and businesses.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Binani Enterprises',
    description: 'Premium fintech services — payment gateways, credit cards, personal loans.',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="noise">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-navy-900 text-slate-200 font-dm antialiased">
        <Navbar />
        <main>{children}</main>
        <WhatsAppFloat />
      </body>
    </html>
  )
}

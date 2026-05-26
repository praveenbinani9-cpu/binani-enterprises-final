import type { Metadata } from 'next'
import GatewayComparisonTable from '@/components/GatewayComparisonTable'
import CalendlyEmbed from '@/components/CalendlyEmbed'
import Footer from '@/components/Footer'
import { CheckCircle, Zap, Globe, HeadphonesIcon } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Payment Gateway Solutions',
  description: 'Integrate PayU, Razorpay, Cashfree, and CCAvenue with expert support. Benigni Enterprises is India\'s trusted payment gateway partner.',
}

const benefits = [
  { icon: Zap, text: 'Same-day integration support' },
  { icon: CheckCircle, text: 'All major gateways covered' },
  { icon: Globe, text: 'UPI, Cards, Netbanking & Wallets' },
  { icon: HeadphonesIcon, text: 'Dedicated account manager' },
]

export default function PaymentGatewayPage() {
  return (
    <>
      <div className="min-h-screen bg-navy-900">
        {/* Hero */}
        <div className="relative pt-32 pb-20 grid-bg">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-electric-600/8 rounded-full blur-[100px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <p className="font-sora text-xs tracking-[0.2em] uppercase text-electric-400 font-600 mb-4">Payment Solutions</p>
              <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-800 text-white mb-6 leading-tight">
                India&apos;s Best Payment Gateways,{' '}
                <span className="gradient-text-blue">One Partner</span>
              </h1>
              <p className="font-dm text-slate-400 text-lg leading-relaxed mb-8 max-w-2xl">
                We&apos;re authorized partners of PayU, Razorpay, Cashfree, and CCAvenue. Get expert integration, competitive pricing, and ongoing technical support.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {benefits.map(({ icon: Icon, text }) => (
                  <div key={text} className="glass-card rounded-xl p-3 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-electric-400 shrink-0" />
                    <span className="font-dm text-xs text-slate-400">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="font-sora text-xs tracking-[0.2em] uppercase text-electric-400 font-600 mb-3">Compare & Choose</p>
              <h2 className="font-sora text-3xl sm:text-4xl font-700 text-white mb-4">
                Gateway Comparison
              </h2>
              <p className="font-dm text-slate-400 max-w-xl mx-auto">
                Compare all our partnered payment gateways side by side. We recommend <strong className="text-white">PayU</strong> for enterprise-level requirements.
              </p>
            </div>
            <GatewayComparisonTable />
          </div>
        </section>

        {/* Calendly */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CalendlyEmbed />
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

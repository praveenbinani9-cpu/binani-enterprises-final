import type { Metadata } from 'next'
import CreditCardForm from '@/components/CreditCardForm'
import Footer from '@/components/Footer'
import { CheckCircle, Clock, Shield, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Apply for Credit Card',
  description: 'Apply for credit cards from top Indian banks with expert guidance. Quick processing and paperless application through Binani Enterprises.',
}

const highlights = [
  { icon: Clock, title: 'Quick Processing', desc: 'Application reviewed within 24 hours' },
  { icon: Shield, title: 'Secure & Private', desc: '256-bit encrypted data transmission' },
  { icon: CheckCircle, title: 'Expert Guidance', desc: 'Personalized card recommendations' },
  { icon: Star, title: 'Top Banks', desc: 'HDFC, ICICI, SBI, Axis & more' },
]

export default function CreditCardPage() {
  return (
    <>
      <div className="min-h-screen bg-navy-900">
        {/* Hero */}
        <div className="relative pt-32 pb-20 grid-bg">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-electric-600/8 rounded-full blur-[100px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <p className="font-sora text-xs tracking-[0.2em] uppercase text-electric-400 font-600 mb-4">Credit Products</p>
            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-800 text-white mb-6">
              Apply for Your{' '}
              <span className="gradient-text">Credit Card</span>
            </h1>
            <p className="font-dm text-slate-400 text-lg max-w-2xl mx-auto mb-12">
              Get expert-matched credit card recommendations from India&apos;s top banks. Paperless, fast, and completely free to apply.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass-card rounded-2xl p-4 text-center">
                  <div className="w-10 h-10 bg-electric-600/20 border border-electric-600/25 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-electric-400" />
                  </div>
                  <div className="font-sora font-700 text-white text-sm mb-1">{title}</div>
                  <div className="font-dm text-slate-500 text-xs leading-tight">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <CreditCardForm />
          </div>
        </section>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto px-4 pb-16 text-center">
          <p className="font-dm text-slate-600 text-xs leading-relaxed">
            Binani Enterprises acts as a referral / DSA partner. Credit card approvals are subject to the respective bank&apos;s eligibility criteria and policies. 
            We are not a bank or NBFC. By submitting this form, you agree to be contacted by our team.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

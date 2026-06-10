import Hero from '@/components/Hero'
import TrustBadges from '@/components/TrustBadges'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { CreditCard, Banknote, Zap, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Payment Gateway',
    description: 'Integrate India\'s best payment gateways — PayU, Razorpay, Cashfree, CCAvenue. Expert setup, ongoing support, and consulting.',
    href: '/payment-gateway',
    color: 'electric',
    cta: 'Explore Gateways',
  },
  {
    icon: CreditCard,
    title: 'Credit Card',
    description: 'Apply for credit cards from top Indian banks. Quick processing, paperless application, and expert guidance on card selection.',
    href: '/credit-card',
    color: 'blue',
    cta: 'Apply Now',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />

      {/* Services Section */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-sora text-xs tracking-[0.2em] uppercase text-electric-400 font-600 mb-3">Our Services</p>
            <h2 className="font-sora text-4xl sm:text-5xl font-700 text-white mb-4">
              Everything You Need,{' '}
              <span className="gradient-text">One Platform</span>
            </h2>
            <p className="font-dm text-slate-400 text-lg max-w-2xl mx-auto">
              From payment infrastructure to personal finance — Binani Enterprises is your trusted partner for financial growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description, href, color, cta }) => (
              <div
                key={title}
                className="glass-card rounded-3xl p-8 group hover:-translate-y-2 transition-all duration-400 flex flex-col"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  color === 'gold'
                    ? 'bg-gold-500/15 border border-gold-500/25'
                    : 'bg-electric-600/20 border border-electric-600/25'
                }`}>
                  <Icon className={`w-7 h-7 ${color === 'gold' ? 'text-gold-400' : 'text-electric-400'}`} />
                </div>
                <h3 className="font-sora font-700 text-white text-xl mb-3">{title}</h3>
                <p className="font-dm text-slate-500 text-sm leading-relaxed flex-1 mb-6">{description}</p>
                <Link
                  href={href}
                  className={`flex items-center gap-2 font-sora font-600 text-sm group-hover:gap-3 transition-all duration-200 ${
                    color === 'gold' ? 'text-gold-400' : 'text-electric-400'
                  }`}
                >
                  {cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-electric-700 via-electric-600 to-navy-700" />
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative z-10 text-center py-16 px-8">
              <h2 className="font-sora text-3xl sm:text-4xl font-700 text-white mb-4">
                Ready to Transform Your Finances?
              </h2>
              <p className="font-dm text-electric-200/80 text-lg mb-8 max-w-xl mx-auto">
                Book a free 30-minute consulting session and get personalized financial guidance from our experts.
              </p>
              <Link href="/payment-gateway#consulting" className="btn-gold px-10 py-4 rounded-xl text-base inline-block">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

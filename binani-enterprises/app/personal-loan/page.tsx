import type { Metadata } from 'next'
import PersonalLoanForm from '@/components/PersonalLoanForm'
import Footer from '@/components/Footer'
import { Banknote, Clock, CheckCircle, TrendingDown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Apply for Personal Loan',
  description: 'Apply for personal loans from ₹50,000 to ₹50L+ with competitive interest rates. Quick approval through Benigni Enterprises.',
}

const highlights = [
  { icon: Banknote, title: '₹50K – ₹50L+', desc: 'Wide range of loan amounts' },
  { icon: TrendingDown, title: 'Low Interest', desc: 'Competitive rates from top lenders' },
  { icon: Clock, title: 'Fast Approval', desc: 'Decision within 24–48 hours' },
  { icon: CheckCircle, title: 'Minimal Docs', desc: 'Aadhaar, PAN & income proof' },
]

export default function PersonalLoanPage() {
  return (
    <>
      <div className="min-h-screen bg-navy-900">
        <div className="relative pt-32 pb-20 grid-bg">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-gold-500/6 rounded-full blur-[100px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <p className="font-sora text-xs tracking-[0.2em] uppercase text-gold-500 font-600 mb-4">Personal Finance</p>
            <h1 className="font-sora text-4xl sm:text-5xl lg:text-6xl font-800 text-white mb-6">
              Get Your{' '}
              <span className="gradient-text">Personal Loan</span>
            </h1>
            <p className="font-dm text-slate-400 text-lg max-w-2xl mx-auto mb-12">
              From ₹50,000 to ₹50 Lakh and beyond — competitive rates, fast processing, and expert guidance every step of the way.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {highlights.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="glass-card rounded-2xl p-4 text-center">
                  <div className="w-10 h-10 bg-gold-500/15 border border-gold-500/25 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-5 h-5 text-gold-400" />
                  </div>
                  <div className="font-sora font-700 text-white text-sm mb-1">{title}</div>
                  <div className="font-dm text-slate-500 text-xs leading-tight">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PersonalLoanForm />
          </div>
        </section>

        <div className="max-w-2xl mx-auto px-4 pb-16 text-center">
          <p className="font-dm text-slate-600 text-xs leading-relaxed">
            Benigni Enterprises acts as a referral / DSA partner. Loan approvals are subject to the respective lender&apos;s eligibility criteria. 
            Interest rates and terms vary by lender and applicant profile. We are not a bank or NBFC.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

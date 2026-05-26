'use client'
import { Shield, Lock, Award, TrendingUp, CheckCircle, Star } from 'lucide-react'

const badges = [
  { icon: Shield, title: 'RBI Compliant', desc: 'Fully regulated operations' },
  { icon: Lock, title: '256-bit SSL', desc: 'Bank-grade encryption' },
  { icon: TrendingUp, title: '₹100Cr+ Disbursed', desc: 'Proven track record' },
  { icon: Award, title: 'MSME Certified', desc: 'Govt. of India recognized' },
  { icon: CheckCircle, title: '500+ Clients', desc: 'Trusted by businesses' },
  { icon: Star, title: 'Expert Advisory', desc: '10+ years of expertise' },
]

export default function TrustBadges() {
  return (
    <section className="py-20 relative">
      <div className="section-divider mb-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="font-sora text-xs tracking-[0.2em] uppercase text-electric-400 font-600 mb-3">Why Choose Us</p>
          <h2 className="font-sora text-3xl sm:text-4xl font-700 text-white">
            Built on Trust,{' '}
            <span className="gradient-text-blue">Driven by Results</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass-card rounded-2xl p-5 text-center group cursor-default transition-all duration-300 hover:-translate-y-1 glow-blue"
            >
              <div className="w-12 h-12 rounded-xl bg-electric-600/15 border border-electric-600/20 flex items-center justify-center mb-3 mx-auto group-hover:bg-electric-600/25 transition-colors">
                <Icon className="w-5 h-5 text-electric-400" />
              </div>
              <div className="font-sora font-700 text-white text-sm mb-1">{title}</div>
              <div className="font-dm text-slate-500 text-xs leading-tight">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

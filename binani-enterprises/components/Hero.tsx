'use client'
import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Shield, TrendingUp, Users, Zap } from 'lucide-react'

const metrics = [
  { icon: TrendingUp, value: '₹100Cr+', label: 'Disbursed', delay: '0s' },
  { icon: Users, value: '500+', label: 'Businesses', delay: '0.2s' },
  { icon: Zap, value: '99.9%', label: 'Uptime', delay: '0.4s' },
  { icon: Shield, value: 'RBI', label: 'Compliant', delay: '0.6s' },
]

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20
      el.style.setProperty('--mouse-x', `${x}px`)
      el.style.setProperty('--mouse-y', `${y}px`)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
      style={{ paddingTop: '80px' }}
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-electric-600/8 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gold-500/6 blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-electric-700/5 blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-5xl mx-auto">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-xs font-sora font-600 text-slate-300 tracking-wider uppercase">
              India&apos;s Premier Fintech Partner
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-sora text-5xl sm:text-6xl lg:text-7xl font-800 leading-[1.05] mb-6 animate-slide-up">
            <span className="text-white">Financial Solutions</span>
            <br />
            <span className="gradient-text">Built for Modern India</span>
          </h1>

          <p className="font-dm text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.15s' }}>
            Payment gateways, credit cards, and personal loans — all in one place.
            Empowering businesses and individuals with world-class financial infrastructure.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link href="/payment-gateway" className="btn-blue px-8 py-4 rounded-xl text-base flex items-center gap-2 group">
              Explore Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/payment-gateway#consulting" className="glass-card px-8 py-4 rounded-xl text-base font-sora font-600 text-white hover:border-electric-600/50 transition-all duration-300 flex items-center gap-2">
              Book Free Consultation
            </Link>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {metrics.map(({ icon: Icon, value, label, delay }) => (
              <div
                key={label}
                className="metric-card rounded-2xl p-5 animate-float"
                style={{ animationDelay: delay }}
              >
                <div className="w-10 h-10 rounded-xl bg-electric-600/20 flex items-center justify-center mb-3 mx-auto">
                  <Icon className="w-5 h-5 text-electric-400" />
                </div>
                <div className="font-sora font-700 text-xl text-white">{value}</div>
                <div className="font-dm text-xs text-slate-500 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none" />
    </section>
  )
}

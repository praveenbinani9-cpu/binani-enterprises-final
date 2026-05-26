'use client'
import { useEffect } from 'react'
import { Calendar, Clock, Video } from 'lucide-react'

export default function CalendlyEmbed() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/benigni-enterprises/30min'

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => { document.head.removeChild(script) }
  }, [])

  return (
    <div id="consulting" className="py-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sora text-xs tracking-[0.2em] uppercase text-electric-400 font-600 mb-3">Free Session</p>
          <h2 className="font-sora text-3xl sm:text-4xl font-700 text-white mb-4">
            Book a 1-on-1{' '}
            <span className="gradient-text">Consultation</span>
          </h2>
          <p className="font-dm text-slate-400 text-base max-w-xl mx-auto">
            Get personalized payment gateway advice from our expert. Free 30-minute session — no obligation.
          </p>
        </div>

        {/* Features row */}
        <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-10">
          {[
            { icon: Clock, text: '30 Minutes' },
            { icon: Video, text: 'Video Call' },
            { icon: Calendar, text: 'Pick Your Slot' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="glass-card rounded-xl p-3 text-center flex flex-col items-center gap-2">
              <Icon className="w-4 h-4 text-electric-400" />
              <span className="font-sora font-600 text-xs text-slate-300">{text}</span>
            </div>
          ))}
        </div>

        {/* Calendly widget */}
        <div className="calendly-container bg-white rounded-2xl overflow-hidden" style={{ minHeight: '630px' }}>
          <div
            className="calendly-inline-widget w-full"
            data-url={`${calendlyUrl}?hide_gdpr_banner=1&background_color=ffffff&text_color=0A0F1E&primary_color=2563EB`}
            style={{ minWidth: '320px', height: '630px' }}
          />
        </div>
      </div>
    </div>
  )
}

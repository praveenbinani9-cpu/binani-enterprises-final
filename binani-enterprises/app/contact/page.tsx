import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import { MapPin, Mail, Phone, Clock, Building2, MessageSquare } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Benigni Enterprises for payment gateway, credit card, and personal loan inquiries.',
}

const contactDetails = [
  {
    icon: MapPin,
    title: 'Office Address',
    lines: ['123 Business Park, Ring Road', 'Surat, Gujarat – 395002', 'India'],
  },
  {
    icon: Phone,
    title: 'Phone',
    lines: ['+91 90000 00000', 'Mon–Sat, 10 AM – 7 PM IST'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['info@benignienterprises.com', 'support@benignienterprises.com'],
  },
  {
    icon: Clock,
    title: 'Business Hours',
    lines: ['Monday – Saturday', '10:00 AM – 7:00 PM IST', 'Closed on Sundays & Public Holidays'],
  },
  {
    icon: Building2,
    title: 'Registration',
    lines: ['GSTIN: 24XXXXX0000X1ZX', 'MSME Udyam: UDYAM-GJ-XX-XXXXXXX'],
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    lines: ['+91 90000 00000', 'Quick response during business hours'],
  },
]

export default function ContactPage() {
  return (
    <>
      <div className="min-h-screen bg-navy-900 pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="font-sora text-xs tracking-[0.2em] uppercase text-electric-400 font-600 mb-3">Get in Touch</p>
            <h1 className="font-sora text-4xl sm:text-5xl font-800 text-white mb-4">
              We&apos;re Here to{' '}
              <span className="gradient-text">Help</span>
            </h1>
            <p className="font-dm text-slate-400 text-lg max-w-xl mx-auto">
              Have questions about our services? Reach out to our team and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {contactDetails.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300">
                <div className="w-11 h-11 rounded-xl bg-electric-600/20 border border-electric-600/25 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-electric-400" />
                </div>
                <h3 className="font-sora font-700 text-white text-sm mb-2">{title}</h3>
                {lines.map((line, i) => (
                  <p key={i} className="font-dm text-slate-500 text-sm leading-relaxed">{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div className="glass-card rounded-3xl overflow-hidden" style={{ height: '320px' }}>
            <div className="w-full h-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.02)' }}>
              <div className="text-center">
                <MapPin className="w-10 h-10 text-electric-600/40 mx-auto mb-3" />
                <p className="font-sora font-600 text-slate-600 text-sm">123 Business Park, Ring Road</p>
                <p className="font-dm text-slate-700 text-xs mt-1">Surat, Gujarat 395002</p>
                <a
                  href="https://maps.google.com/?q=Surat+Gujarat+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 font-sora font-600 text-xs text-electric-400 hover:underline"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

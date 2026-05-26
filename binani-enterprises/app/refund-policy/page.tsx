import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy',
  description: 'Refund and cancellation policy for Benigni Enterprises consulting and financial services.',
}

const sections = [
  { title: '1. Consulting Session Cancellations', content: `If you need to cancel or reschedule a booked consulting session, please do so at least 24 hours before the scheduled time. Cancellations made with 24+ hours notice will receive a full refund of any paid session fees. Cancellations made with less than 24 hours notice are non-refundable.` },
  { title: '2. No-Show Policy', content: `If you fail to attend a scheduled session without prior notice, the session will be considered completed and no refund will be issued. You may reschedule once with at least 4 hours prior notice.` },
  { title: '3. Payment Gateway Setup Fees', content: `Any one-time setup or onboarding fees charged for payment gateway integration are non-refundable once the onboarding process has commenced. This includes any documentation submitted and technical configuration initiated.` },
  { title: '4. Referral Service Fees', content: `Referral fees charged for credit card or personal loan applications are non-refundable regardless of approval outcome, as the service rendered is the facilitation and submission of the application, not the approval decision.` },
  { title: '5. Refund Process', content: `Approved refunds will be processed within 7–10 business days to the original payment method. Bank processing times may vary. To request a refund, email refunds@benignienterprises.com with your booking/transaction details.` },
  { title: '6. Disputes', content: `For any refund-related disputes, please contact our support team at support@benignienterprises.com. Unresolved disputes will be subject to arbitration under the laws of India, with jurisdiction in Surat, Gujarat.` },
]

export default function RefundPolicyPage() {
  return (
    <>
      <div className="min-h-screen bg-navy-900 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-sora text-xs tracking-[0.2em] uppercase text-electric-400 font-600 mb-3">Legal</p>
            <h1 className="font-sora text-4xl font-800 text-white mb-4">Refund & Cancellation Policy</h1>
            <p className="font-dm text-slate-500 text-sm">Last updated: January 1, 2025</p>
          </div>
          <div className="space-y-5">
            {sections.map(({ title, content }) => (
              <div key={title} className="glass-card rounded-2xl p-6">
                <h2 className="font-sora font-700 text-white text-base mb-3">{title}</h2>
                <p className="font-dm text-slate-400 text-sm leading-relaxed">{content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

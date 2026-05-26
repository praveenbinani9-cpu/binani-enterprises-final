import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy of Benigni Enterprises — how we collect, use, and protect your personal data.',
}

const sections = [
  {
    title: '1. Introduction',
    content: `Benigni Enterprises ("we", "our", or "us") is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our financial services, in accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection Act, 2023 (DPDP Act).`,
  },
  {
    title: '2. Information We Collect',
    content: `We collect: Identity Data (full name), Contact Data (mobile number, email, PIN code), Financial Data (monthly salary, annual ITR, employment type), and Technical Data (IP address, browser type, usage analytics). We do not collect Aadhaar or PAN numbers directly through our website.`,
  },
  {
    title: '3. Purpose of Collection',
    content: `Your data is used for: processing credit card and loan applications, connecting you with banking/NBFC partners, booking consulting sessions, payment gateway integration advisory, regulatory compliance, and improving our services.`,
  },
  {
    title: '4. Third-Party Sharing',
    content: `We share your information with: banking/NBFC partners (for product fulfillment), payment gateway partners (PayU, Razorpay, Cashfree, CCAvenue), scheduling platforms (Calendly), and cloud/technology providers. We do not sell or rent your personal data for marketing purposes.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain personal data for a minimum of 3 years from collection, or as required by applicable Indian financial regulations (RBI guidelines, Income Tax Act), whichever is longer.`,
  },
  {
    title: '6. Your Rights (DPDP Act 2023)',
    content: `You have the right to: access your data, request correction of inaccurate data, request erasure (subject to legal obligations), lodge a grievance with our Data Protection Officer, and nominate a representative. Contact: privacy@benignienterprises.com`,
  },
  {
    title: '7. Data Security',
    content: `We use 256-bit SSL/TLS encryption, access controls, and regular security audits. Our infrastructure is hosted on secure cloud servers. No internet transmission is 100% secure, but we take all reasonable precautions.`,
  },
  {
    title: '8. Cookies',
    content: `We use essential cookies for functionality and analytics cookies (Google Analytics) for improving user experience. You may disable cookies in your browser, though this may limit certain features.`,
  },
  {
    title: '9. Grievance Officer',
    content: `For privacy-related queries, contact our Grievance Officer at: privacy@benignienterprises.com | 123 Business Park, Ring Road, Surat, Gujarat 395002 | +91 90000 00000. We respond within 30 days as required by law.`,
  },
]

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="min-h-screen bg-navy-900 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-sora text-xs tracking-[0.2em] uppercase text-electric-400 font-600 mb-3">Legal</p>
            <h1 className="font-sora text-4xl font-800 text-white mb-4">Privacy Policy</h1>
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

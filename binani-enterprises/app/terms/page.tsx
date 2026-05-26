import type { Metadata } from 'next'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and Conditions for using Benigni Enterprises financial services.',
}

const sections = [
  { title: '1. Service Description', content: `Benigni Enterprises operates as a financial services referral and DSA (Direct Selling Agent) partner. We facilitate connections between customers and banks, NBFCs, and payment gateway providers. We do not directly issue credit cards, loans, or payment gateway accounts.` },
  { title: '2. User Eligibility', content: `You must be at least 18 years of age and an Indian resident to use our services. By submitting any application, you confirm that the information provided is accurate and complete. Providing false information may result in application rejection and legal action.` },
  { title: '3. No Guarantee of Approval', content: `Submission of any application form on our website does not guarantee approval of the product (credit card, loan, or payment gateway). Approvals are subject to the respective bank's, NBFC's, or gateway's eligibility criteria, credit policies, and documentation requirements.` },
  { title: '4. Consulting Services', content: `Our consulting services are advisory in nature. Benigni Enterprises does not guarantee business outcomes, revenue, or transaction volumes resulting from payment gateway integrations or financial product recommendations.` },
  { title: '5. Intellectual Property', content: `All content on this website — including text, logos, graphics, and software — is the property of Benigni Enterprises and is protected under Indian intellectual property law. Unauthorized reproduction is prohibited.` },
  { title: '6. Limitation of Liability', content: `Benigni Enterprises shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of our services, including but not limited to loan rejections, credit card denials, or payment gateway technical issues.` },
  { title: '7. Data Accuracy', content: `You are responsible for the accuracy of all information submitted. Benigni Enterprises is not liable for delays or rejections resulting from inaccurate or incomplete information provided by the user.` },
  { title: '8. Governing Law & Jurisdiction', content: `These Terms are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in Surat, Gujarat, India.` },
  { title: '9. Amendments', content: `We reserve the right to modify these Terms at any time. Continued use of our services after such changes constitutes acceptance of the updated Terms. Changes will be effective upon posting on this page.` },
  { title: '10. Contact', content: `For any questions regarding these Terms, contact us at: legal@benignienterprises.com | +91 90000 00000 | 123 Business Park, Ring Road, Surat, Gujarat 395002` },
]

export default function TermsPage() {
  return (
    <>
      <div className="min-h-screen bg-navy-900 pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="font-sora text-xs tracking-[0.2em] uppercase text-electric-400 font-600 mb-3">Legal</p>
            <h1 className="font-sora text-4xl font-800 text-white mb-4">Terms & Conditions</h1>
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

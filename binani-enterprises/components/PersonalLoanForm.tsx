'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { personalLoanSchema, PersonalLoanFormData } from '@/lib/validations'
import Toast from './Toast'
import { Banknote, Loader2 } from 'lucide-react'

const employmentOptions = [
  { value: 'salaried', label: 'Salaried' },
  { value: 'self_employed', label: 'Self Employed' },
  { value: 'self_employed_professional', label: 'Self Employed Professional' },
]

const amount = [
  '₹50,000', '₹1,00,000', '₹2,00,000', '₹5,00,000',
  '₹10,00,000', '₹20,00,000', '₹50,00,000+',
]

export default function PersonalLoanForm() {
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<PersonalLoanFormData>({
    resolver: zodResolver(personalLoanSchema),
  })

  const empType = watch('employmentType')

  const onSubmit = async (data: PersonalLoanFormData) => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'PersonalLoan' }),
      })
      const json = await res.json()
      if (json.success) {
        setToast({ type: 'success', message: 'Loan application submitted! Our team will reach out within 24 hours.' })
        reset()
      } else {
        throw new Error(json.error)
      }
    } catch {
      setToast({ type: 'error', message: 'Something went wrong. Please try again or call us directly.' })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {toast && <Toast type={toast.type} message={toast.message} onClose={() => setToast(null)} />}

      <div className="glass-card rounded-3xl p-8 lg:p-10 max-w-2xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-gold-500/15 border border-gold-500/25 flex items-center justify-center">
            <Banknote className="w-6 h-6 text-gold-400" />
          </div>
          <div>
            <h3 className="font-sora font-700 text-white text-lg">Apply for Personal Loan</h3>
            <p className="font-dm text-slate-500 text-sm">Quick approval, minimal documentation</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block font-sora font-600 text-slate-300 text-sm mb-2">
              Full Name <span className="text-red-400">*</span>
            </label>
            <input
              {...register('fullname')}
              type="text"
              placeholder="As per Aadhaar / PAN"
              className="form-input w-full rounded-xl px-4 py-3 text-sm"
            />
            {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name.message}</p>}
          </div>

          {/* phone + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-sora font-600 text-slate-300 text-sm mb-2">
                phone Number <span className="text-red-400">*</span>
              </label>
              <input
                {...register('mobile')}
                type="tel"
                placeholder="10-digit phone number"
                maxLength={10}
                className="form-input w-full rounded-xl px-4 py-3 text-sm"
              />
              {errors.phone && <p className="text-red-400 text-xs mt-1.5">{errors.phone.message}</p>}
            </div>
            <div>
              <label className="block font-sora font-600 text-slate-300 text-sm mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                {...register('email')}
                type="email"
                placeholder="you@email.com"
                className="form-input w-full rounded-xl px-4 py-3 text-sm"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email.message}</p>}
            </div>
          </div>

          {/* PIN Code */}
          <div>
            <label className="block font-sora font-600 text-slate-300 text-sm mb-2">
              PIN Code <span className="text-red-400">*</span>
            </label>
            <input
              {...register('pinCode')}
              type="text"
              placeholder="6-digit PIN code"
              maxLength={6}
              className="form-input w-full rounded-xl px-4 py-3 text-sm"
            />
            {errors.pinCode && <p className="text-red-400 text-xs mt-1.5">{errors.pinCode.message}</p>}
          </div>

          {/* Employment Type */}
          <div>
            <label className="block font-sora font-600 text-slate-300 text-sm mb-3">
              Employment Type <span className="text-red-400">*</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {employmentOptions.map((opt) => (
                <label
                  key={opt.value}
                  className={`relative flex items-center justify-center p-3 rounded-xl border cursor-pointer transition-all duration-200 text-center ${
                    empType === opt.value
                      ? 'bg-gold-500/15 border-gold-500/50 text-gold-400'
                      : 'border-white/8 text-slate-500 hover:border-white/20 hover:text-slate-300'
                  }`}
                >
                  <input
                    {...register('employmentType')}
                    type="radio"
                    value={opt.value}
                    className="sr-only"
                  />
                  <span className="font-sora font-600 text-xs leading-tight">{opt.label}</span>
                </label>
              ))}
            </div>
            {errors.employmentType && <p className="text-red-400 text-xs mt-1.5">{errors.employmentType.message}</p>}
          </div>

          {/* Income fields */}
          {empType === 'salaried' && (
            <div>
              <label className="block font-sora font-600 text-slate-300 text-sm mb-2">
                Monthly Salary (₹) <span className="text-red-400">*</span>
              </label>
              <input
                {...register('monthlySalary')}
                type="number"
                placeholder="e.g. 50000"
                className="form-input w-full rounded-xl px-4 py-3 text-sm"
              />
              {errors.monthlySalary && <p className="text-red-400 text-xs mt-1.5">{errors.monthlySalary.message}</p>}
            </div>
          )}

          {(empType === 'self_employed' || empType === 'self_employed_professional') && (
            <div>
              <label className="block font-sora font-600 text-slate-300 text-sm mb-2">
                Last Filed ITR Amount (₹) <span className="text-red-400">*</span>
              </label>
              <input
                {...register('annualITR')}
                type="number"
                placeholder="Annual income as per ITR"
                className="form-input w-full rounded-xl px-4 py-3 text-sm"
              />
              {errors.itrAmount && <p className="text-red-400 text-xs mt-1.5">{errors.itrAmount.message}</p>}
            </div>
          )}

          {/* Loan Amount */}
          <div>
            <label className="block font-sora font-600 text-slate-300 text-sm mb-2">
              Loan Amount Required <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <select
                {...register('loanAmount')}
                className="form-input w-full rounded-xl px-4 py-3 text-sm appearance-none cursor-pointer"
              >
                <option value="">Select loan amount</option>
                {amount.map((amt) => (
                  <option key={amt} value={amt}>{amt}</option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            {errors.amount && <p className="text-red-400 text-xs mt-1.5">{errors.amount.message}</p>}
          </div>

          {/* Consent */}
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              {...register('consent')}
              type="checkbox"
              className="mt-0.5 w-4 h-4 rounded accent-electric-600"
            />
            <span className="font-dm text-slate-500 text-xs leading-relaxed group-hover:text-slate-400 transition-colors">
              I agree to the{' '}
              <a href="/privacy-policy" className="text-electric-400 hover:underline">Privacy Policy</a>{' '}
              and{' '}
              <a href="/terms" className="text-electric-400 hover:underline">Terms & Conditions</a>.
              I consent to Binani Enterprises contacting me regarding my loan application.
            </span>
          </label>
          {errors.consent && <p className="text-red-400 text-xs">{errors.consent.message}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full py-4 rounded-xl text-base font-sora font-700 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #F59E0B, #FCD34D, #F59E0B)', backgroundSize: '200% auto', color: '#0A0F1E' }}
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Loan Application'
            )}
          </button>
        </form>
      </div>
    </>
  )
}

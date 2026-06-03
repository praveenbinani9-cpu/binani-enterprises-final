'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { creditCardSchema, CreditCardFormData } from '@/lib/validations'
import Toast from './Toast'
import { CreditCard, Loader2, ChevronDown } from 'lucide-react'

const employmentOptions = [
  { value: 'salaried', label: 'Salaried' },
  { value: 'self_employed', label: 'Self Employed' },
  { value: 'self_employed_professional', label: 'Self Employed Professional' },
]

export default function CreditCardForm() {
  const [submitting, setSubmitting] = useState(false)
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<CreditCardFormData>({
    resolver: zodResolver(creditCardSchema),

  defaultValues: {
    fullName: '',
    email: '',
    mobile: '',
    loanAmount: '',
    employmentType: '',
    pinCode: '',
    monthlySalary: '',
    annualITR: '',
    consent: false,
    },
  })

  const empType = watch('employmentType')

  const onSubmit = async (data: CreditCardFormData) => {
    setSubmitting(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'CreditCard' }),
      })
      const json = await res.json()
      if (json.success) {
        setToast({ type: 'success', message: 'Application submitted! We\'ll contact you within 24 hours.' })
        reset()
      } else {
        throw new Error(json.error || 'Submission failed')
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
          <div className="w-12 h-12 rounded-2xl bg-electric-600/20 border border-electric-600/30 flex items-center justify-center">
            <CreditCard className="w-6 h-6 text-electric-400" />
          </div>
          <div>
            <h3 className="font-sora font-700 text-white text-lg">Apply for Credit Card</h3>
            <p className="font-dm text-slate-500 text-sm">Takes less than 2 minutes</p>
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

          {/* Mobile + Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-sora font-600 text-slate-300 text-sm mb-2">
                Mobile Number <span className="text-red-400">*</span>
              </label>
              <input
                {...register('mobile')}
                type="tel"
                placeholder="10-digit mobile"
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
                      ? 'bg-electric-600/20 border-electric-500 text-electric-400'
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

          {/* Conditional income field */}
          {empType === 'salaried' && (
            <div>
              <label className="block font-sora font-600 text-slate-300 text-sm mb-2">
                Monthly Salary (₹) <span className="text-red-400">*</span>
              </label>
              <input
                {...register('monthlySalary')}
                type="number"
                placeholder="e.g. 50000"
                min="15000"
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
                {...register('annualitr')}
                type="number"
                placeholder="Annual income as per ITR"
                className="form-input w-full rounded-xl px-4 py-3 text-sm"
              />
              {errors.itrAmount && <p className="text-red-400 text-xs mt-1.5">{errors.itrAmount.message}</p>}
            </div>
          )}

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
              I consent to Binani Enterprises contacting me regarding my application.
            </span>
          </label>
          {errors.consent && <p className="text-red-400 text-xs">{errors.consent.message}</p>}

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            className="btn-gold w-full py-4 rounded-xl text-base flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              'Submit Application'
            )}
          </button>
        </form>
      </div>
    </>
  )
}

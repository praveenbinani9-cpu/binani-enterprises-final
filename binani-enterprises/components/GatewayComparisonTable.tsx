'use client'
import Link from 'next/link'
import { Star, CheckCircle, Crown } from 'lucide-react'

const gateways = [
  {
    name: 'PayU',
    logo: 'PU',
    color: '#FF6B35',
    settlement: 'T+1',
    fees: '1.5% – 2.0%',
    bestFor: 'Enterprise & High Volume',
    ease: 5,
    recommended: true,
    features: ['Auto-split payouts', 'UPI, Cards, Netbanking', 'EMI support', 'Recurring billing'],
  },
  {
    name: 'Razorpay',
    logo: 'RZ',
    color: '#2563EB',
    settlement: 'T+2',
    fees: '2.0%',
    bestFor: 'Startups & SaaS',
    ease: 5,
    recommended: false,
    features: ['Smart collect', 'Route feature', 'Subscription API', 'Instant refunds'],
  },
  {
    name: 'Cashfree',
    logo: 'CF',
    color: '#06B6D4',
    settlement: 'Same Day',
    fees: '1.75%',
    bestFor: 'Fast Settlements',
    ease: 4,
    recommended: false,
    features: ['Instant settlement', 'Payout APIs', 'Auto-collect', 'QR payouts'],
  },
  {
    name: 'CCAvenue',
    logo: 'CC',
    color: '#8B5CF6',
    settlement: 'T+3',
    fees: '2.0% – 3.0%',
    bestFor: 'Legacy Enterprise',
    ease: 3,
    recommended: false,
    features: ['Multi-currency', '200+ payment modes', 'Fraud detection', 'White-label'],
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`w-3.5 h-3.5 ${s <= rating ? 'star-filled fill-current' : 'star-empty'}`}
        />
      ))}
    </div>
  )
}

export default function GatewayComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-2xl border border-white/8">
      <table className="w-full min-w-[700px]">
        <thead>
          <tr className="border-b border-white/8" style={{ background: 'rgba(255,255,255,0.03)' }}>
            <th className="px-6 py-4 text-left font-sora font-600 text-slate-400 text-xs uppercase tracking-wider">Gateway</th>
            <th className="px-6 py-4 text-left font-sora font-600 text-slate-400 text-xs uppercase tracking-wider">Settlement</th>
            <th className="px-6 py-4 text-left font-sora font-600 text-slate-400 text-xs uppercase tracking-wider">Fees</th>
            <th className="px-6 py-4 text-left font-sora font-600 text-slate-400 text-xs uppercase tracking-wider">Best For</th>
            <th className="px-6 py-4 text-left font-sora font-600 text-slate-400 text-xs uppercase tracking-wider">Ease</th>
            <th className="px-6 py-4 text-left font-sora font-600 text-slate-400 text-xs uppercase tracking-wider">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {gateways.map((gw) => (
            <tr
              key={gw.name}
              className={`table-row-hover transition-colors ${gw.recommended ? 'relative' : ''}`}
              style={gw.recommended ? { background: 'rgba(37,99,235,0.06)' } : {}}
            >
              <td className="px-6 py-5">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-sora font-700 text-white text-sm shrink-0"
                    style={{ background: `${gw.color}22`, border: `1px solid ${gw.color}44` }}
                  >
                    <span style={{ color: gw.color }}>{gw.logo}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-sora font-600 text-white text-sm">{gw.name}</span>
                      {gw.recommended && (
                        <span className="badge-recommended px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Crown className="w-2.5 h-2.5" />
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {gw.features.slice(0, 2).map((f) => (
                        <span key={f} className="text-[10px] text-slate-500 font-dm">{f}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-5">
                <span className={`font-sora font-600 text-sm ${gw.settlement === 'Same Day' ? 'text-green-400' : 'text-slate-300'}`}>
                  {gw.settlement}
                </span>
              </td>
              <td className="px-6 py-5">
                <span className="font-dm text-slate-300 text-sm">{gw.fees}</span>
              </td>
              <td className="px-6 py-5">
                <span className="font-dm text-slate-400 text-sm">{gw.bestFor}</span>
              </td>
              <td className="px-6 py-5">
                <StarRating rating={gw.ease} />
              </td>
              <td className="px-6 py-5">
                <Link
                  href="/payment-gateway#consulting"
                  className={`text-sm font-sora font-600 px-4 py-2 rounded-xl transition-all duration-200 inline-flex items-center gap-1.5 ${
                    gw.recommended
                      ? 'btn-gold'
                      : 'glass-card hover:border-electric-600/40 text-electric-400 hover:text-white'
                  }`}
                >
                  <CheckCircle className="w-3.5 h-3.5" />
                  Get Started
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

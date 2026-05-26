'use client'
import { useEffect } from 'react'
import { CheckCircle, XCircle, X } from 'lucide-react'

interface ToastProps {
  type: 'success' | 'error'
  message: string
  onClose: () => void
}

export default function Toast({ type, message, onClose }: ToastProps) {
  useEffect(() => {
    const t = setTimeout(onClose, 5000)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <div
      className={`fixed top-24 right-4 z-50 max-w-sm w-full rounded-2xl px-5 py-4 flex items-start gap-3 shadow-2xl animate-slide-up ${
        type === 'success' ? 'toast-success' : 'toast-error'
      }`}
    >
      {type === 'success' ? (
        <CheckCircle className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
      ) : (
        <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
      )}
      <p className="font-dm text-sm flex-1 leading-relaxed">{message}</p>
      <button onClick={onClose} className="text-current opacity-60 hover:opacity-100 transition-opacity">
        <X className="w-4 h-4" />
      </button>
    </div>
  )
}

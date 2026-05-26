import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="font-sora text-[100px] font-800 leading-none gradient-text mb-4">404</div>
        <h1 className="font-sora text-2xl font-700 text-white mb-4">Page Not Found</h1>
        <p className="font-dm text-slate-500 mb-8">The page you are looking for does not exist or has been moved.</p>
        <div className="flex gap-4 justify-center">
          <Link href="/" className="btn-blue px-6 py-3 rounded-xl text-sm flex items-center gap-2">
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link href="/contact" className="glass-card px-6 py-3 rounded-xl text-sm text-slate-300 flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}

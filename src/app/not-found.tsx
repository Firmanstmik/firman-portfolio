import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="section-pad container-max flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-tight">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn-primary mt-8">
        <ArrowLeft className="size-4" aria-hidden />
        <span>Back to home</span>
      </Link>
    </section>
  )
}

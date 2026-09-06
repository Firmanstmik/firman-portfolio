'use client'

import Link from 'next/link'
import { Ix } from '@/components/ui/Ix'
import { Icons } from '@/components/ui/icons'
import { useI18n } from '@/i18n/provider'

export default function NotFound() {
  const { t } = useI18n()

  return (
    <section className="section-pad container-max flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="eyebrow">{t.notFound.eyebrow}</p>
      <h1 className="mt-4 text-[clamp(2rem,5vw,3.25rem)] font-semibold tracking-tight">
        {t.notFound.title}
      </h1>
      <p className="mt-4 max-w-md text-muted">
        {t.notFound.lead}
      </p>
      <Link href="/" className="btn-primary mt-8">
        <Ix icon={Icons.arrowLeft} size={16} />
        <span>{t.notFound.back}</span>
      </Link>
    </section>
  )
}

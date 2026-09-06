'use client'

import { useI18n } from '@/i18n/provider'

export function SkipLink() {
  const { t } = useI18n()
  return (
    <a
      href="#home"
      className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-3 focus:py-2 focus:text-bg"
    >
      {t.nav.skip}
    </a>
  )
}

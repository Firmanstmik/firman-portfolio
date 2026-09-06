'use client'

import { LOCALES, type Locale } from '@/i18n/config'
import { useI18n } from '@/i18n/provider'
import { cn } from '@/lib/utils'

export function LanguageSwitch({
  className,
  size = 'md',
}: {
  className?: string
  size?: 'sm' | 'md'
}) {
  const { locale, setLocale, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className={cn(
        'inline-flex items-center rounded-full border border-white/12 bg-white/[0.04] p-0.5',
        className,
      )}
    >
      {LOCALES.map((item) => {
        const active = locale === item.code
        return (
          <button
            key={item.code}
            type="button"
            aria-pressed={active}
            onClick={() => setLocale(item.code as Locale)}
            className={cn(
              'rounded-full font-semibold tracking-wide transition-colors',
              size === 'sm' ? 'px-2.5 py-1 text-[0.7rem]' : 'px-3.5 py-1.5 text-[0.78rem]',
              active
                ? 'bg-accent text-white shadow-[0_0_20px_-8px_rgba(47,128,255,0.9)]'
                : 'text-white/55 hover:text-white',
            )}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

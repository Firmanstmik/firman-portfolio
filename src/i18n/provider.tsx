'use client'

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Project } from '@/data/site'
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, type Locale } from '@/i18n/config'
import { en, type Dictionary } from '@/i18n/en'
import { id } from '@/i18n/id'

const dictionaries: Record<Locale, Dictionary> = { en, id }

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
  localizeProject: (project: Project) => Project
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null
      if (saved === 'en' || saved === 'id') setLocaleState(saved)
    } catch {
      /* ignore */
    }
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    document.documentElement.lang = locale
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    } catch {
      /* ignore */
    }
  }, [locale, ready])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
  }, [])

  const t = dictionaries[locale]

  const localizeProject = useCallback(
    (project: Project): Project => {
      const copy = t.projectsBySlug[project.slug]
      if (!copy) return project
      return {
        ...project,
        category: copy.category,
        tagline: copy.tagline,
        summary: copy.summary,
        role: copy.role,
        problem: copy.problem,
        solution: copy.solution,
        features: copy.features,
        challenges: copy.challenges,
        results: copy.results,
      }
    },
    [t],
  )

  const value = useMemo(
    () => ({ locale, setLocale, t, localizeProject }),
    [locale, setLocale, t, localizeProject],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider')
  return ctx
}

export type Locale = 'en' | 'id'

export const LOCALES: { code: Locale; label: string; native: string }[] = [
  { code: 'en', label: 'EN', native: 'English' },
  { code: 'id', label: 'ID', native: 'Indonesia' },
]

export const DEFAULT_LOCALE: Locale = 'en'
export const LOCALE_STORAGE_KEY = 'firmanlabs-locale'

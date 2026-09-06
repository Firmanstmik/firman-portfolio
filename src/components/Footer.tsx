import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="border-t border-line/80 bg-surface">
      <div className="section-pad mx-auto flex max-w-[1280px] flex-col gap-2 py-7 sm:flex-row sm:items-center sm:justify-between sm:py-8">
        <p className="text-sm text-muted">{t('footer.left')}</p>
        <p className="text-[0.78rem] text-muted">{t('footer.right')}</p>
      </div>
    </footer>
  )
}

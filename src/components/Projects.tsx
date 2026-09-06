import { ArrowUpRight, Check, ExternalLink } from 'lucide-react'
import { useMemo, useState } from 'react'
import { PROJECTS, type ProjectStatus } from '../data'
import { useLanguage } from '../i18n/LanguageContext'
import {
  AnimatePresence,
  HoverLift,
  Magnetic,
  Reveal,
  SectionLabel,
  SectionTitle,
  motion,
  useReducedMotion,
} from './ui'

type Filter = 'all' | ProjectStatus

export function Projects() {
  const { t } = useLanguage()
  const reduce = useReducedMotion()
  const [filter, setFilter] = useState<Filter>('all')

  const items = useMemo(() => {
    if (filter === 'all') return PROJECTS
    return PROJECTS.filter((p) => p.status === filter)
  }, [filter])

  const filters: { id: Filter; key: string }[] = [
    { id: 'all', key: 'projects.filter.all' },
    { id: 'live', key: 'projects.filter.live' },
    { id: 'building', key: 'projects.filter.building' },
  ]

  return (
    <section id="projects" className="section-y">
      <div className="section-pad mx-auto max-w-[1280px]">
        <Reveal>
          <SectionLabel>{t('projects.label')}</SectionLabel>
          <SectionTitle>{t('projects.title')}</SectionTitle>
        </Reveal>
      </div>

      <Reveal className="mt-7 sm:mt-8" delay={0.04}>
        <div className="mobile-snap section-pad flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
          {filters.map((f) => {
            const active = filter === f.id
            return (
              <motion.button
                key={f.id}
                type="button"
                onClick={() => setFilter(f.id)}
                className={`relative shrink-0 rounded-full px-4 py-2.5 text-[0.78rem] font-medium ${
                  active ? 'text-white' : 'border border-line bg-surface text-muted'
                }`}
                whileTap={reduce ? undefined : { scale: 0.97 }}
              >
                {active ? (
                  <motion.span
                    layoutId="project-filter"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="relative z-10">{t(f.key)}</span>
              </motion.button>
            )
          })}
        </div>
      </Reveal>

      <div className="section-pad mx-auto mt-7 grid max-w-[1280px] gap-5 sm:mt-10 sm:gap-7 lg:gap-8">
        <AnimatePresence mode="popLayout">
          {items.map((project, i) => (
            <motion.div
              key={project.id}
              layout
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.45, delay: Math.min(i, 4) * 0.04, ease: [0.22, 1, 0.36, 1] }}
            >
              <HoverLift className="surface-card group overflow-hidden max-lg:rounded-[20px] lg:grid lg:grid-cols-12">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block overflow-hidden bg-canvas-deep lg:col-span-5 lg:border-r lg:border-line/80"
                >
                  <div className="browser-chrome hidden items-center gap-1.5 border-b border-line/80 px-3 py-2.5 sm:flex">
                    <span className="size-2 rounded-full bg-[#ff5f57]" />
                    <span className="size-2 rounded-full bg-[#febc2e]" />
                    <span className="size-2 rounded-full bg-[#28c840]" />
                    <span className="ml-2 truncate text-[0.68rem] text-muted">
                      {project.url.replace(/^https?:\/\//, '')}
                    </span>
                  </div>

                  <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/10]">
                    <motion.img
                      src={project.image}
                      alt={`${project.title} website screenshot`}
                      width={1440}
                      height={900}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                      whileHover={reduce ? undefined : { scale: 1.04 }}
                      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                      onError={(e) => {
                        const el = e.currentTarget
                        el.style.display = 'none'
                        const fallback = el.nextElementSibling as HTMLElement | null
                        if (fallback) fallback.style.display = 'grid'
                      }}
                    />
                    <div
                      className="absolute inset-0 hidden place-items-center"
                      style={{
                        background: `linear-gradient(145deg, ${project.accent}22, ${project.accent}08 50%, #09090b10)`,
                      }}
                    >
                      <p className="font-display text-2xl font-bold tracking-tight text-ink">
                        {project.title}
                      </p>
                    </div>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/35 to-transparent sm:hidden" />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 sm:hidden">
                      <span
                        className={`rounded-full px-2.5 py-1 text-[0.68rem] font-semibold backdrop-blur-md ${
                          project.status === 'live'
                            ? 'bg-white/90 text-accent'
                            : 'bg-amber-50/95 text-amber-800'
                        }`}
                      >
                        {t(`projects.status.${project.status}`)}
                      </span>
                    </div>
                  </div>
                </a>

                <div className="flex flex-col justify-center p-5 max-sm:pt-4 sm:p-7 md:p-9 lg:col-span-7">
                  <div className="hidden flex-wrap items-center gap-2 sm:flex">
                    <span className="text-[0.72rem] font-medium text-muted">{project.code}</span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 text-[0.68rem] font-medium ${
                        project.status === 'live'
                          ? 'bg-accent-soft text-accent'
                          : 'bg-amber-50 text-amber-800'
                      }`}
                    >
                      {t(`projects.status.${project.status}`)}
                    </span>
                    {project.company ? (
                      <span className="rounded-full bg-canvas-deep px-2.5 py-0.5 text-[0.68rem] font-medium text-muted">
                        {project.company}
                      </span>
                    ) : null}
                  </div>

                  {project.company ? (
                    <p className="mb-1 text-[0.72rem] font-medium tracking-[0.04em] text-muted uppercase sm:hidden">
                      {project.company}
                    </p>
                  ) : null}

                  <h3 className="font-display text-[1.4rem] font-bold tracking-tight text-ink sm:mt-3 sm:text-2xl md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-[0.84rem] font-medium text-accent">{t(project.taglineKey)}</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-slate sm:text-[0.98rem]">
                    {t(project.descKey)}
                  </p>

                  <ul className="mt-4 grid gap-2.5 sm:mt-5 sm:grid-cols-2">
                    {project.featureKeys.map((key) => (
                      <li key={key} className="flex items-start gap-2 text-sm text-ink-soft">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                        {t(key)}
                      </li>
                    ))}
                  </ul>

                  <div className="mobile-snap mt-4 flex gap-2 overflow-x-auto pb-0.5 sm:mt-5 sm:flex-wrap sm:overflow-visible">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="shrink-0 rounded-full border border-line bg-canvas px-2.5 py-1 text-[0.7rem] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 sm:mt-7">
                    <Magnetic className="w-full sm:w-fit">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full sm:w-fit"
                      >
                        {t('projects.visit')}
                        <ExternalLink className="size-3.5" aria-hidden />
                        <ArrowUpRight className="size-3.5" aria-hidden />
                      </a>
                    </Magnetic>
                  </div>
                </div>
              </HoverLift>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

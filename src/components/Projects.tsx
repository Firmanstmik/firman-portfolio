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
    <section id="projects" className="section-pad section-y mx-auto max-w-[1280px]">
      <Reveal>
        <SectionLabel>{t('projects.label')}</SectionLabel>
        <SectionTitle>{t('projects.title')}</SectionTitle>
      </Reveal>

      <Reveal
        className="mt-7 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-8 sm:flex-wrap [&::-webkit-scrollbar]:hidden"
        delay={0.04}
      >
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
              whileHover={reduce ? undefined : { y: -2 }}
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
      </Reveal>

      <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-7 lg:gap-8">
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
              <HoverLift className="surface-card group overflow-hidden lg:grid lg:grid-cols-12">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block overflow-hidden border-b border-line/80 bg-canvas-deep lg:col-span-5 lg:border-r lg:border-b-0"
                >
                  <div className="browser-chrome flex items-center gap-1.5 border-b border-line/80 px-3 py-2.5">
                    <span className="size-2 rounded-full bg-[#ff5f57]" />
                    <span className="size-2 rounded-full bg-[#febc2e]" />
                    <span className="size-2 rounded-full bg-[#28c840]" />
                    <span className="ml-2 truncate text-[0.68rem] text-muted">
                      {project.url.replace(/^https?:\/\//, '')}
                    </span>
                  </div>
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <motion.img
                      src={project.image}
                      alt={`${project.title} website screenshot`}
                      width={1440}
                      height={900}
                      loading="lazy"
                      className="h-full w-full object-cover object-top"
                      whileHover={reduce ? undefined : { scale: 1.05 }}
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
                  </div>
                </a>

                <div className="flex flex-col justify-center p-5 sm:p-7 md:p-9 lg:col-span-7">
                  <div className="flex flex-wrap items-center gap-2">
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

                  <h3 className="font-display mt-3 text-[1.45rem] font-bold tracking-tight text-ink sm:text-2xl md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 text-[0.82rem] font-medium text-accent">{t(project.taglineKey)}</p>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-slate sm:text-[0.98rem]">
                    {t(project.descKey)}
                  </p>

                  <ul className="mt-4 grid gap-2 sm:mt-5 sm:grid-cols-2">
                    {project.featureKeys.map((key) => (
                      <li key={key} className="flex items-start gap-2 text-sm text-ink-soft">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                        {t(key)}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-line bg-canvas px-2.5 py-1 text-[0.7rem] text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Magnetic className="mt-6 w-full sm:mt-7 sm:w-fit">
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
              </HoverLift>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  )
}

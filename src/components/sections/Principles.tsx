import { PRINCIPLES } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Ix, type IconsaxIcon } from '@/components/ui/Ix'
import { Icons } from '@/components/ui/icons'

const principleIcons: IconsaxIcon[] = [
  Icons.shield,
  Icons.stack,
  Icons.scale,
  Icons.business,
]

export function Principles() {
  return (
    <section className="section-y relative border-y border-white/8 bg-surface/45">
      <div className="section-pad container-max">
        <Reveal>
          <SectionHeader
            eyebrow="Engineering Approach"
            title="Built For Real-World Problems."
            lead="I engineer systems that survive real users, real deadlines, and real business pressure."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {PRINCIPLES.map((item, i) => (
            <Reveal key={item.code} delay={i * 0.06}>
              <article className="card-surface group relative h-full overflow-hidden p-7 sm:p-8">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-10 h-40 w-40 rounded-full bg-accent/[0.07] blur-3xl transition-opacity group-hover:opacity-100"
                />
                <div className="flex items-start justify-between gap-4">
                  <span className="grid size-11 place-items-center rounded-xl border border-accent/25 bg-accent-soft text-accent">
                    <Ix icon={principleIcons[i]} size={20} />
                  </span>
                  <p className="font-mono text-sm text-accent">{item.code}</p>
                </div>
                <h3 className="mt-5 text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-3 max-w-md text-[0.95rem] leading-relaxed text-muted">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

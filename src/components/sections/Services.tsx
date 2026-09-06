import { SERVICES } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Ix, type IconsaxIcon } from '@/components/ui/Ix'
import { Icons } from '@/components/ui/icons'

const serviceIcons: IconsaxIcon[] = [Icons.web, Icons.mobile, Icons.backend, Icons.deploy]

export function Services() {
  return (
    <section id="services" className="section-y relative border-y border-white/8 bg-surface/35">
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 h-64 w-[min(42rem,100%)] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[100px]"
      />
      <div className="section-pad container-max relative">
        <Reveal>
          <SectionHeader
            eyebrow="What I Do"
            title="End-to-End Development"
            lead="From idea to deployment, I own the full path — product thinking, engineering, and shipping."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = serviceIcons[i]
            return (
              <Reveal key={service.code} delay={i * 0.06}>
                <article className="card-surface group h-full p-6 sm:p-7">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="relative grid size-12 place-items-center overflow-hidden rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/20 to-accent/5 text-accent shadow-[0_0_28px_-12px_rgba(47,128,255,0.8)] transition-transform duration-300 group-hover:scale-105">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]"
                      />
                      <Ix icon={Icon} size={22} />
                    </span>
                    <span className="font-mono text-xs text-muted">{service.code}</span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{service.desc}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

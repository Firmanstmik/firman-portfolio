import { SERVICES } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { AppWindow, Smartphone, Server, Rocket } from 'lucide-react'

const icons = [AppWindow, Smartphone, Server, Rocket]

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
            const Icon = icons[i]
            return (
              <Reveal key={service.code} delay={i * 0.06}>
                <article className="card-surface group h-full p-6 sm:p-7">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl border border-accent/20 bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-105">
                      <Icon className="size-5" aria-hidden />
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

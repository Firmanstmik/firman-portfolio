import { SERVICES } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { AppWindow, Smartphone, Server, Rocket } from 'lucide-react'

const icons = [AppWindow, Smartphone, Server, Rocket]

export function Services() {
  return (
    <section id="services" className="section-y border-y border-white/8 bg-surface/40">
      <div className="section-pad container-max">
        <Reveal>
          <p className="eyebrow">What I Do</p>
          <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight">
            End-to-End Development
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            From idea to deployment, I handle the entire development process.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => {
            const Icon = icons[i]
            return (
              <Reveal key={service.code} delay={i * 0.05}>
                <article className="card-surface h-full p-5 transition-colors duration-300 hover:border-accent/25 sm:p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="grid size-11 place-items-center rounded-full border border-accent/20 bg-accent-soft text-accent">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <span className="font-mono text-xs text-muted">{service.code}</span>
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{service.desc}</p>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

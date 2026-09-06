import { PROCESS } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function Process() {
  return (
    <section id="process" className="section-y">
      <div className="section-pad container-max">
        <Reveal>
          <SectionHeader
            eyebrow="My Process"
            title="From discovery to iteration"
            lead="A clear path from business problem to production system — with ownership at every step."
          />
        </Reveal>

        <div className="relative mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute top-8 right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent lg:block"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((step, i) => (
              <Reveal key={step.code} delay={i * 0.06}>
                <article className="card-surface relative h-full p-6">
                  <div className="grid size-10 place-items-center rounded-full bg-accent font-mono text-xs font-bold text-bg shadow-[0_0_24px_-6px_rgba(34,197,94,0.9)]">
                    {step.code}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{step.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

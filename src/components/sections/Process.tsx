import { PROCESS } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'

export function Process() {
  return (
    <section id="process" className="section-y">
      <div className="section-pad container-max">
        <Reveal>
          <p className="eyebrow">My Process</p>
          <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight">
            From discovery to iteration
          </h2>
        </Reveal>

        <div className="relative mt-10">
          <div
            aria-hidden
            className="pointer-events-none absolute top-7 right-6 left-6 hidden h-px bg-gradient-to-r from-transparent via-accent/35 to-transparent lg:block"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((step, i) => (
              <Reveal key={step.code} delay={i * 0.05}>
                <article className="card-surface relative h-full p-5">
                  <div className="grid size-9 place-items-center rounded-full bg-accent font-mono text-xs font-bold text-bg">
                    {step.code}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold tracking-tight">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

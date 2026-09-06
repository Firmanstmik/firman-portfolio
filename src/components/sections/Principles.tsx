import { PRINCIPLES } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'

export function Principles() {
  return (
    <section className="section-y border-y border-white/8 bg-surface/50">
      <div className="section-pad container-max">
        <Reveal>
          <p className="eyebrow">Engineering Approach</p>
          <h2 className="mt-3 max-w-2xl text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight text-balance">
            Built For Real-World Problems.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {PRINCIPLES.map((item, i) => (
            <Reveal key={item.code} delay={i * 0.05}>
              <article className="card-surface h-full p-6">
                <p className="font-mono text-sm text-accent">{item.code}</p>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

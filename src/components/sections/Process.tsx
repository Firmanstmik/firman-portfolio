import { PROCESS } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { Ix, type IconsaxIcon } from '@/components/ui/Ix'
import { Icons } from '@/components/ui/icons'

const processIcons: IconsaxIcon[] = [
  Icons.discover,
  Icons.plan,
  Icons.build,
  Icons.launch,
  Icons.improve,
]

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
                  <div className="grid size-11 place-items-center rounded-2xl bg-accent text-white shadow-[0_0_28px_-8px_rgba(47,128,255,0.95)]">
                    <Ix icon={processIcons[i]} size={20} color="#ffffff" />
                  </div>
                  <p className="mt-4 font-mono text-[0.7rem] tracking-wide text-accent">
                    {step.code}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold tracking-tight">{step.title}</h3>
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

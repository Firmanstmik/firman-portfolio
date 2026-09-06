import Image from 'next/image'
import { TECH_STACK } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function TechStack() {
  return (
    <section id="stack" className="section-y">
      <div className="section-pad container-max">
        <Reveal>
          <SectionHeader
            eyebrow="Tech Stack"
            title="Technologies I Work With"
            lead="Modern, reliable tools chosen for production systems — not trend chasing."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-3 gap-3.5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 lg:gap-4">
          {TECH_STACK.map((tech, i) => (
            <Reveal key={tech.name} delay={Math.min(i, 10) * 0.03}>
              <div className="card-surface group flex flex-col items-center gap-3 px-3 py-6 transition-transform duration-300 hover:-translate-y-0.5">
                <span className="grid size-11 place-items-center rounded-xl border border-white/8 bg-white/[0.03] transition-colors group-hover:border-accent/30 group-hover:bg-accent/10">
                  <Image
                    src={tech.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="size-6 opacity-90"
                    unoptimized
                  />
                </span>
                <span className="text-center text-[0.72rem] text-muted">{tech.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

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

        <div className="mt-12 grid grid-cols-3 gap-3.5 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 lg:gap-4">
          {TECH_STACK.map((tech, i) => (
            <Reveal key={tech.name} delay={Math.min(i, 8) * 0.03}>
              <div className="card-surface flex flex-col items-center gap-3 px-3 py-6">
                <Image
                  src={tech.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="size-7 opacity-90"
                  unoptimized
                />
                <span className="text-center text-[0.72rem] text-muted">{tech.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

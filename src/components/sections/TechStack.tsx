import Image from 'next/image'
import { TECH_STACK } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'

export function TechStack() {
  return (
    <section id="stack" className="section-y">
      <div className="section-pad container-max">
        <Reveal>
          <p className="eyebrow">Tech Stack</p>
          <h2 className="mt-3 text-[clamp(1.8rem,4vw,3rem)] font-semibold tracking-tight">
            Technologies I Work With
          </h2>
          <p className="mt-3 max-w-xl text-muted">
            Modern, reliable, and scalable tools for real-world applications.
          </p>
        </Reveal>

        <div className="mt-10 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {TECH_STACK.map((tech, i) => (
            <Reveal key={tech.name} delay={Math.min(i, 8) * 0.03}>
              <div className="card-surface flex flex-col items-center gap-3 px-3 py-5 transition-colors duration-300 hover:border-accent/25">
                <Image
                  src={tech.icon}
                  alt=""
                  width={28}
                  height={28}
                  className="size-7"
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

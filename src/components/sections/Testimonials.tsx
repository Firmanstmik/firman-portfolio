import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/data/site'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function Testimonials() {
  return (
    <section id="testimonials" className="section-y relative border-y border-white/8 bg-surface/40">
      <div className="section-pad container-max">
        <Reveal>
          <SectionHeader
            eyebrow="Testimonials"
            title="What Clients Say"
            lead="Real feedback from people I&apos;ve worked with on production systems."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.07}>
              <blockquote className="card-surface flex h-full flex-col p-7 sm:p-8">
                <div className="mb-5 flex gap-1 text-accent">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <Star key={idx} className="size-3.5 fill-current" aria-hidden />
                  ))}
                </div>
                <p className="flex-1 text-[1.02rem] leading-relaxed text-text/90">
                  “{item.quote}”
                </p>
                <footer className="mt-8 flex items-center gap-3.5 border-t border-white/8 pt-6">
                  <div className="grid size-12 place-items-center rounded-full bg-accent-soft text-sm font-semibold text-accent">
                    {item.initial}
                  </div>
                  <div>
                    <cite className="not-italic text-sm font-semibold">{item.name}</cite>
                    <p className="mt-0.5 text-xs text-muted">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
